import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css"; // Import CSS for styling

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      console.log("Fetched Users:", response.data); // Add this line
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`/api/users/${editUserId}`, formData);
        setIsEditing(false);
        setEditUserId(null);
      } else {
        await axios.post("/api/users", formData);
      }
      fetchUsers();
      setFormData({ name: "", email: "", role: "user" });
      alert(`User ${isEditing ? "updated" : "added"} successfully!`);
    } catch (error) {
      console.error(`Error ${isEditing ? "updating" : "adding"} user`, error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleEditUser = (user) => {
    setFormData({ name: user.name, email: user.email, role: user.role });
    setIsEditing(true);
    setEditUserId(user._id);
  };

  return (
    <div className="users-container">
      <h2>Manage Users</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">{isEditing ? "Update" : "Add"} User</button>
      </form>

      <h3>All Users</h3>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Users.css"; // Import CSS for styling

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "user",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editUserId, setEditUserId] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(
//           `http://localhost:5001/api/users/${editUserId}`,
//           formData
//         );
//         setIsEditing(false);
//         setEditUserId(null);
//       } else {
//         await axios.post("http://localhost:5001/api/users", formData);
//       }
//       fetchUsers();
//       setFormData({ name: "", email: "", role: "user" });
//       alert(`User ${isEditing ? "updated" : "added"} successfully!`);
//     } catch (error) {
//       console.error(`Error ${isEditing ? "updating" : "adding"} user`, error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5001/api/users/${id}`);
//       fetchUsers();
//       alert("User deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting user", error);
//     }
//   };

//   const handleEditUser = (user) => {
//     setFormData({ name: user.name, email: user.email, role: user.role });
//     setIsEditing(true);
//     setEditUserId(user._id);
//   };

//   return (
//     <div className="users-container">
//       <h2>Manage Users</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Role</label>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit">{isEditing ? "Update" : "Add"} User</button>
//       </form>

//       <h3>All Users</h3>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;
