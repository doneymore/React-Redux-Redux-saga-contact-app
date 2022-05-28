import React, { useState, useEffect } from "react";
import { MDBValidation, MDBIcon, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createuserStart,
  updateUserStart,
  updateUserSuccess,
} from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AddEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValues, setFormValues] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { name, email, phone, address } = formValues;
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const allUsers = users.find((item) => item.id === Number(id));
      setFormValues({ ...allUsers });
    }
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createuserStart(formValues));
        toast.success("User Successfully Added");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        dispatch(updateUserStart({ id, formValues }));
        toast.success("User Successfully Added");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } else {
      dispatch(updateUserSuccess({ ...formValues }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ margintTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "Add user Details" : "Update user details"}{" "}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={name || ""}
          name="name"
          type="text"
          onChange={onInputChange}
          label="name"
          required
          validation="please provide a name"
          invalid
        />
        <br />
        <MDBInput
          value={email || ""}
          name="email"
          type="email"
          onChange={onInputChange}
          label="email"
          required
          validation="please provide an email"
          invalid
        />
        <br />
        <MDBInput
          value={phone || ""}
          name="phone"
          type="number"
          onChange={onInputChange}
          label="phone no"
          required
          validation="please provide a phone no."
          invalid
        />
        <br />
        <MDBInput
          value={address || ""}
          name="address"
          type="text"
          onChange={onInputChange}
          required
          label="address"
          validation="please provide an address"
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "Ädd" : "Update"}
          </MDBBtn>
          <MDBBtn onClick={() => navigate("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEdit;
