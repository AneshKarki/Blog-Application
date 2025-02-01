import NavBar from "../../components/NavBar/NavBar";
import ShowBlog from "../../components/showBlog/ShowBlog";
import SideBar from "../../components/SIdeBar/SideBar";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="blogDiv">
          <div style={{ width: "17%" }}>
            <SideBar />
          </div>
          <div className="temp">
            <ShowBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
