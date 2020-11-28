import React from 'react';
import { Form } from 'react-bootstrap';
import '../../index.css';

export default function App() {
  return (
    <div>
      <form>
        <h3>Missing Report</h3>

        <div className="form-group">
          <label>Complaint ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter complaint ID"
          />
        </div>

        <div className="form-group">
          <label>Email adddress</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Sex</label>
          <br />
          <label class="radio-inline">
            <input type="radio" name="sex" value="Male" />
            Male&nbsp;&nbsp;
          </label>
          <label class="radio-inline">
            <input type="radio" name="sex" value="Female" />
            Female&nbsp;&nbsp;
          </label>
          <label class="radio-inline">
            <input type="radio" name="sex" value="Female" />
            Others&nbsp;&nbsp;
          </label>
        </div>

        <div className="form-group">
          <label>age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
          />
        </div>
        <div className="form-group">
          <label>Height</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter height"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Enter age"
          />
        </div>
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            multiple
            accept="image/*"
            label="Image input"
          />
        </Form.Group>
        {}

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
