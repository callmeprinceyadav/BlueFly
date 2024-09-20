import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './profile.css'; // Profile styling

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState(''); // Initially empty
  const [gender, setGender] = useState(''); // Initially empty
  const [dob, setDob] = useState(''); // Initially empty
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    // Check if the user is logged in and fetch the name from localStorage
    const storedName = localStorage.getItem('firstName');
    if (storedName) {
      setName(storedName);
    }
  }, []); // Only run once when the component mounts

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
    // Save other updated profile information in localStorage if needed
    localStorage.setItem('gender', gender);
    localStorage.setItem('dob', dob);
    localStorage.setItem('age', age);
  };

  const handleLogout = () => {
    // Clear user session and redirect to login
    sessionStorage.clear();
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-pic-container">
        {profilePic ? (
          <img src={profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-pic-placeholder">Upload Photo</div>
        )}
        {isEditing && (
          <input type="file" onChange={handleProfilePicChange} className="upload-btn" />
        )}
      </div>
      <div className="profile-details">
        <div className="profile-field">
          <label>Name:</label>
          {isEditing ? (
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditing} />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Gender:</label>
          {isEditing ? (
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <span>{gender}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Date of Birth:</label>
          {isEditing ? (
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          ) : (
            <span>{dob}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Age:</label>
          {isEditing ? (
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          ) : (
            <span>{age}</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        <button className="edit-btn" onClick={toggleEdit}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        {isEditing && (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        )}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
