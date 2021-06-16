import "date-fns";
import React, { useState, useContext, useEffect } from "react";
import AddJobView from "./jobFormView";
import axios from "axios";
import { InfoContext } from "../../../state/Store";
import Loader from "../../Loader/Loader";
import {
  generateError,
  generateWarning,
  generateSuccess,
  clearEverything
} from "../../../state/info/infoActions";

import { EditorState, convertToRaw } from "draft-js";

const AddJobs = (props) => {
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

    // const bannerImgRef = React.createRef();
    // const cardImgRef = React.createRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      return () => info.dispatch(clearEverything());
    },[]);

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
//  if (!bannerImgRef.current.files[0]) {
//       return info.dispatch(
//         generateWarning("Banner is required to be uploaded!")
//       );
//     }
//     if (!cardImgRef.current.files[0]) {
//       return info.dispatch(
//         generateWarning("Card Image is required to be uploaded!")
//       );
//     }
      
       
        data.append("titlename", titleName);
        data.append("workType", workType);
        data.append("remote", remote);
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
        data.append("details", JSON.stringify(convertToRaw(editorState.getCurrentContent())));
        setLoading(true);
        axios
          .post("/post/admin/addJob", data)
          .then((res) => {
            setLoading(false);
            info.dispatch(generateSuccess("Job Added Successfull!"));
          })
          .catch((err) => {
            setLoading(false);
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
          <AddJobView
            ref={{ bannerImgRef, cardImgRef }}
            {...state}
            action="Add Job"
          />
          {loading && <Loader />}
        </>
      );
};
    export default AddJobs;
