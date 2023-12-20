import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex gap-8 justify-center text-xl font-light tracking-wide py-8 border-b-[2px] border-[#5a5a5ab6] rounded-[4%] mb-16">
      <NavLink to=".">Sign In</NavLink>
      <NavLink to="sign-up">Sign Up</NavLink>
    </nav>
  );
};

export default Navbar;
