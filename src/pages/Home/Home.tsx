import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Nav from "../../components/Nav/Nav";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleViewEvents = () => {
    navigate("/events");
  };

  const handleViewAbout = () => {
    navigate("/about");
  };

  return (
    <Layout>
      <div className="homepage">
        <Button label="View Events" onClick={handleViewEvents} />
        <h2 className="homepage__header">
          If this is your first Made by makers for the people, welcome!
        </h2>
        <p className="homepage__content">
          Made by the people for the people. A local studio tour of local makers
          around the area of bristol. Come see the workshops where the magic
          happ Stop for a quick sketch and pot of tea and pastry from the
          pottery studio.
        </p>
        <br></br>
        <br></br>
        <p className="homepage__content">
          Make something from the local craft shop. Explore the amazing works of
          art from a number of craft artists. Make it yourself from ceramics and
          other hand made materials. Sign up for an excursion to the city where
          you will learn how pottery is made at the Bristol Pottery Workshop.
          All activities are free and all the pottery is for sale. The tour is
          organized and presented by Chelsea Handmade & Local.
        </p>
        <div className="homepage__quote">
        <div className="homepage__quote--box"></div>
        <h3 className="homepage__header homepage__quote--header">
          A note from our Principal Organiser, Steven Devine, about this
          weekends programme:
        </h3>
        </div>
        <p className="homepage__content">
          Local producer of bath and beauty products. Check out the bath and
          beauty products line from this maker. Located in oak barrels. Make
          yourself some bath salts and use the handmade containers for a nice
          relaxing bath at home.
        </p>
        <br></br>
        <br></br>
        <p className="homepage__content">
          Make some small pots with creative molding techniques. Tryens. making
          some pieces with the pottery tools.
        </p>
        <br></br>
        <br></br>
        <p className="homepage__content">
          Visit a local art store and get some handmade brushes. You can paint
          your own wall at the studio where you’ll get a tour of the studio and
          you can choose a souvenir tile to make yourself a unique decorative
          piece in your house.
        </p>
        <br></br>
        <br></br>
        <p className="homepage__content">
          Learn more about the history of pottery and how ceramics can be used
          as a building material for small clay bricks. Using the tools you
          learned from the workshop you will make a few pieces.
        </p>
        <Button label="ABOUT" onClick={handleViewAbout} />
      </div>
      <Nav />
    </Layout>
  );
};

export default Home;
