import "./SideBar.css";
const SideBar = () => {
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
      </div>
    </>
  );
};

export default SideBar;
