import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const Detail = React.lazy(() => import("./pages/Detail"));
const Catalog = React.lazy(() => import("./pages/Catalog"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
