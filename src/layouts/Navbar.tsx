import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex gap-8 justify-center text-xl font-light tracking-wide py-8 border-b-[2px] border-[#5a5a5ab6] rounded-[4%] mb-16">
      <NavLink to="." className="pr-6 border-r-2">
        Sign In
      </NavLink>
      <div className="flex gap-2 items-end">
        <p className="text-lg text-[#b7b7b7] leading-6">
          Already have an account?&nbsp;
        </p>
        <NavLink
          className="text-sky-400 font-semibold border-r-2 pr-6"
          to="sign-up"
        >
          Sign Up
        </NavLink>
        <NavLink className="ml-auto pl-6" to="admin">
          Jump to Admin Dashboard!
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
