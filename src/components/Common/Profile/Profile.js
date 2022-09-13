import React from "react";
import Avatar from "@mui/material/Avatar";
import ProfileImg from "./../../../assets/images/pp.png";
export default function Profile() {
  return (
    <Avatar
      sx={{ width: 32, height: 32, outline: "1px solid #606c38", padding: 0.1 }}
      src={ProfileImg}
    />
  );
}

// #606c38, #283618, #fefae0, #dda15e, #bc6c25
