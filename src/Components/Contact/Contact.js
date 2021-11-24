import React from "react";

function Contact(props) {
  function DeleteContactHandler(id) {
    props.DeleteContact(id);
  }

  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <i
            className="fa-solid fa-circle-xmark fa-lg float-end text-danger"
            onClick={DeleteContactHandler.bind(this, props.phone)}
          ></i>
          <h5 className="card-title">
            {props.fname} {props.lname}
          </h5>
          <p className="card-text">{props.email} </p>
          <p className="card-text">{props.city} </p>
          <p className="card-text">{props.phone} </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
