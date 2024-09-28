import React, { useState } from 'react';
import './App.css';
import assignmentData from './assignmentData.json';
import { Helmet } from 'react-helmet';

const data = assignmentData[0].data;

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const clickCard = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const clickBackground = (event) => {
    if (event.target.className === 'modal') {
      closeModal();
    }
  };

  const clickClose = (event) => {
    if (event.target.className === 'close') {
      closeModal();
    }
  }

  const closeModal = () => {
    setSelectedUser(null);
    setModalVisible(false);
  };

  

  return (
    <div className="App">
      <Helmet>
      <title>CSTP 2701 - User Cards Assignment</title>
      </Helmet>
      <header>
        {/* <h1>User Cards Assignment</h1> */}
        <a href="https://moodle.vcc.ca/mod/assign/view.php?id=3459497">User Cards Assignment</a>
        <a href="https://github.com/xameryn">Maximilian Amann</a>
      </header>
      <div className="container">
        {data.map((user) => (
          <div key={`card-${user.id}`} className="card" id={`card-${user.id}`} onClick={() => clickCard(user)}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}'s avatar`} className="avatar" />
            <div className="info">
              <h4>{`${user.first_name} ${user.last_name}`}</h4>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalVisible && selectedUser && (
        <div className="modal" id={`modal-${selectedUser.id}`} onClick={clickBackground}>
          <div className="modal-content">
            <span className="close" onClick={clickClose}>&times;</span>
            <div className="modal-top-color"></div>
            <div className="avatar-container">
              <img src={selectedUser.avatar} alt={`${selectedUser.first_name} ${selectedUser.last_name}'s avatar`} className="avatar" />
              <svg className="avatar-svg">
                <path d="M 0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50 T 700 50 T 800 50" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <path d="M 0 100 Q 50 70, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="info">
              <h4>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h4>
              <p>{selectedUser.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;