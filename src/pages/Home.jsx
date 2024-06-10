import "./Home.css";

import Bio from "../components/Bio";
import Networks from "../components/Networks";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <main className="main-default center home">
      <div className="content">
        <Bio />
        <Avatar />
      </div>
      <div className="content">
        <Networks />
      </div>
    </main>
    // <Footer />
  );
};

export default Home;
