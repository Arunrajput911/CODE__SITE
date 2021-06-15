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
        path: "/admin/addJobs",
        name: "Add New Job",
        sidebarVisible: true,
        Component: addJobs,
      },
      {
        path: "/admin/updateJob/:id",
        name: "Update Job",
        sidebarVisible: false,
        Component: updateJobs,
      },{
        path:"/admin/:id/jobApplications",
        name: "Applications",
        sidebarVisible:false,
        Component: jobApplications
      }
];