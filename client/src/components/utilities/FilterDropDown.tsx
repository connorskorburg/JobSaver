import React, { useState, CSSProperties } from 'react';
import { Formik } from 'formik';

const FilterDropDown = () => {
  const [value, setValue] = useState('application');
  const [showForm, setShowForm] = useState(false);

  // const handleChange = (e:any) => {
    // console.log(e.target.value);
    // setValue(e.target.value);
    // e.preventDefault();
  // }

  // const handleSubmit = (e:any) => {
    // console.log(e.target);
    // console.log(e);
    // e.preventDefault();
  // }

  const applicationInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-green-500 border-gray-300 border-b-2'
  const interviewInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-blue-500 border-gray-300 border-b-2'
  const networkInputFocus = 'focus:outline-none focus:border-bottom-4 focus:border-indigo-500 border-gray-300 border-b-2'


  return (
    <>
      <button onClick={() => setShowForm(!showForm)} className="bg-gray-800 focus:outline-none w-1/6 text-white transition delay-50 duration-500 focus:outline-none hover:bg-gray-600">
        <i className="fas fa-plus-circle text-2xl font-bold"></i>        
      </button>
      {showForm &&
        <section style={popUpStyle} className="fixed inset-0 flex justify-center">
          <form className="bg-white self-start my-10 p-10 rounded-md shadow-lg">
            <div className='flex'>
              <article>
                <h1 className="inline-block">New </h1>
                <select name="model" className="focus:outline-none border-none bg-white">
                  <option className="bg-gray-300" value="application">Application</option>
                  <option className="bg-gray-300" value="interview">Interview</option>
                  <option className="bg-gray-300" value="network">Network</option>
                </select>
              </article>
              <i onClick={() => setShowForm(!showForm)} className="ml-auto text-white text-xl bg-red-400 rounded-xl px-2 py-1 ml-1 far fa-times-circle transition delay-50 duration-500 cursor-pointer focus:outline-none hover:bg-red-600"></i>
            </div>
            {value === 'application' && 
              <article>
                <input type="text" className={applicationInputFocus} style={inputStyle} placeholder="Title" />
                <input type="text" className={applicationInputFocus} style={inputStyle} placeholder="Company Name" />
                <input type="url" className={applicationInputFocus} style={inputStyle} placeholder="Application Link" />
                <input type="url" className={applicationInputFocus} style={inputStyle} placeholder="Company Link" />
                <input type="date" className={applicationInputFocus} style={inputStyle} placeholder="Date Applied" />
                <textarea className={applicationInputFocus} style={inputStyle} placeholder="Description" />
              </article>
            }
            {value === 'interview' && 
              <article>
                <input type="text" className={interviewInputFocus} style={inputStyle} placeholder="Company Name" />
                <input type="text" className={interviewInputFocus} style={inputStyle} placeholder="Interviewer Name" />
                <input type="date" className={interviewInputFocus} style={inputStyle} placeholder="Interview Date" />
                <input type="text" className={interviewInputFocus} style={inputStyle} placeholder="Phone Number" />
                <textarea className={interviewInputFocus} style={inputStyle} placeholder="Comment" />
              </article>
            }
            {value === 'network' && 
              <article>
                <input type="text" className={networkInputFocus} style={inputStyle} placeholder="First Name" />
                <input type="text" className={networkInputFocus} style={inputStyle} placeholder="Last Name" />
                <input type="email" className={networkInputFocus} style={inputStyle} placeholder="Email" />
                <input type="url" className={networkInputFocus} style={inputStyle} placeholder="Website Link" />
                <input type="url" className={networkInputFocus} style={inputStyle} placeholder="Linkedin Link" />
              </article>
            }
            <button className="rounded-md shadow-sm font-bold w-full block py-2 bg-blue-500 text-white transition delay-50 duration-500 cursor-pointer focus:outline-none hover:bg-blue-700">Submit</button>
          </form>
        </section>
      }
    </>
  );
};

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

export default FilterDropDown;