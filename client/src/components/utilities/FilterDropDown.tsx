import React, { useState, CSSProperties } from 'react';

const FilterDropDown = () => {
  const [value, setValue] = useState('application');
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e:any) => {
    console.log(e.target.value);
    setValue(e.target.value);
    e.preventDefault();
  }

  const handleSubmit = (e:any) => {
    console.log(e.target);
    console.log(e);
    e.preventDefault();
  }

  return (
    <>
      <button onClick={() => setShowForm(!showForm)} className="bg-gray-800 focus:outline-none w-1/6 text-white transition delay-50 duration-500 focus:outline-none hover:bg-gray-600">
        <i className="fas fa-plus-circle text-2xl font-bold"></i>        
      </button>
      {showForm &&
        <section style={popUpStyle} className="fixed inset-0 flex justify-center">
          <form onSubmit={handleSubmit} className="bg-white self-start my-10 p-10 rounded-md shadow-lg">
            <div className='flex'>
              <article>
                <h1 className="inline-block">New </h1>
                <select onChange={handleChange} name="model" className="focus:outline-none border-none bg-white">
                  <option className="bg-gray-300" value="application">Application</option>
                  <option className="bg-gray-300" value="interview">Interview</option>
                  <option className="bg-gray-300" value="network">Network</option>
                </select>
              </article>
              <i onClick={() => setShowForm(!showForm)} className="ml-auto text-white text-xl bg-red-400 rounded-xl px-2 py-1 ml-1 far fa-times-circle transition delay-50 duration-500 cursor-pointer focus:outline-none hover:bg-red-600"></i>
            </div>
            {value === 'application' && 
              <article>
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Title" />
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Company Name" />
                <input type="url" className="focus:outline-none" style={inputStyle} placeholder="Application Link" />
                <input type="url" className="focus:outline-none" style={inputStyle} placeholder="Company Link" />
                <input type="date" className="focus:outline-none" style={inputStyle} placeholder="Date Applied" />
                <textarea className="focus:outline-none" style={inputStyle} placeholder="Description" />
              </article>
            }
            {value === 'interview' && 
              <article>
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Company Name" />
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Interviewer Name" />
                <input type="date" className="focus:outline-none" style={inputStyle} placeholder="Interview Date" />
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Phone Number" />
                <textarea className="focus:outline-none" style={inputStyle} placeholder="Comment" />
              </article>
            }
            {value === 'network' && 
              <article>
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="First Name" />
                <input type="text" className="focus:outline-none" style={inputStyle} placeholder="Last Name" />
                <input type="email" className="focus:outline-none" style={inputStyle} placeholder="Email" />
                <input type="url" className="focus:outline-none" style={inputStyle} placeholder="Website Link" />
                <input type="url" className="focus:outline-none" style={inputStyle} placeholder="Linkedin Link" />
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
  borderBottom: '2px solid #ccc',
}

export default FilterDropDown;