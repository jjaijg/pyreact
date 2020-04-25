import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import Form from "./Form";
import Names from "./Names";

import { getNames } from "../../services/names";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.names);

  useEffect(() => {
    dispatch(getNames());
  }, []);

  return (
    <div className="row">
      <div className="col-sm">
        <Form />
      </div>
      <div className="col-sm">
        <Names names={names} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getNames: PropTypes.func,
};

export default Dashboard;
