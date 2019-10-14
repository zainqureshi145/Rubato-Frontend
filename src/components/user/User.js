import React, { useState, useEffect } from "react";
import { Collection, CollectionItem } from "../layout/Collection";
import Spinner from "../layout/Spinner";
import { getAllUsers } from "../admin/AdminUtils";
import { ROLE } from "../utils/Utils";
import { Section } from "../layout/Section";
import { IconButton } from "../layout/Buttons";
import Modal from "../layout/Modal";
import BookingForm from "./BookingForm";
import css from "../layout/styles/Admin.module.scss";
import BookingList from "./BookingList";

const User = () => {
  const [bandList, setBandList] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getAllUsers().then(res => setBandList(res));
  }, []);

  if (!bandList) return <Spinner />;
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <Section
        title={"Bookings"}
        button={
          <IconButton
            text={"Add Booking"}
            icon={"playlist_add"}
            classname="blue-grey"
            onClick={() => setShowForm(true)}
          />
        }
      >
        <>
          <Modal
            isOpen={showForm}
            title={"Add Booking"}
            onClose={() => setShowForm(false)}
          >
            <BookingForm bandList={bandList} setShowForm={setShowForm} />
          </Modal>
          <BookingList />
        </>
      </Section>
      <Section title={"Band List"} showFullUnderline>
        <Collection>
          {bandList &&
            bandList
              .filter(b => b.role === ROLE.BAND)
              .map(band => (
                <div className={css.item} key={band.personId}>
                  <CollectionItem
                    title={band.name}
                    firstLine={band.username}
                    secondLine={band.phone}
                    link={`/user-details/${band.personId}`}
                  />
                </div>
              ))}
        </Collection>
      </Section>
    </div>
  );
};

export default User;
