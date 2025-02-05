import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import "./Blogs.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Blogs = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const getdetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5011/api/getBlog/${id}`);
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdetails();
  }, []);
  return (
    <>
      <NavBar />
      <div className="mainBLog">
        <div className="blogTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem
          animi quasi deserunt aspernatur nihil.
        </div>
        <div className="blogCatAuth">
          <div>{data?.category}</div>
          <div>
            <b>{data?.author}</b>
          </div>
        </div>
        <div className="imgBlog">
          <img src={data?.imageUrl} alt="img" />
        </div>
        <div className="blogDetails">{data?.blogParagraph}</div>
      </div>
    </>
  );
};

export default Blogs;
