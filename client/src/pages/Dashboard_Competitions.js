import React, { lazy, Suspense, useEffect } from "react";
const Dashboard_Competitions = lazy(() =>
  import("../components/Dashboard_Competitions/Competitions")
);
// import Dashboard_Competitions from "../components/Dashboard_Competitions/Competitions";
import Loader from "../components/Loader/Loader";
export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard_Competitions {...props} />
    </Suspense>
  );
};
