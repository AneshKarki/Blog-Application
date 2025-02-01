import "./showBlog.css";
import img from "../../../public/blog.png";
import Footer from "../footer/Footer";

const ShowBlog = () => {
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
          <div className="item">
            <div className="blogImg">
              <img src={img} alt="" />
            </div>
            <div className="blogCategory">Category</div>
            <div className="blogAuthor">Author: NameHere</div>
            <div className="blogDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corrupti reiciendis aliquam placeat pariatur error quam nulla
              numquam voluptas in ea eos consequatur autem adipisci ducimus
              eveniet voluptates, perspiciatis odio voluptatem laborum vero
              ipsa! Soluta iure veniam tempora similique fugiat. Amet
              perferendis illum quaerat, id quo repellat doloribus quisquam
              eaque.
            </div>
          </div>
          <div className="item">
            <div className="blogImg">
              <img src={img} alt="" />
            </div>
            <div className="blogCategory">Category</div>
            <div className="blogAuthor">Author: NameHere</div>
            <div className="blogDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corrupti reiciendis aliquam placeat pariatur error quam nulla
              numquam voluptas in ea eos consequatur autem adipisci ducimus
              eveniet voluptates, perspiciatis odio voluptatem laborum vero
              ipsa! Soluta iure veniam tempora similique fugiat. Amet
              perferendis illum quaerat, id quo repellat doloribus quisquam
              eaque.
            </div>
          </div>
          <div className="item">
            <div className="blogImg">
              <img src={img} alt="" />
            </div>
            <div className="blogCategory">Category</div>
            <div className="blogAuthor">Author: NameHere</div>
            <div className="blogDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corrupti reiciendis aliquam placeat pariatur error quam nulla
              numquam voluptas in ea eos consequatur autem adipisci ducimus
              eveniet voluptates, perspiciatis odio voluptatem laborum vero
              ipsa! Soluta iure veniam tempora similique fugiat. Amet
              perferendis illum quaerat, id quo repellat doloribus quisquam
              eaque.
            </div>
          </div>
          <div className="item">
            <div className="blogImg">
              <img src={img} alt="" />
            </div>
            <div className="blogCategory">Category</div>
            <div className="blogAuthor">Author: NameHere</div>
            <div className="blogDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corrupti reiciendis aliquam placeat pariatur error quam nulla
              numquam voluptas in ea eos consequatur autem adipisci ducimus
              eveniet voluptates, perspiciatis odio voluptatem laborum vero
              ipsa! Soluta iure veniam tempora similique fugiat. Amet
              perferendis illum quaerat, id quo repellat doloribus quisquam
              eaque.
            </div>
          </div>
          <div className="item">
            <div className="blogImg">
              <img src={img} alt="" />
            </div>
            <div className="blogCategory">Category</div>
            <div className="blogAuthor">Author: NameHere</div>
            <div className="blogDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corrupti reiciendis aliquam placeat pariatur error quam nulla
              numquam voluptas in ea eos consequatur autem adipisci ducimus
              eveniet voluptates, perspiciatis odio voluptatem laborum vero
              ipsa! Soluta iure veniam tempora similique fugiat. Amet
              perferendis illum quaerat, id quo repellat doloribus quisquam
              eaque.
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
