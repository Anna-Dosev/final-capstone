import { useNavigate } from "react-router-dom";
import React from "react";
import heroPic2 from "../../../assets/photos/pnw/pnw6.png";
import pnw5 from "../../../assets/photos/pnw/pnw5.png";
import logo from "../../../assets/photos/logo2.png";
import "../../../styles/blogStyles/blogAStyles.css";
import "../../../styles/blogStyles/blogHeroStyles.css";
import "../../../styles/blogStyles/blogSignUpStyles.css";
import "../../../styles/blogStyles/blogSharedMobile.css";

const BlogA = () => {
  const navigate = useNavigate();

  return (
    <div className="parent-container">
      <div className="blog-hero-container-image">
        <img className="blog-heroPic" src={heroPic2} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">The Oregon Coast</h1>
          <p className="blog-subtitle">363 Miles on Highway 101</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="image-content-container">
          <img className="blogAImage" src={pnw5} alt="" />
        </div>
        <div className="text-blurb-content-container">
          <p className="blurb">
            "Have fun in the rain"—or some sarcastic variation of those
            words—was a typical reaction I received when mentioning my plans of
            exploring the Oregon coast. Wet, windy, dark, dismal, cold... the
            Florida in me was perturbed, but the roamer was ready. After days on
            the road, I was welcomed into the small town of Seaside, which
            became my home-base for countless adventures. While its reputation
            does ring true in the winter months and into spring, Oregon in the
            summer is a dream. The sunny, warm days of July last late into the
            evening, providing hours of daylight for post-workday activities.
          </p>
          <p className="remaining-text">
            When arriving in Oregon from the north, your first stop along the
            101 will be Astoria. This quaint Victorian town is nestled at the
            mouth of the Columbia River and happens to be the oldest American
            settlement west of the Rockies. It's rich maritime heritage is
            palpable, which is a common theme among most of the coastal towns.
          </p>
          <p className="remaining-text">
            Less than an hour down the highway, the now winding, forest-lined
            road will pass Tillamook Head–a 1,200-foot rocky promonotory. This
            natural barrier shapes the local geography, influencing weather
            patterns and offering shelter to the beaches and coves nestled in
            its shadow, one of them being Cannon Beach. While some travelers
            understandably seek hidden gems, the Cannon Beach coastline is a
            natural wonder that simply cannot be ignored. The iconic Haystack
            Rock attracts and holds so much life—it really is a beacon to the
            wondering soul (and sea star).
          </p>
          <p className="remaining-text">
            Yes, the area might have a sprinkle of tourism, but its raw, untamed
            beauty transcends any crowded expectations—it's pure Pacific
            Northwest poetry waiting to be experienced.
            <b>
              You could dedicate an entire week to discovering the wonders
              within an hour radius of Cannon Beach, but here are some weekend
              essentials:
            </b>
            <br></br>
            <br></br>• Explore the sea caves and waterfalls at Hug Point
            <br></br>• Hike the breathtaking Neahkahnie Mountain trail with
            panoramic ocean views
            <br></br>• Walk through the dense forests and along the rocky beach
            of Ecola State Park
            <br></br>• Take the short Elk's Flat trail to see the dramatic,
            sheer cliffs and rushing water below
            <br></br>• Wander the various coastal towns, like Astoria, Seaside
            and Manzanita
            <br></br>
            <br></br>
          </p>
          <p className="remaining-text">
            The coast becomes much quieter once you leave the Cannon Beach
            bubble, but doesn't lose any of its beauty or charm. Newport is a
            vibrant coastal town with two historic lighthouses, a world-class
            aquarium, and a bustling bayfront. It offers visitors a
            quintessential Oregon Coast experience with working fishing docks,
            stunning ocean views, and unique cultural attractions.
          </p>
          {/* <p className="blurb">test</p>*/}
          <p className="remaining-text">
            Further down the coast, the rugged cliffs dissipate into golden
            dunes, which bring their own set of activities. Florence is the
            premier spot for "sandboarding," and renting gear is totally worth
            it if you're in the mood for a workout. Climbing up those dunes is
            no joke!
          </p>
          <p className="remaining-text">
            Oregon boasts an impressive array of more than 30 state parks along
            its coast—which creates an eventful drive either direction along the
            101. This stands in stark contrast to California, where roughly 58%
            of coastal property is either privately owned or held by government
            entities. In 1913, Governor Oswald West declared the entire Oregon
            coast a public highway, effectively protecting it from private
            development. This approach has created a coastal playground for
            residents and visitors alike, offering a mix of sandy beaches, rocky
            shores, and lush forests, all within reach of the public.
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
export default BlogA;
