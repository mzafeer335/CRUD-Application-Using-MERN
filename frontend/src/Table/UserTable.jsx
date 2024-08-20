import { useState } from "react";
import AddUser from "../components/AddUser";
import DeleteUser from "../components/DeleteUser";
import Table from "../components/Table";
import UpdateUser from "../components/UpdateUser";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserTable() {
  const [value, setValue] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });
  const [updateId, setUpdateid] = useState();
  const [deleteId, setDeleteId] = useState();
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await axios.put(
        `http://localhost:4000/api/update/${updateId}`,
        value
      );
      const response = updateUser.data;
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = (id) => {
    setUpdateid(id);
  };
  const deleteUser = (deleteid) => {
    setDeleteId(deleteid);
  };

  const handelDelete = async () => {
    try {
      const deleteuser = await axios.delete(
        `http://localhost:4000/api/delete/${deleteId}`
      );
      const response = deleteuser.data;
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Table updateUser={updateUser} deleteUser={deleteUser} />
      <AddUser />
      <UpdateUser
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <DeleteUser handelDelete={handelDelete} />
    </div>
  );
}
