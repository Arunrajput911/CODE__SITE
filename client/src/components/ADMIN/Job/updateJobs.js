import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { InfoContext } from "../../../state/Store";
import Loader from "../../Loader/Loader";
import {
  generateError,
  generateWarning,
  generateSuccess,
  clearEverything,
} from "../../../state/info/infoActions";
import UpdateJobsView from "./jobFormView";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";


const updateJob = (props) => {
    const info = useContext(InfoContext);
    const [titleName, setTitleName] = useState("");
    const [workType, setWorkType] = useState("");
    const [remote, setRemote] = useState(false);
    const [department, setDepartment] = useState("");
    const [applyBy, setApplyBy] = useState(new Date(Date.now()));
    const [appliedOn, setAppliedOn] = useState(new Date(Date.now()));
    const [startedBy, setStartedBy] = useState(new Date(Date.now()));
    const [duration, setDuration] = useState("");
   
    const [jobDescription, setJobDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [whoCanApply, setWhoCanApply] = useState('');
    const [perks, setPerks] = useState([]);
    const [opening, setOpening] = useState("");
//   const bannerImgRef = React.createRef();
//   const cardImgRef = React.createRef();
//   const [bannerUrl, setBannerUrl] = useState("");
//   const [cardImgUrl, setCardImgUrl] = useState("");
  const [loading, setLoading] = useState(true); //since initially event will be loading

  const setDefaultValues = (jobs) => {
    setTitleName(jobs.titleName);
    setWorkType(jobs.workType);
    setRemote(jobs.remote);
    setApplyBy(new Date(jobs.applyBy));
    setAppliedOn(new Date(jobs.appliedOn));
    setStartedBy(new Date(jobs.startedBy));
    setDuration(jobs.duration);
    setJobDescription(jobs.jobDescription);
    setSkills(jobs.Skills);
    setWhoCanApply(jobs.whoCanApply);
    setPerks(jobs.perks);
    setOpening(jobs.opening);
    setEditorState(
      EditorState.createWithContent(convertFromRaw(JSON.parse(jobs.details)))
    );
    // setBannerUrl(jobs.banner);
    // setCardImgUrl(jobs.cardImg);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/jobs/${props.match.params.id}`)
      .then((res) => {
        setLoading(false);
        setDefaultValues(res.data.jobs);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response && err.response.status == 404)
          props.history.push("/error404");
      });
    //clear any alerts when this component unmounts
    return () => info.dispatch(clearEverything());
  }, []);
  const handleTagChange = (values) => {
    let parsedValues = [];
    if (values) parsedValues = JSON.parse(values);
    parsedValues = parsedValues.map((tagObj) => tagObj.value);
    console.log(parsedValues);
    setTags(parsedValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (
        !titleName ||
        !workType ||
        !remote ||
        !department ||
        !applyBy ||
        !appliedOn ||
        !startedBy ||
        !duration ||
        !jobDescription ||
        !whoCanApply ||
        !perks ||
        !opening ||
        !skills ||
      !JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    )
      return info.dispatch(
        generateWarning(
          "All the fields are required. Please fill in the fields!"
        )
      );
    // if (!bannerImgRef.current.files[0]) data.append("banner", bannerUrl);
    // else data.append("banner", bannerImgRef.current.files[0]);
    // if (!cardImgRef.current.files[0]) data.append("cardImg", cardImgUrl);
    // else data.append("cardImg", cardImgRef.current.files[0]);
    data.append("titlename", titleName);
        data.append("workType", workType);
        data.append("remote", entryFee);
        data.append("department", department);
        data.append("applyBy", applyBy);
        data.append("appliedOn", appliedOn);
        data.append("startedBy", startedBy);
        data.append("duration", duration);
        data.append("jobDescription", jobDescription);
        data.append("skills", JSON.stringify(skills));
        data.append("whoCanApply", whoCanApply);
        data.append("perks", JSON.stringify(perks));
        data.append("opening", opening);
    data.append(
      "details",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    setLoading(true);
    axios
      .put(`/put/job/${props.match.params.id}`, data)
      .then((res) => {
        setLoading(false);
        if (res.data.job) {
          setDefaultValues(res.data.job);
          info.dispatch(generateSuccess("Job Updated Successfull!"));
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response && err.response.data)
          info.dispatch(generateError(err.response.data.errorMsg));
        else info.dispatch(generateError("Something went wrong!"));
      });
  };
  const state = {
    titleName, setTitleName,
    workType, setWorkType,
    remote, setRemote,
    department, setDepartment,
    applyBy, setApplyBy,
    appliedOn, setAppliedOn,
    startedBy, setStartedBy,
    duration, setDuration,
    jobDescription, setJobDescription,
    skills, setSkills,
    whoCanApply, setWhoCanApply,
    perks, setPerks,
    opening, setOpening,
    handleSubmit,
  
  };

  return (
    <>
      {!loading && (
        <UpdateJobsView
          ref={{ bannerImgRef, cardImgRef }}
          {...state}
          action="Update Job"
        />
      )}
      {loading && <Loader />}
    </>
  );
};

export default updateJob;
