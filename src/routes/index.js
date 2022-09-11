import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home.page";

import Test from "../components/Test";

function Loading() {
  return <p>Loading...</p>;
}

// const HomePage = lazy(() => import("/imports/ui/pages/home.js"));

export default function MainRoutes() {
  return (
    <Suspense fallback={<Loading loading />}>
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/test" component={Test} />
        {/* <Route path="/signup" component={Signup} /> */}

        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Suspense>
  );
}
