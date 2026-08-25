// function Navbar({name, age, bio}) {
//   return (
//     <>
//      <h1>{name}</h1>
//      <p>{age}</p>
//      <p>{bio}</p>
//     </>
//   );
// }

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
          to="/dashboard"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) =>  isActive ? "nav-link-active" : "nav-link" }
          to="/dashboard/about"
        >
          About
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }
          to="/dashboard/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({isActive}) =>  isActive ? "nav-link-active" : "nav-link"}
          to="/dashboard/mission"
        >
          Mission
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
