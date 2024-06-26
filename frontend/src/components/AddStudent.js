import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newStudent = {
            name,
            age,
            gender
        };
//send data to the backend=>
        axios.post("http://localhost:8070/student/add", newStudent).then(() => {
            alert("Student added");
            setName("");
            setAge("");
            setGender("");
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div className="background">
          <style>
            {`
              .background {
  background-color: #e0f7fa;
  padding: 50px 0;
  min-height: 100vh;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group label {
  color: #fff;
}

.form-control {
  background-color: #fff; /* Light background for input fields */
  color: #000; /* Dark text color for contrast */
  border: 1px solid #ccc;
}

.form-control:focus {
  border-color: #007bff;
  background-color: #f9f9f9; /* Slightly lighter background when focused */
}

.btn {
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #333;
}

.btn:hover {
  background-color: #21a1f1;
}

              
            `}
          </style>
          <div className="container">
            <form onSubmit={sendData}>
              <div className="form-group">
                <label htmlFor="name">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Student Name"
                  value={name} // Controlled component
                  onChange={(e) => setName(e.target.value)}
                  required // Required attribute
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  placeholder="Enter Student Age"
                  value={age} // Controlled component
                  onChange={(e) => setAge(e.target.value)}
                  required // Required attribute
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  placeholder="Enter Student Gender"
                  value={gender} // Controlled component
                  onChange={(e) => setGender(e.target.value)}
                  required // Required attribute
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      );
}

export default AddStudent;
