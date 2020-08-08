import React from 'react';
import doubleCheck from '../assets/done_all.svg'

function Message({ message }) {
  return (
    <div className={`message ${message.isMainUser ? 'sent' : 'received'}`}>
        { message.msg }
        <div className="metadata">
        <span className="date">{message.date.toLocaleString()}</span>
            <img src={doubleCheck} alt="" className="icon-small" />
        </div>
    </div>
  );
}

export default Message;