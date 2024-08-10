import React, { useState, useEffect } from 'react';
import './SellerProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCheckCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SellerProfile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        profileImage: 'https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png',
    });

    const [notification, setNotification] = useState(null);
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const navigate = useNavigate ();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setProfile(storedUser);
        }
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

    const handleSave = () => {
        if (Object.values(profile).some(field => field === '')) {
            showNotification('All fields must be filled out.', 'error');
            return;
        }
        localStorage.setItem('user', JSON.stringify(profile));
        setIsProfileUpdated(true);
        setIsEditMode(false);
        showNotification('Profile updated successfully.', 'success');
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
        <div className="seller-profile-page">
            <div className="seller-profile-container">
                <div className="seller-sidebar">
                <div className="seller-profile-picture">
                    <img src={profile.profileImage} alt="Profile" className="seller-profile-icon" />
                    <label htmlFor="seller-profile-upload" className="seller-profile-upload-label">
                        <FontAwesomeIcon icon={faCamera} className='seller-camera-icon' />
                    </label>
                    <input 
                        id="seller-profile-upload" 
                        type="file" 
                        accept="image/*" 
                        capture="camera" 
                        style={{ display: 'none' }} 
                        onChange={handleImageChange} 
                    />
                </div>

                    <br></br><br></br>
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <p>{profile.email}</p>
                    <button className="seller-logout-button" onClick={handleLogout}>
                        LOGOUT <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ff0000",}} />
                    </button>                
                    </div>
                <div className="seller-profile-details">
                    <nav className="seller-profile-nav">
                        <a href="/sellerprofile" className="seller-active">Account Settings</a>
                    </nav>
                    <form className="seller-profile-form">
                        <div className="seller-form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'seller-edit-mode' : ''}
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="city"
                                value={profile.city}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'seller-edit-mode' : ''}
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                value={profile.state}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'seller-edit-mode' : ''}
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Postcode</label>
                            <input
                                type="text"
                                name="postcode"
                                value={profile.postcode}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'seller-edit-mode' : ''}
                            />
                        </div>
                        <div className="seller-form-group">
                            <label>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={profile.country}
                                onChange={handleChange}
                                required
                                disabled={!isEditMode}
                                className={isEditMode ? 'seller-edit-mode' : ''}
                            />
                        </div>
                        <div className="seller-form-group">
                            <button
                                type="button"
                                className={`seller-save-profile-button ${isEditMode ? 'seller-edit-mode' : 'seller-view-mode'}`}
                                onClick={handleEditClick}
                            >
                                {isEditMode ? 'Save Profile' : 'Edit Profile'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {notification && (
                <div className={`seller-notification ${notification.type}`}>
                    <FontAwesomeIcon icon={faCheckCircle} className='seller-notification-icon' />
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default SellerProfile;
