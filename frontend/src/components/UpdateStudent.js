import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        age: "",
        gender: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8070/student/`)
            .then((res) => {
                setStudent(res.data);
            })
            .catch((err) => {
                alert(`Error fetching student: ${err.message}`);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8070/student/update/${id}`, student)
            .then(() => {
                alert("Student updated");
                navigate("/"); // Navigate back to the students list
            })
            .catch((err) => {
                alert(`Error updating student: ${err.message}`);
            });
    };

    return (
        <div className="container">
            <h2>Edit Student</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={student.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        value={student.age}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={student.gender}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}
