import React from "react";
import { Redirect } from "react-router-dom";
import { getProfile, ROLE } from "./Utils";

const RouteRedirect = () => {
  const profile = getProfile();
  if (!profile) return <Redirect to="/login" />;

  switch (profile.user.role) {
    case ROLE.ADMIN:
      return <Redirect to="/admin" />;
    case ROLE.USER:
      return <Redirect to="/user-profile" />;
    case ROLE.BAND:
      return <Redirect to="/band" />;
    default:
      return <Redirect to="/login" />;
  }
};

export default RouteRedirect;
