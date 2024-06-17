import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-800 flex items-center w-full">
      <Link to="/">
        <h1 className="text-white text-2xl p-5">Playground</h1>
      </Link>
      <ul className="flex text-white">
        <li className="p-5">
          <Link to="/use-params/5">useParams</Link>
        </li>
        <li className="p-5">
          <Link to="/useRef-demo">useRef</Link>
        </li>
        <li className="p-5">
          <Link to="/context-demo">useContext</Link>
        </li>
        <li className="p-5">
          <Link to="/form-data">FormData</Link>
        </li>
        <li className="p-5">
          <Link to="/posts">Post Requests</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
