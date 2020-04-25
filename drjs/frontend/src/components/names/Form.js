import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { addName, updateName } from "../../services/names";
import { clearNamesActionCreator } from "../../reducers/selectedName";

const Form = (props) => {
  const dispatch = useDispatch();
  const selectedName = useSelector((state) => state.selectedName);
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (Object.entries(selectedName).length) {
      const { name, shopName, status } = selectedName;
      setName(name);
      setShopName(shopName);
      setStatus(status);
    }
  }, [selectedName]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleShopName = (e) => {
    setShopName(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const clearSelectedName = () => {
    setName("");
    setShopName("");
    setStatus("");
    dispatch(clearNamesActionCreator());
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (!name || !shopName || !status) return;
    if (
      name === selectedName.name &&
      shopName === selectedName.shopName &&
      status === selectedName.status
    )
      return;

    const updatedName = {
      id: selectedName.id,
      name,
      shop_name: shopName,
      status,
    };

    dispatch(updateName(updatedName), clearSelectedName());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !shopName || !status) return;

    const newName = {
      name,
      shop_name: shopName,
      status,
    };

    dispatch(addName(newName));
  };

  return (
    <div className="card card-body mt-4 mb-4">
      {Object.entries(selectedName).length ? (
        <h2>Update Name</h2>
      ) : (
        <h2>Add Name</h2>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Shop Name</label>
          <input
            className="form-control"
            type="text"
            name="shopName"
            onChange={handleShopName}
            value={shopName}
          />
        </div>
        <div className="form-group">
          <label>Staus</label>
          <textarea
            className="form-control"
            type="text"
            name="status"
            onChange={handleStatus}
            value={status}
          />
        </div>
        <div className="form-group">
          {Object.entries(selectedName).length ? (
            <>
              <button className="btn btn-primary" onClick={onUpdate}>
                Update
              </button>
              <button className="btn btn-info" onClick={clearSelectedName}>
                Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
