import React from "react";

export default function Login() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Login</h2>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="mb-2">
            <button className="btn btn-success">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
