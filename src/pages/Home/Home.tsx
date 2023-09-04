import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { getEventList } from "../../utils/firebaseSnapshots";

const Home = () => {
  const [dbData, setDbData] = useState<any>([]);

  useEffect(() => {
    getDbData();
  }, []);

  const getDbData = async () => {
    const data = await getEventList();
    setDbData(data);
  };

  const navigate = useNavigate();

  const handleViewEvents = () => {
    navigate("/events");
  };

  const handleViewAbout = () => {
    navigate("/about");
  };

  const eventButtonStyling = {
    margin: "1rem 0",
  };

  const aboutButtonStyling = {
    margin: "2rem 0",
  };

  return (
    <Layout>
      <Header
        title={"Made by Makers Studio Tour"}
        subTitle="Sat 20 | Sun 21 Nov 2021"
        locationVenue="Paintworks"
        locationCity="Bristol"
        imageUrl="https://s3-alpha-sig.figma.com/img/5cbc/1239/c903cf9f08cf280d3136dde87c9eece0?Expires=1694390400&Signature=KAu-7gkxKmuDkEzIfKYX0ntDfAARyCYK3Hh9FoDh1I2n46y9b5unkrPSbrJCN9r656F9NZjq~GWQ55Flb9CasXagv~lLAxi90yyGKbjPn~Zc64xJt04VxtbaARkinC8HXtHCWoENgPFY30X1SPnDW2nm5nsMSWKof2OtcvLE-XtlbwAjsLwsNeXPivUDT3LuPiN7a-ktR7oF8txlX51k7xpqh67xD0nKLPJXk9C8YQbKuRtc8eSfZvzhZyE5I6KulKAVmWkzjkTafXku8qDTSAJvsuQKRXFInxf4Izxf~rxjgf186uj0ayPpb3MSDBW3yis7ghHKFT1C6elCNc4WBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div className="homepage">
        <Button
          style={eventButtonStyling}
          label="View Events"
          onClick={handleViewEvents}
        />
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
        <Button
          label="ABOUT"
          onClick={handleViewAbout}
          style={aboutButtonStyling}
        />
      </div>
    </Layout>
  );
};

export default Home;
