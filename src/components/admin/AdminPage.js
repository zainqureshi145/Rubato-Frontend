import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Collection, CollectionItem } from "../layout/Collection";
import { deletePerson, getAllUsers, searchPersons } from "./AdminUtils";
import { getProfile, ROLE } from "../utils/Utils";

import Modal from "../layout/Modal";
import { IconButton } from "../layout/Buttons";
import Spinner from "../layout/Spinner";
import css from "../layout/styles/Admin.module.scss";
import { TextInput } from "../layout/FieldInput";

const AdminPage = () => {
  const [users, setUsers] = useState(null);
  const [deleteObj, setDelete] = useState({ clicked: false, id: -1 });
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const profile = getProfile();

  useEffect(() => {
    searchTerm.length === 0 && getAllUsers().then(response => {
      setUsers(response);
    });
  }, [profile.token, refetch, searchTerm]);

  useEffect(() => {
    searchTerm &&
      searchTerm.length > 0 &&
      searchPersons(searchTerm).then(res => setUsers(res));
  }, [searchTerm]);

  const handleDelete = () => {
    deletePerson(deleteObj.id).then(res => {
      setDelete({ clicked: false, id: -1 });
      setRefetch(res);
    });
  };

  if (!users) return <Spinner />;
  if (profile.user.role !== ROLE.ADMIN) return <Redirect to="/login" />;

  return (
    <>
      <div className="container center-align">
        <TextInput
          icon={"search"}
          name="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          label="Search anyone"
        />
      </div>
      <Collection>
        {users &&
          users.map(user => (
            <div className={css.item} key={user.personId}>
              <CollectionItem
                title={user.name}
                firstLine={user.username}
                secondLine={user.about}
                link={`/user-details/${user.personId}`}
                isAdmin
                onDeleteClick={() =>
                  setDelete({ clicked: true, id: user.personId })
                }
              />
            </div>
          ))}
        <Modal
          title="Confirmation Alert!!"
          isOpen={deleteObj.clicked}
          onClose={() => setDelete({ clicked: false, id: -1 })}
        >
          <GetConfirmationText users={users} id={deleteObj.id} />
          <div className={css.deleteButton}>
            <IconButton
              text={"Yes, Delete it"}
              classname="red"
              onClick={handleDelete}
            />
          </div>
          <IconButton
            text={"Cancel"}
            onClick={() => setDelete({ clicked: false, id: -1 })}
          />
        </Modal>
      </Collection>
    </>
  );
};

export default AdminPage;

export const GetConfirmationText = ({ users, id }) => {
  const selected =
    users &&
    id !== -1 &&
    users.filter(user => user.personId.toString() === id.toString())[0];
  const initialText = `This action is permanent and it will delete all the data related to ${
    selected ? selected.name : ""
  }.`;

  return (
    <div className={css.text}>
      {initialText} <br />
      Are you sure you want to delete?
    </div>
  );
};
