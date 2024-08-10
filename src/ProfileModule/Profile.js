import React, { useState, useEffect } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCheckCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        license_num: '',
        factory_name: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        profileImage: 'https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png',
    });

    const [notification, setNotification] = useState(null);
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setProfile(storedUser);
                const response = await fetch(`http://localhost:9000/profile?email=${storedUser.email}`);
                const data = await response.json();
                setProfile(data);
            }
        };
        fetchUserProfile();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevProfile => ({
                    ...prevProfile,
                    profileImage: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        if (Object.values(profile).some(field => field === '')) {
            showNotification('All fields must be filled out.', 'error');
            return;
        }

        try {
            const response = await fetch('http://localhost:9000/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });

            if (response.ok) {
                const updatedProfile = await response.json();
                localStorage.setItem('user', JSON.stringify(updatedProfile));
                setIsProfileUpdated(true);
                setIsEditMode(false);
                showNotification('Profile updated successfully.', 'success');
            } else {
                showNotification('Failed to update profile.', 'error');
            }
        } catch (error) {
            showNotification('An error occurred. Please try again.', 'error');
        }
    };

    const handleEditClick = () => {
        if (isEditMode) {
            handleSave();
        } else {
            setIsEditMode(true);
        }
    };

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 7000); // 7 seconds
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/home');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <div className="sidebar">
                    <div className="profile-picture">
                        <img src={profile.profileImage} alt="Profile" className="profile-icon" />
                        <label htmlFor="profile-upload" className="profile-upload-label">
                            <FontAwesomeIcon icon={faCamera} className='camera-icon' />
                        </label>
                        <input id="profile-upload" type="file" accept="image/*" capture="camera" style={{ display: 'none' }} onChange={handleImageChange} />
                    </div>
                    <br></br><br></br>
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <p>{profile.email}</p>
                    <button className="logout-button" onClick={handleLogout}>
                        LOGOUT <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ff0000",}} />
                    </button>                
                </div>
                <div className="profile-details">
                    <nav className="profile-nav">
                        <a href="/profile" className="active">Account Settings</a>
                    </nav>
                    <form className="profile-form">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone_number"
                                value={profile.phoneNumber}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>License Number</label>
                            <input
                                type="text"
                                name="license_num"
                                value={profile.license_num}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Factory Name</label>
                            <input
                                type="text"
                                name="factory_name"
                                value={profile.factory_name}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={profile.city}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                value={profile.state}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Postcode</label>
                            <input
                                type="text"
                                name="postcode"
                                value={profile.postcode}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={profile.country}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'edit-mode' : ''}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                className={`save-profile-button ${isEditMode ? 'edit-mode' : 'view-mode'}`}
                                onClick={handleEditClick}
                            >
                                {isEditMode ? 'Save Profile' : 'Edit Profile'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {notification && (
                <div className={`notification ${notification.type}`}>
                    <FontAwesomeIcon icon={faCheckCircle} className='notification-icon' />
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default Profile;
