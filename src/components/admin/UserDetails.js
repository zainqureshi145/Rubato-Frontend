import React, { useEffect, useState } from "react";
import { getCurrentUser, getProfile, ROLE } from "../utils/Utils";
import Spinner from "../layout/Spinner";
import { CardHeader } from "../layout/Card";
import { BandContent } from "../band/Band";
import {
  ReadOnlyAudioSection,
  ReadOnlyImageSection,
  ReadOnlyVideoSection
} from "./BandDetails";
import { Bookings } from "../user/BookingList";
import { Section } from "../layout/Section";

const UserDetails = ({ match, history }) => {
  const profile = getProfile();
  const [user, setUser] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    getCurrentUser(id).then(res => setUser(res));
  }, [id]);

  const goBack = () => {
    const uri =
      profile && profile.user.role === ROLE.ADMIN ? "/admin" : "/user-profile";
    history.push(uri);
  };

  if (!user) return <Spinner />;
  console.log(user);
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <CardHeader title={user.name} icon={"arrow_back"} onClick={goBack} />
      <BandContent band={user} />
      <Section title={"Bookings"} showFullUnderline>
        {user.bookings && user.bookings.length > 0 ? (
          <Bookings bookings={user.bookings} />
        ) : (
          <div>Band is free for booking!</div>
        )}
      </Section>
      <ReadOnlyVideoSection user={user} />
      <ReadOnlyAudioSection user={user} />
      <ReadOnlyImageSection user={user} />
    </div>
  );
};

export default UserDetails;
