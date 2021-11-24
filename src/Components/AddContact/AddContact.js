import React, { useState } from "react";

export default function AddContact(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  // function setFirstName(e){
  //   setFname(e.target.value);
  // }
  function AddContactHandler() {
    props.contactEvent({ fname, lname, email, city, phone });
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => setLname(e.target.value)}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Phone"
            />
          </div>
          <div className="mb-2">
            <button
              data-testid="btnAdd"
              className="btn btn-secondary"
              onClick={AddContactHandler}
            >
              Add Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
