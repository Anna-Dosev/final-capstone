import { useNavigate } from "react-router-dom";
import React from "react";
import heroPic3 from "../../../assets/photos/pnw/pnw11.png";
import pnw9 from "../../../assets/photos/pnw/pnw9.png";
import logo from "../../../assets/photos/logo2.png";
import "../../../styles/blogStyles/blogBStyles.css";
import "../../../styles/blogStyles/blogHeroStyles.css";
import "../../../styles/blogStyles/blogSignUpStyles.css";
import "../../../styles/blogStyles/blogSharedMobile.css";

const BlogB = () => {
  const navigate = useNavigate();

  return (
    <div className="parent-container">
      <div className="blog-hero-container-image">
        <img className="blog-heroPic" src={heroPic3} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">Washington Wilderness</h1>
          <p className="blog-subtitle">The Climb to Colchuck Lake</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="image-content-container">
          <img className="blogBImage" src={pnw9} alt="" />
        </div>
        <div className="text-blurb-content-container">
          <p className="blurb">
            Waking up before dawn on a brisk October morning to drive three
            hours to a trailhead before hiking 10 miles is not everyone's idea
            of fun. But when your friend is visiting town and says "let's go on
            a quest"—I deliver. Beating Seattle traffic, braving the freshly
            snow-coated Steven's Pass, and bundling up in layers for a 35° start
            was all part of the adventure leading to one of Washington's most
            beautiful and iconic vistas: Colchuck Lake.
          </p>
          <p className="remaining-text">
            Our chosen route was part of a larger route called "The
            Enchantments." Located in the Alpine Lakes Wilderness of Washington,
            the Enchantments is known as a hiking paradise, featuring over 7,000
            alpine lakes, jagged mountains, and waterfalls. The full
            Enchantments traverse is a challenging 21-mile point-to-point hike
            with about 5,280 feet of elevation gain. Camping in the Enchantments
            requires a seasonal permit, which hikers can obtain through an
            application and lottery system. Some hardcore hikers (like my
            sister) opt to complete the entire Enchantments in a single day, but
            that might be an overly ambitious idea for those who like to take
            their time and take a picture every other minute (like myself).
          </p>
          <p className="remaining-text">
            The first few miles of the trail are mostly shaded and have a
            gradual incline. It was wonderful to experience this in the fall, as
            the autumn ferns and occasional Larch added so much color and
            texture to the already diverse forest. Occasional breaks in the tree
            canopy give view to parts of Icicle Ridge and Cashmere Mountain,
            other challenging hikes with stunning views of the Cascade Range.
            Hopping over streams, crossing wooden bridges, and balancing on
            boulder field are all mini checkpoints along the way.
          </p>
          <p className="remaining-text">
            Eventually, the trail starts getting steeper... and steeper. The
            last mile is a challenge, but with the elevation gain comes
            panoramic views of the Cascades, making frequent breaks absolutely
            worthwhile to soak in the beauty. As the trail curves inward towards
            a final, thick grove of trees, the dramatic spires of Dragontail
            Peak appear. Unexpectedly, the narrow path opens onto an elevated
            promontory, revealing a scene that seems plucked from a fantasy
            world.
          </p>
          <p className="remaining-text">
            Standing on this natural viewpoint, you're rewarded with a
            breathtaking vista of Colchuck Lake in all its alpine glory. The
            rocky gray facade of the mountains look like guardians of the
            magical lake and the wilderness beyond. The pristine turquoise
            waters stretch out before you, reflecting the towering peaks that
            surround it. Dragontail and Colchuck Peaks loom large, their jagged
            silhouettes etched against the sky, creating a scene of raw, untamed
            beauty that makes every step of the challenging hike worthwhile.
          </p>
          <p className="remaining-text">
            My friend and I spent the next few hours galavanting along the
            lake's shoreline, scaling the sloping rocks and wandering a
            graveyard of beached tree limbs. The clear water looked so welcoming
            and healing. If the air had been a bit warmer, we would have
            considered a plunge.
          </p>
          <p className="remaining-text">
            After bidding farewell to the lake, we made the trek down the
            mountain and back to my noble steed—my trusty Hyundai Tucson. In
            need of carbs and something warm to drink, we ventured down the road
            to the adorable Bavarian-themed town of Leavenworth for schnitzel,
            cider and live accordian music.
          </p>
        </div>
      </div>
      <div className="pre-footer"></div>
      <div className="blogA-logo-banner">
        <img className="blogAlogo" src={logo} alt="" />
      </div>
    </div>
  );
};
export default BlogB;
