import axios from "axios";

import {
  createNameActionCreator,
  getNamesActionCreator,
  editNameActionCreator,
  deleteNameActionCreator,
} from "../reducers/names";

// ADD Name
export const addName = (newName) => (dispatch) => {
  axios
    .post("/api/names/", newName)
    .then((res) => {
      dispatch(createNameActionCreator(res.data));
    })
    .catch((err) => console.log(err));
};

// GET Names
export const getNames = () => (dispatch) => {
  axios
    .get("/api/names")
    .then((res) => {
      dispatch(getNamesActionCreator(res.data));
    })
    .catch((err) => console.log(err));
};

// UPDATE Name
export const updateName = (editedName) => (dispatch) => {
  axios
    .put(`api/names/${editedName.id}/`, editedName)
    .then((res) => {
      console.log(res.data);
      dispatch(editNameActionCreator(res.data));
    })
    .catch((err) => console.log(err));
};

// DELETE Name
export const deleteName = (id) => (dispatch) => {
  axios
    .delete(`/api/names/${id}/`)
    .then(() => {
      dispatch(deleteNameActionCreator(id));
    })
    .catch((err) => console.log(err));
};
