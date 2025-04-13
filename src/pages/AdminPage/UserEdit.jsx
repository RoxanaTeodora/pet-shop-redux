import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://66ccbaefa4dd3c8a71b8a15d.mockapi.io/user/users";

function UserEdit() {
  const { id } = useParams();
  const userId = Number(id);
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [petId, setPet] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch existing user data from the API when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}/${userId}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const userData = await response.json();
        setName(userData.name);
        setEmail(userData.email);
        setPet(userData.petId);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        navigate("/userHome");
      }
    };
    fetchUser();
  }, [userId, navigate]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          petId: petId,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      navigate("/userHome");
    } catch (error) {
      console.error("Update failed: ", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="user-update" onSubmit={handleUpdate}>
        <h2>Update User</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="form-pet-input"
            type="text"
            name="name"
            placeholder="Enter name"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-pet-input"
            name="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="petID">Pet:</label>
          <input
            type="petID"
            className="form-pet-input"
            name="petID"
            placeholder="Enter pet id"
            value={petId}
            onChange={(e) => setPet(e.target.value)}
          />
        </div>
        <button className="user-create-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserEdit;
