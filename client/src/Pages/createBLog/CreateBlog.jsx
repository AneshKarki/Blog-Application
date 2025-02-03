import { useState } from "react";
import "./CreateBlog.css";
const CreateBlog = () => {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [blog, setBlog] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a temporary URL for preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !category || !blog) {
      alert("Please fill out all fields before submitting.");
      return;
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
                  src={image}
                  alt="Preview"
                  style={{ width: "70px", marginTop: "50px" }}
                />
              )}
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
