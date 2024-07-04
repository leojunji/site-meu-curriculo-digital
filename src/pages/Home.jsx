import "./Home.css";

import Bio from "../components/Bio";
import Networks from "../components/Networks";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <main className="o-main home">
      <div className="c-first">
        <Avatar />
        <Bio />
      </div>

      <div className="c-second">
        <Networks />
      </div>
    </main>
  );
};

export default Home;
