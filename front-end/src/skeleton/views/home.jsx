import HomeHero from "./home/homeHero";
import WelcomeAbout from "./home/welcomeAbout";
import HomeSpotlights from "./home/homeSpotlights";
import HomeExplore from "./home/homeExplore";
import HomeContact from "./home/homeContact";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <WelcomeAbout />
      <HomeExplore />
      {/* <HomeSpotlights /> */}
      {/* <HomeContact /> */}
    </div>
  );
};

export default Home;
