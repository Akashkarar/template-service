import github from "../assets/icons/github.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="path-to-your-image" alt="Logo" className="navbar-logo" />
      <div style={{ marginRight: "10px" }}>
        <a href="https://github.com/">
          <img src={github} alt="" height={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
