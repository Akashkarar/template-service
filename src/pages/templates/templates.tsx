import "../../App.css";
import Container from "../container.tsx";
import Navbar from "../navBar.tsx";
import Sidebar from "../sideBar.tsx";

const Templates = () => {
  return (
    <div className="app">
      <div className="whole-content">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Templates;
