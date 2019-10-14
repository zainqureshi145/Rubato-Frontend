import React, { useState, useEffect } from "react";
import moment from "moment";
import { client, date, getProfile } from "../utils/Utils";
import { List } from "../layout/Collection";

export const Bookings = ({ bookings }) => (
  <ul className="collection">
    {bookings
      .filter(it => moment(it.toDate).isAfter(moment().subtract(1, "days")))
      .map(booking => (
        <List key={booking.id}>
          <b>Start:</b> {date(booking.fromDate)}
          <br />
          <b>End:</b> {date(booking.toDate)}
          <br />
        </List>
      ))}
  </ul>
);

const BookingList = () => {
  const [bookings, setBookings] = useState(null);
  const profile = getProfile();

  useEffect(() => {
    client()
      .get(
        `https://rubato-no.herokuapp.com/api/booking/user-bookings/${profile.user.idPerson}`
      )
      .then(res => setBookings(res.data));
  }, [profile.user.idPerson]);

  if (bookings === null || bookings.length === 0) {
    return <div>You did not have any bookings.</div>;
  }

  return <Bookings bookings={bookings} />;
};

export default BookingList;
