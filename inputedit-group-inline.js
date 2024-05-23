import React, { useState } from 'react';

const Demo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditingGroup, setIsEditingGroup] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleEditGroup = () => {
    setIsEditingGroup(true);
    setIsEditingName(true);
    setIsEditingEmail(true);
  };

  const handleUpdateGroup = () => {
    setIsEditingGroup(false);
    setIsEditingName(false);
    setIsEditingEmail(false);
  };

  const handleCancelEdit = () => {
    setIsEditingGroup(false);
    setIsEditingName(false);
    setIsEditingEmail(false);
  };

  const handleEditInline = (field) => {
    if (field === 'name') {
      setIsEditingName(!isEditingName);
    } else if (field === 'email') {
      setIsEditingEmail(!isEditingEmail);
    }
  };

  return (
    <div>
      <button className="editGroup" onClick={handleEditGroup}>Edit Group</button>
      <ul>
        <li>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditingName}
          />
          {isEditingGroup ?(
             null
          ):(
           <>
           <button className="editInline" onClick={() => handleEditInline('name')}>
              {isEditingName ? 'Save' : 'Edit'}
            </button>
           
           </>
          )}
        
        </li>
        <li>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditingEmail}
          />
      
          {isEditingGroup ?(
             null
          ):(
           <>
           <button className="editInline" onClick={() => handleEditInline('email')}>
              {isEditingEmail ? 'Save' : 'Edit'}
            </button>
           
           </>
          )}
        </li>
      </ul>
      {isEditingGroup && (
        <div>
          <button className="saveGroup" onClick={handleUpdateGroup}>Update</button>
          <button className="cancelGroup" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Demo;