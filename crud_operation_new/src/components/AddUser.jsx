import React from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="d-flex justify-content-end">
      <Link to="/create" className="btn btn-success">
        Add User +
      </Link>
    </div>
  );
};

export default AddUser;
