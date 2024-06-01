import React from 'react';
import './ApprovalItem.css';

const ApprovalItem = ({ username, pet, description }) => {
  return (
    <div className="approval-item">
      <div className="approval-item-info">
        <span className="approval-item-username">{username}</span>
        <span className="approval-item-pet">{pet}</span>
        <span className="approval-item-description">{description}</span>
      </div>
      <div className="approval-item-actions">
        <button className="approve-button">✔️</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default ApprovalItem;
