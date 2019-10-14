import React, { createContext, useContext } from "react";
import { decodeToken } from "./Utils";

export const ProfileContext = createContext(null);

const decoded = decodeToken(localStorage.getItem("token"));

const ProfileProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={{ decoded }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const profile = useContext(ProfileContext);
  if (!profile.decoded) return false;
  return profile && profile.decoded.payload;
};

export default ProfileProvider;
