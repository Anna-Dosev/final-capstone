import HomeHero from "./home/homeHero";
import WelcomeAbout from "./home/welcomeAbout";
import HomeExplore from "./home/homeExplore";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <WelcomeAbout />
      <HomeExplore />
    </div>
  );
};

export default Home;
