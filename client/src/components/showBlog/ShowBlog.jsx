import "./showBlog.css";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ShowBlog = () => {
  const { blogs, getBlogs } = useContext(AuthContext);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5011/api/getBlog");

      if (res.status === 200) {
        console.log(res.data);
        getBlogs(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="slider">
        <div className="sliderImage">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "grey",
              fontSize: "50px",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <p>Create Blog, find Blog.</p>
            <p>Feel free to express</p>
          </div>
        </div>

        <div className="blogDivs">
          {blogs &&
            blogs.map((item) => {
              return (
                <div className="item" key={item._id}>
                  <div className="blogImg">
                    <img src={item.imageUrl} alt="blogImage" />
                  </div>
                  <div className="blogCategory">{item.category}</div>
                  <div className="blogAuthor">Author: {item.author}</div>
                  <div className="blogDescription">{item.blogParagraph}</div>
                  <Link
                    style={{ textDecoration: "none", padding: "10px" }}
                    to={`/blogs/${item._id}`}
                  >
                    <div>Read More</div>
                  </Link>
                </div>
              );
            })}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
