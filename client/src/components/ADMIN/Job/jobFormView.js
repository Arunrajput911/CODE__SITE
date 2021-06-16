import React from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import jobRoutes from "./jobRoutes";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Row,
  Col,
  Form,
} from "reactstrap";
import EditorComponent from "../../Editor/Editor";


const jobFormView = React.forwardRef(
  (
    {
      titleName, setTitleName,
      workType, setWorkType,
      remote, setRemote,
      department, setDepartment,
      applyBy, setApplyBy,
      appliedOn, setAppliedOn,
      applyBy, setApplyBy,
      duration, setDuration,
      jobDescription, setJobDescription,
      skills, setSkills,
      whoCanApply, setWhoCanApply,
      perks, setPerks,
      opening, setOpening,

      bannerUrl,
      cardImgUrl,
      ...props
    },
    { bannerImgRef, cardImgRef }
  ) => {
    return (
      <DashboardLayout routes={jobRoutes}>
        <Card className="add-jobs-card">
          <CardHeader>
            <CardTitle>
              <h5>{props.action}</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="jobName" className="fontType">
                      Job Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={titleName}
                      onChange={(e) => setTitleName(e.target.value)}
                      placeholder="job Name"
                      id="jobName"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="workType" className="fontType">
                      Work Type
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                      id="workType"
                    >
                      <option value="">Type</option>
                      <option value="office">office</option>
                      <option value="work From Home">work From Home</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="remote" className="fontType">
                      Remote
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={remote}
                      onChange={(e) => setRemote(e.target.value)}
                      placeholder="remote"
                      id="remote"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Row style={{ width: "100%", marginLeft: 0 }}>
                  <Col md="4">
                  <FormGroup>
                      <label htmlFor="applyBy" className="fontType">
                        Apply By
                      </label>
                      <KeyboardTimePicker
                        margin="0"
                        id="applyBy"
                        label=""
                        value={applyBy}
                        onChange={(time) => setApplyBy(time)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <label htmlFor="appliedOn" className="fontType">
                        Applied Date
                      </label>
                      <KeyboardDatePicker
                        margin="0"
                        id="appliedOn"
                        label=""
                        format="dd/MM/yyyy"
                        value={appliedOn}
                        onChange={(date) => setAppliedOn(date)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                      <label htmlFor="startedDate" className="fontType">
                        started Date
                      </label>
                      <KeyboardTimePicker
                        margin="0"
                        id="startedBy"
                        label=""
                        value={startedBy}
                        onChange={(time) => setStartedBy(time)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ width: "100%", marginLeft: 0 }}>
                  <Col md="4">
                  <FormGroup>
                      <label htmlFor="duration" className="fontType">
                        Duration
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Duration(2 Days / 2 Hours)"
                        id="duration"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                    <label htmlFor="whoCanApply" className="fontType">
                      Who Can Apply
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={whoCanApply}
                      onChange={(e) => setWhoCanApply(e.target.value)}
                      placeholder="Write a short description for who can apply for this job"
                      id="whoCanApply"
                    />
                  </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                    <label htmlFor="perks" className="fontType">
                      Perks
                    </label>
                    <input 
                      placeholder="Enter perks"
                      className="form-control"
                      value={perks.join(", ")}
                      onChange={(e) => setPerks(e.detail.value)}
                    />
                  </FormGroup>
                  </Col>
                </Row>
              </MuiPickersUtilsProvider>


              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="jobdescription" className="fontType">
                      Short Description
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Write a short description for the event"
                      id="jobdescription"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                    <label htmlFor="department" className="fontType">
                      Department
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="department"
                      id="department"
                    />
                  </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                    <label htmlFor="skills" className="fontType">
                      Skills
                    </label>
                    <input
                      placeholder="Enter skills"
                      className="form-control"
                      value={skills.join(", ")}
                      onChange={(e) => setSkills(e.detail.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{width:"100%",amrginLeft:0}}>
              <Col md="12">
                    <FormGroup>
                    <label htmlFor="totalOpening" className="fontType">
                      Total Opening
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={opening}
                      onChange={(e) => setTotalOpening(e.target.value)}
                      placeholder="totalOpening"
                      id="totalOpening"
                    />
                  </FormGroup>
                  </Col>
              </Row>
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="6">
                  <FormGroup>
                    <label className="fontType" htmlFor="bannerImgFile">
                      Banner Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      ref={bannerImgRef}
                      id="bannerImgFile"
                    />
                    {bannerUrl && (
                      <a
                        href={bannerUrl}
                        target="_blank"
                        style={{ color: "cornflowerblue" }}
                      >
                        Banner
                      </a>
                    )}
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="fontType" htmlFor="cardImgFile">
                      Card Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      ref={cardImgRef}
                      id="cardImgFile"
                    />
                    {cardImgUrl && (
                      <a
                        href={cardImgUrl}
                        target="_blank"
                        style={{ color: "cornflowerblue" }}
                      >
                        Card Image
                      </a>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="6">
                  <FormGroup>
                    <Button type="file" className="btn" id="add-job">
                      {props.action}
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </DashboardLayout>
    );
  }
);
export default jobFormView;
