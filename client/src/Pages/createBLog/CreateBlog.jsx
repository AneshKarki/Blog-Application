import { useContext, useState } from "react";
import "./CreateBlog.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const { token } = useContext(AuthContext);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [blog, setBlog] = useState("");
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create a temporary URL for preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (token) {
      console.log(token);
      formData.append("token", token);
    }
    formData.append("author", author);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("blogParagraph", blog);
    formData.append("image", image);
    if (!author || !category || !blog) {
      alert("Please fill out all fields before submitting.");
      return;
    } else {
      try {
        const res = await axios.post(
          "http://localhost:5011/api/createBlog",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status == 200) {
          alert("blog added succesfully");
          setAuthor("");
          setCategory("");
          setImage(null);
          setPreview(null);
          setBlog("");
          navigate("/");
        } else {
          alert("Server Error!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="outDiv">
        <form onSubmit={handleSubmit} style={{ height: "100%" }}>
          <div className="inDiv">
            <div className="authorC">
              <label htmlFor="author">Author:</label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="categoryC">
              <label htmlFor="category">Category</label>
              <select
                name=""
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Select Category
                </option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="movies">Movies</option>
                <option value="books">Books</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="imgC">
              <label htmlFor="img">Add Image</label>
              <input id="img" type="file" onChange={handleImageChange} />
              {image && (
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "70px", marginTop: "50px" }}
                />
              )}
            </div>
            <div className="titleC">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="textC">
              <label htmlFor="blog">Write Blog Here</label>
              <textarea
                name=""
                placeholder="Blog...."
                id="blog"
                value={blog}
                onChange={(e) => {
                  setBlog(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="btnC">
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
