import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useState } from "react";

const SideBar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { getBlogs } = useContext(AuthContext);
  const [isActive, setIsActive] = useState("allCategory");
  const navigate = useNavigate("");
  const createBlog = () => {
    navigate("/createblog");
  };
  const selectCategory = async (category) => {
    const categorySelected = category;
    setIsActive(categorySelected);
    if (categorySelected === "allCategory") {
      try {
        const res = await axios.get("http://localhost:5011/api/getBlog");
        if (res.status === 200) {
          const data = res.data;
          getBlogs(data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.get("http://localhost:5011/api/getBlog");
        console.log("yeta");
        if (res.status === 200) {
          const data = res.data;
          const filterBlogs = data.filter(
            (blog) => blog.category == categorySelected
          );
          getBlogs(filterBlogs);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="SideBarDiv">
        <div className="category">
          <p style={{ height: "7vh" }}>Categories</p>
          <div
            className={isActive === "allCategory" ? "isActive" : ""}
            onClick={() => selectCategory("allCategory")}
          >
            All Categories
          </div>
          <div
            className={isActive === "music" ? "isActive" : ""}
            onClick={() => selectCategory("music")}
          >
            Music
          </div>
          <div
            className={isActive === "sports" ? "isActive" : ""}
            onClick={() => selectCategory("sports")}
          >
            Sports
          </div>
          <div
            className={isActive === "movies" ? "isActive" : ""}
            onClick={() => selectCategory("movies")}
          >
            Movies
          </div>
          <div
            className={isActive === "travel" ? "isActive" : ""}
            onClick={() => selectCategory("travel")}
          >
            Travel
          </div>
          <div
            className={isActive === "books" ? "isActive" : ""}
            onClick={() => selectCategory("books")}
          >
            Books
          </div>
        </div>
        {isLoggedIn ? (
          <div className="blogBtns">
            <button onClick={createBlog}>Create Blog</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SideBar;
