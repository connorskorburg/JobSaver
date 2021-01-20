import React from 'react';

interface PropTypes {
  type: string;
}

const DashTable = ({type}: PropTypes ) => {
  
  return (
    <table className="p-5 w-full text-center">
      {type === 'Applications' && 
      <thead className="bg-green-500 text-white">
        <tr>
          <th className="w-1/12">Date Applied</th>
          <th className="w-1/6">Title</th>
          <th className="w-1/12">Company</th>
          <th className="w-1/6">Description</th>
          <th className="w-1/12">Application Link</th>
          <th className="w-1/12">Company Link</th>
        </tr>
      </thead>
      }
      {type === 'Interviews' && 
      <thead className="bg-blue-500 text-white">  
        <tr>
          <th>Interview Date</th>
          <th>Company</th>
          <th>Interviewer Name</th>
          <th>comment</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      }
      {type === 'Network' && 
      <thead className="bg-indigo-500 text-white ">  
        <tr>
          <th>Date Connected</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Linkedin Link</th>
          <th>Website Link</th>
        </tr>
      </thead>
      }
  
      <tbody>
        <tr className="border-b-2 border-green-500">
          <td>12/12/2020</td>
          <td>Full Stack Developer</td>
          <td>Facebook</td>
          <td>Work with React, Django, TypeScript, and MySQL.</td>
          <td>
            <a href="http://facebook.com/careers" target="_blank" rel="noopener noreferrer">
              facebook.com/careers
            </a>
          </td>
          <td>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              facebook.com
            </a>
          </td>
        </tr>
        <tr className="border-b-2 border-green-500">
          <td>12/12/2020</td>
          <td>Full Stack Developer</td>
          <td>Facebook</td>
          <td>Work with React, Django, TypeScript, and MySQL.</td>
          <td>
            <a href="http://facebook.com/careers" target="_blank" rel="noopener noreferrer">
              facebook.com/careers
            </a>
          </td>
          <td>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              facebook.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DashTable;