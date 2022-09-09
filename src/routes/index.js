import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePpage/Homepage.component";

function Loading() {
  return <p>Loading...</p>;
}

// const HomePage = lazy(() => import("/imports/ui/pages/home.js"));

export default function MainRoutes() {
  return (
    <Suspense fallback={<Loading loading />}>
      <Switch>
        <Route path="/" exact component={HomePage} />

        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/signup" component={Signup} /> */}

        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Suspense>
  );
}
