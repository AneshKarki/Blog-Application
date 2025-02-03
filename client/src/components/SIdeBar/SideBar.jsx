import { useNavigate } from "react-router-dom";
import "./SideBar.css";
const SideBar = () => {
  const navigate = useNavigate("");
  const createBlog = () => {
    navigate("/createblog");
    console.log("hi");
  };
  return (
    <>
      <div className="SideBarDiv">
        <div className="category">
          <p style={{ height: "7vh" }}>Categories</p>
          <div>All Categories</div>
          <div>Music</div>
          <div>Sports</div>
          <div>Movies</div>
          <div>Travel</div>
          <div>Books</div>
        </div>
        <div className="blogBtns">
          <button onClick={createBlog}>Create Blog</button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
