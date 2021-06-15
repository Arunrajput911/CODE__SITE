import React, { lazy, Suspense, useEffect } from "react";
import Loader from "../components/Loader/Loader";
const CertificateVerification = lazy(() =>
  import("../components/CertificateVerification/CertificateVerification")
);

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <CertificateVerification {...props} />
    </Suspense>
  );
};
