import { client } from "../utils/Utils";

export const getAllUsers = () =>
  client()
    .get("https://rubato-no.herokuapp.com/api/person/list-all")
    .then(res => res.data);

export const deletePerson = id =>
  client()
    .delete(`https://rubato-no.herokuapp.com/api/person/delete/${id}`)
    .then(() => true);

export const searchPersons = searchTerm =>
  client()
    .get(`https://rubato-no.herokuapp.com/api/person/search/${searchTerm}`)
    .then(res => res.data);
