import React, { useState } from "react";
import Modal from "../layout/Modal";
import { TextInput } from "../layout/FieldInput";
import { SubmitButton } from "../layout/Buttons";
import { client } from "../utils/Utils";

const UpdateBand = ({ showForm, setShowForm, band, setRefetch }) => {
  const [bandName, setBandName] = useState(band.name);
  const [about, setAbout] = useState(band.about);
  const [phone, setPhone] = useState(band.phone);
  const [price, setPrice] = useState(band.price);

  const handleSubmit = event => {
    event.preventDefault();

    client()
      .put(`https://rubato-no.herokuapp.com/api/person/update-band/${band.idPerson}`, {
        name: bandName,
        about: about,
        phone: phone,
        price: price
      })
      .then(() => {
        setShowForm(false);
        setRefetch(2);
      });
  };

  return (
    <Modal
      isOpen={showForm}
      title={"Update Band Information"}
      onClose={() => setShowForm(false)}
    >
      <div className="container center-align">
        <form onSubmit={handleSubmit}>
          <TextInput
            defaultValue={band.name}
            name="name"
            value={bandName}
            icon="account_circle"
            onChange={e => setBandName(e.target.value)}
          />
          <TextInput
            name="about"
            value={about}
            icon="description"
            onChange={e => setAbout(e.target.value)}
          />
          <TextInput
            name="number"
            value={phone}
            icon="phone"
            onChange={e => setPhone(e.target.value)}
          />
          <TextInput
            name="price"
            value={price}
            icon="attach_money"
            onChange={e => setPrice(e.target.value)}
          />
          <SubmitButton name="Submit" />
        </form>
      </div>
    </Modal>
  );
};

export default UpdateBand;
