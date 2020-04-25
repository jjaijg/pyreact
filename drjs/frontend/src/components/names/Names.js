import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteName as deleteNameAction } from "../../services/names";
import { selectNameActionCreator } from "../../reducers/selectedName";

const Names = ({ names }) => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");

  const editName = (name) => () => {
    dispatch(selectNameActionCreator(name));
  };

  const deleteName = (id) => () => {
    dispatch(deleteNameAction(id));
  };

  const handleSearch = (e) => {
    setSearched(e.target.value.trim().toLowerCase());
  };

  return (
    <div>
      <h2>Names List</h2>
      <input
        className="form-control"
        type="search"
        name="search"
        onChange={handleSearch}
        value={searched}
        placeholder="Search by Name"
      />
      {names.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Shop Name</th>
              <th>Status</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {names.map(({ id, name, shop_name, status, created_at }) => {
              if (!searched || name.toLowerCase().trim().includes(searched))
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{shop_name}</td>
                    <td>{status}</td>
                    <td>{created_at}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info"
                        onClick={editName({
                          id,
                          name,
                          shopName: shop_name,
                          status,
                        })}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={deleteName(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      ) : (
        <h2>No Names found in DB!!!</h2>
      )}
    </div>
  );
};

Names.propTypes = {
  deleteNameAction: PropTypes.func,
};

export default Names;
