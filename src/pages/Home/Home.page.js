import React, { useEffect, useContext } from "react";
// import { MyThemeContext } from "../../contexts/Theme";

export default function HomePage() {
  // useEffect(() => {
  //   const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //   fetch("http://localhost:4030/get-time", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({ location: tzid }),
  //   })
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log("res is ", res);
  //     })
  //     .catch(function (res) {
  //       console.log(res);
  //     });
  // });
  return (
    <div>
      <h1>This is the homepage</h1>
    </div>
  );
}
