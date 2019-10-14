import React, { useState } from "react";
import moment from "moment";
import { DateInput, SuggestSelect } from "../layout/FieldInput";
import { SubmitButton } from "../layout/Buttons";
import { client, ROLE } from "../utils/Utils";

const mapToOptions = bandList =>
  bandList &&
  bandList
    .filter(band => band.role === ROLE.BAND)
    .map(it => (
      <option key={it.personId} value={it.personId}>
        {it.name}
      </option>
    ));

const BookingForm = ({ bandList, setShowForm }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [band, setBand] = useState("");
  const [error, setError] = useState("");

  const isValid = () => {
    if (moment(fromDate).isAfter(toDate) || moment(toDate).isBefore(fromDate)) {
      setError("Start date cannot be after end date.");
      return false;
    }
    if (moment(toDate).isBefore(moment())) {
      setError("Booking cannot be done in the past.");
      return false;
    }
    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isValid()) {
      client()
        .post("https://rubato-no.herokuapp.com/api/booking/create", {
          fromDate: fromDate,
          toDate: toDate,
          bandId: band
        })
        .then(() => {
          setShowForm(false);
        });
    }
  };

  return (
    <div className="container center-align">
      <form onSubmit={handleSubmit}>
        <SuggestSelect
          options={mapToOptions(bandList)}
          value={band}
          onChange={e => setBand(e.target.value)}
        />
        <DateInput
          name="fromDate"
          label="Start Date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <DateInput
          name="toDate"
          label="End Date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />
        <SubmitButton name={"Submit"} />
      </form>
    </div>
  );
};

export default BookingForm;
