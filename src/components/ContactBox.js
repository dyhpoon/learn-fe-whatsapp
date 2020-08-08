import React from 'react';

import doubleCheck from '../assets/done_all.svg'
import Avatar from './Avatar'

function ContactBox({ contact, setContactSelected, messages }) {
  const maxTs = Math.max(...messages.map(m => m.date.getTime()))
  const lastMessage = messages.find(m => m.date.getTime() == maxTs)

  function truncate(message, length) {
    return message.length > length ? `${message.substring(0, length)} ...` : message
  }

  return (
    <div className="contact-box" onClick={() => setContactSelected(contact)}>
        <Avatar user={contact} />

        <div className="right-section">
            <div className="contact-box-header">
                <h3 className="avatar-title">{contact.name}</h3>
                <span className="time-mark">{lastMessage.date.toLocaleString()}</span>
            </div>
            <div className="last-msg">
                <img src={doubleCheck} alt="" className="icon-small" />
                <span className="text">{truncate(lastMessage.msg, 45)}</span>
            </div>
        </div>
    </div>
  );
}

export default ContactBox;