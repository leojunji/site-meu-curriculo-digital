import "./Home.css";

import Bio from "../components/Bio";
import Networks from "../components/Networks";
import Avatar from "../components/Avatar";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const fadeConfig = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });
  return (
    <animated.div style={fadeConfig}>
      <main className="main-default center home">
        <div className="content">
          <Bio />
          <Avatar />
        </div>
        <div className="content">
          <Networks />
        </div>
      </main>
    </animated.div>
  );
};

export default Home;
