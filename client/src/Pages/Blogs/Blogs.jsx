import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";

import "./Blogs.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
const Blogs = () => {
  const [cmt, setCmt] = useState("");
  const [data, setData] = useState(null);
  const [postcmt, setPostCmt] = useState([]);
  const { id } = useParams();
  const { userDetails } = useContext(AuthContext);
  const deleteCmt = async (cmtId) => {
    try {
      console.log("here");
      const res = await axios.post(`http://localhost:5011/api/cmt/delete`, {
        cmtId,
      });
      if (res.status === 200) {
        alert("deleted");
        getComment();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getComment = async () => {
    try {
      const res = await axios.get(`http://localhost:5011/api/getComment/${id}`);
      if (res.status === 200) {
        setPostCmt(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
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
  const addCmt = async () => {
    const userID = userDetails?.id;
    const fullName = userDetails?.fullName;
    try {
      const res = await axios.post("http://localhost:5011/api/cmt/add", {
        cmt,
        id,
        userID,
        fullName,
      });
      if (res.status === 200) {
        setCmt("");
        getComment();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteBlog = async () => {
    console.log("deleted");
  };

  useEffect(() => {
    getdetails();
    getComment();
  }, []);
  return (
    <>
      <NavBar />
      <div className="mainBLog">
        <div className="blogTitle">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum?
          </div>
          {data?.blogOwner === userDetails?.id ? (
            <div className="deleteBtn" onClick={deleteBlog}>
              <MdDeleteForever />
            </div>
          ) : (
            <></>
          )}
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
        <hr />
        <h3>Comments</h3>
        <div className="commentDiv">
          {postcmt.length == 0 ? (
            <p>no comments yet</p>
          ) : (
            postcmt &&
            postcmt.map((item) => {
              return (
                <div key={item._id} className="ShowCmt">
                  <div>{item.commentText} </div>
                  <div className="detailCmts">
                    <div style={{ fontSize: "10px" }}>
                      <b>{item.fullName}</b>
                    </div>
                    <div style={{ fontSize: "10px" }}>{item.createdAt}</div>
                    {item.userId === userDetails?.id ? (
                      <div
                        onClick={() => deleteCmt(item._id)}
                        className="deleteBtn"
                        style={{ color: "red" }}
                      >
                        <MdDeleteForever />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })
          )}

          <hr />
          <div className="cmtSection">
            <div style={{ width: "100%", position: "relative" }}>
              <input
                value={cmt}
                onChange={(e) => setCmt(e.target.value)}
                type="text"
              />
            </div>
            <div className="arrow" onClick={addCmt}>
              <FaArrowRightToBracket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
