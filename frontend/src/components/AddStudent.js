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
    );
}

export default AddStudent;
