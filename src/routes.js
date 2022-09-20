import React from "react";

const Developer = React.lazy(() => import("./pages/Personal/index"));

const routes = [{ path: "/", component: Developer }];

export default routes;
