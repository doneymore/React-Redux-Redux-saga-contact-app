import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const Userinfo = () => {
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleUser = users.find((item) => item.id === Number(id));
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <hr />
        <p className="col-md-12 fs-3">User Details</p>
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6 fw-bold">Name:</p>
        <p className="col-md-6">{singleUser.name}</p>
        <p className="col-md-6 fw-bold">Email:</p>
        <p className="col-md-6">{singleUser.email}</p>
        <p className="col-md-6 fw-bold">Phone:</p>
        <p className="col-md-6">{singleUser.phone}</p>
        <p className="col-md-6 fw-bold">Address:</p>
        <p className="col-md-6">{singleUser.address}</p>
        <MDBBtn color="danger" onClick={() => navigate("/")}>
          Go Back
        </MDBBtn>
      </div>
    </div>
  );
};

export default Userinfo;