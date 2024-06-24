import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllStudents() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const fetchStudents = () => {
        axios.get("http://localhost:8070/student/")
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => {
                alert(`Error Fetching Students: ${err.message}`);
            });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleEdit = (id) => {
        navigate(`/update/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8070/student/delete/${id}`)
            .then(() => {
                alert("Student deleted");
                fetchStudents(); // Refresh the list after deletion
            })
            .catch((err) => {
                alert(`Error deleting student: ${err.message}`);
            });
    };

    return (
        <div className="container">
            <h1>All Students</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => handleEdit(student._id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDelete(student._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
