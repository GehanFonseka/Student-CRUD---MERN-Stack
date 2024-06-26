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
        
        <div className="container" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#e0f7fa' }}>
          <h1 style={{ color: '#333', textAlign: 'center', marginTop: '20px' }}>All Students</h1>
          <table className="table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', textAlign: 'center' }}>
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
                      style={{ margin: '0 5px' }}
                      onClick={() => handleEdit(student._id)}
                    >
                      Edit
                    </button>
      
                    <button
                      className="btn btn-outline-danger"
                      style={{ margin: '0 5px' }}
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
