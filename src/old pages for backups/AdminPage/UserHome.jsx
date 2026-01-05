import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsersWithPets, deleteUser } from "./UserReducer";

function UserHome() {
  const users = useSelector((state) => state.users || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersWithPets());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="admin-container background-color-components">
      <div className="admin-header">
        <h1 className="admin-title">List of Users</h1>
        <button className="user-create-btn ">
          <Link to="CreateUsers ">Create new user</Link>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Pet</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="table-col">{user.id}</td>
                <td className="table-col">{user.name}</td>
                <td className="table-col">{user.email}</td>
                <td className="table-col">
                  {user.pet ? (
                    <span>{user.pet.breed}</span>
                  ) : (
                    <span>No pet assigned</span>
                  )}
                </td>
                <td className="table-btn">
                  <button className="user-edit-btn">
                    <Link to={`/userHome/edit/${user.id}`}>Edit</Link>
                  </button>
                  <button
                    className="user-delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserHome;
