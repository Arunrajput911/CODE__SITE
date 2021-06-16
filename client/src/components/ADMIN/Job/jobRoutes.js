import jobs from "./Events";
import addJobs from "./AddEvents";
import updateJobs from "./UpdateEvent";
import jobApplications from "./EventRegistrations";

const jobRoutes = [
    {
        path: "/admin/jobs",
        name: "Jobs",
        sidebarVisible: true,
        Component: jobs,
      },
      {
        path: "/admin/job/addJob",
        name: "Add New Job",
        sidebarVisible: true,
        Component: addJob,
      },
      {
        path: "/admin/job/updateJob/:id",
        name: "Update Job",
        sidebarVisible: false,
        Component: updateJob,
      },{
        path:"/admin/job/:id/jobApplications",
        name: "Applications",
        sidebarVisible:false,
        Component: jobApplications
      }
];