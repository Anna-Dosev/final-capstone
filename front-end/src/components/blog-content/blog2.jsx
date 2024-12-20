import { useNavigate } from "react-router-dom";

const Blog2 = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-content-text">
      Very little can prepare you for the grandeur of Zion National Park. Even
      after multiple visits, I am still in awe of the dusty orange canyon and
      the authority it emanates.
      <br></br>
      <br></br>
      On my latest trip, I had one mission in mind: make it to Angel's Landing
      for sunrise. This presented a bit of a challenge, as the shuttles to the
      trailheads don't start until after the sun is up. So I rented an e-bike at
      5:30 in the morning and rode into the park before it even opened. Guided
      only by my headlight, I followed the winding canyon road to the trail. It
      was an eerie feeling: knowing the contents of your surroundings but not
      being able to see it. I could only tell where the sky was interrupted by
      the ridge lines because of the river shaped path of the stars—the Milky
      Way included.
      <br></br>
      <br></br>
      After the faintest glimpse of the ridge became visible, I got out my
      flashlight and started up the switchbacks. I made it to the top and passed
      the chained rope section before the sun fully rose. Mission accomplished.
      The only other person who beat me to the top was leaving, so I had a solid
      hour to myself before the shuttle crowds arrived.
      <br></br>
      <br></br>
    </div>
  );
};

export default Blog2;
