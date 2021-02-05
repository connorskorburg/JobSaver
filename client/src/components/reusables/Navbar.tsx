import {useSelector} from 'react-redux';


const Navbar = () => {
  const content = useSelector((state: any) => state.activeContent);
  return (
    <nav className="flex px-10 py-3 bg-gray-100 shadow-lg">
      <a href="/" className="inline-block text-gray-800 text-xl py-1 px-2 font-bold">JobSaver</a>
      <div className="self-center ml-auto">
        <h3 className={`inline-block text-lg mr-5 py-1 px-3 font-bold rounded-md text-white
                        ${content.applications === true && `bg-green-500`}
                        ${content.interviews === true && `bg-blue-500`}
                        ${content.network === true && `bg-indigo-500`}`
                      }
        >
          {content.applications === true && `Applications`}
          {content.interviews === true && `Interviews`}
          {content.network === true && `Network`}
        </h3>
        <a href="/logout" className="inline-block text-gray-800 text-lg py-1 px-3 self-center rounded-md hover:bg-gray-800 hover:text-gray-100 transition delay-75 duration-500 ease-in-out">Logout</a>
      </div>
    </nav>
  )
}

export default Navbar;