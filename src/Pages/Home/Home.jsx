import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import { useSelector } from "react-redux";

const Home = () => {
  const { isSidebarOpen } = useSelector((state) => state.ui);

  return (
    <>
      <Sidebar />
      <div className={`container ${isSidebarOpen ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
