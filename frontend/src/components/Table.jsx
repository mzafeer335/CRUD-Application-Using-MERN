import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Table({ updateUser, deleteUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const fetchUser = await axios.get("http://localhost:4000/api/get");
        const response = fetchUser.data;

        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <IoAddCircleOutline />
                  <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Father</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.user?.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td> {elem.name} </td>
                    <td>{elem.fathername} </td>
                    <td> {elem.email} </td>
                    <td> {elem.phone}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => updateUser(elem._id)}
                      >
                        <MdOutlineEdit />
                      </a>
                      <a
                        href="#"
                        className="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModal"
                        onClick={() => {
                          deleteUser(elem._id);
                        }}
                      >
                        <MdDelete />
                      </a>
                      {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
