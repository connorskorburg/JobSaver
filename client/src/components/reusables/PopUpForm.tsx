import React, { CSSProperties } from 'react';

const PopUpForm = (model: string) => {
    const applicationInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-green-500 border-gray-300 border-b-2'
    const interviewInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-blue-500 border-gray-300 border-b-2'
    const networkInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-indigo-500 border-gray-300 border-b-2'
    return (
        <article>
            <input type="text" className={applicationInputFocus} style={inputStyle} placeholder="Title" />
            <input type="text" className={applicationInputFocus} style={inputStyle} placeholder="Company Name" />
            <input type="url" className={applicationInputFocus} style={inputStyle} placeholder="Application Link" />
            <input type="url" className={applicationInputFocus} style={inputStyle} placeholder="Company Link" />
            <input type="date" className={applicationInputFocus} style={inputStyle} placeholder="Date Applied" />
            <textarea className={applicationInputFocus} style={inputStyle} placeholder="Description" />
        </article>
    );
}

const popUpStyle: CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.75)",
    minHeight: '100vh',
    minWidth: '100%',
    overflowY: 'scroll',
  }
  const inputStyle: CSSProperties = {
    fontSize: '1rem',
    padding: '0.5rem',
    display: 'block',
    margin: '1rem 0',
  }

export default PopUpForm;