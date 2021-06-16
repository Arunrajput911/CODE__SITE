import React, { useEffect, useState, useContext } from "react";
import jobRoutes from "./jobRoutes";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import ContentLoaderSvg from "../../EventCard/EventCardLoader";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

import { DeleteForeverRounded, EditTwoTone, PeopleAltTwoTone } from "@material-ui/icons";
import { InfoContext } from "../../../state/Store";
import {
  generateSuccess,
  generateError,
} from "../../../state/info/infoActions";
import Pagination from "../../Pagination/Pagination";

const ConfirmDeletion = ({ modalOpen, setModalOpen, handleDelete, id }) => {
  const toggle = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <Modal isOpen={modalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm</ModalHeader>
      <ModalBody>
        The event will be deleted permanently and can't be restored later. Are
        you sure you want to delete?
      </ModalBody>
      <ModalFooter>
        <Button color="warning" onClick={() => handleDelete(id)}>
          Delete
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};


const jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteCofirmationModalOpen] =
    useState(false);
  const info = useContext(InfoContext);
  //managing pagination -- start
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(6);
  const [limit, setLimit] = useState(6);
  //managing pagination -- end
  useEffect(() => {
    setLoading(true);
    //scroll to top when mounted;
    window.scrollTo(0, 0);
    axios
      .get(`/api/jobs/?limit=${limit}&page=${currentPage - 1}`)
      .then((res) => {
        setLoading(false);
        setTotalItems(res.data.totalItems);
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const handleDelete = (id) => {
    setDeleteCofirmationModalOpen(false);
    setLoading(true);
    axios
      .delete(`/delete/job/${id}`)
      .then((res) => {
        console.log(res.data.jobs);
        setLoading(false);
        setJobs(res.data.jobs);
        info.dispatch(generateSuccess("Delete Successfully!"));
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data) {
          info.dispatch(generateError(err.response.data));
        } else {
          info.dispatch(generateError("Something went wrong!"));
        }
      });
  };
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <DashboardLayout routes={jobRoutes}>
      <Row style={{ width: "100%", margin: "0" }}>
        <Col style={{ display: "flex", flexWrap: "wrap" }}>
          {!loading &&
            jobs.map((job) => {
              return (
                <div className="job-card-container">
                  <EventCard key={job._id} {...event} />
                  <div className="update-remove-button-container">
                  <Link to={`/admin/jobs/${job._id}/jobApplications`}>
                      <button>
                        <PeopleAltTwoTone />
                      </button>
                    </Link>
                    <Link to={"/admin/jobs/updateJob/" + job._id}>
                      <button>
                        <EditTwoTone />
                      </button>
                    </Link>
                    <button
                      className="remove-button"
                      onClick={() =>
                        setDeleteCofirmationModalOpen((prev) => !prev)
                      }
                    >
                      <DeleteForeverRounded />
                    </button>
                    <ConfirmDeletion
                      modalOpen={deleteConfirmationModalOpen}
                      setModalOpen={setDeleteCofirmationModalOpen}
                      handleDelete={handleDelete}
                      id={event._id}
                    />
                  </div>
                </div>
              );
            })}
          {loading && (
            <>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
              <div className="job-card-container">
                <ContentLoaderSvg />
              </div>
            </>
          )}
        </Col>
      </Row>
      {totalItems > limit && (
        <Pagination
          totalItems={totalItems}
          pageSize={limit}
          handlePageChange={handlePageChange}
        />
      )}
    </DashboardLayout>
  );
};
export default jobs;
