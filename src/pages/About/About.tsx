import "./About.scss";
import ballet from "../../assets/images/ballet.png";
import reading from "../../assets/images/reading.png";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <div className="about">
      <Header
        title="Our Story, 30 Years of Breaking The Rules"
        videoUrl="https://www.youtube.com/watch?v=2hR-uWjBAgw"
      />

      <h2 className="about__subheading">
        Ripping Up the Rulebook & Starting From Scratch
      </h2>
      <p>
        More than three decades ago we started shining a light on makers and
        haven't stopped since. To make is magic. To witness skilled craftsmen
        and women at work is awe- inspiring. Our workshops continue to transform
        raw materials into incredible crafts that enable and celebrate local
        lifestyles. Make it your local resource and make sure you make it a
        stop! <br /> More from Make it: Get local <br /> Make it: Make it your
        local resource
      </p>
      <img className="about__image" src={ballet} alt="Ballet Image" />
      <h2>Our Artisans</h2>
      <p>
        The concept of making has always been focused on self-sufficiency and
        self-sufficiency has become a core part of the Smithsonian's mission. We
        have supported crafts across the country since 1992. In 2009, we
        introduced "The Smithsonian Craft Show" at the National Museum of the
        American Arts and Crafts Movement. <br /> This is the first national
        museum exhibition on craft with a dedicated space for makers. With a
        commitment to finding innovative ways to connect people to their local
        communities and inspire local makers to create something new, we'll be
        taking the show on the road. <br /> We'll be making local crafts on the
        Make it Gallery Tour. It will offer an exclusive look at local artisans'
        work in the Smithsonian's collection. <br /> The tour will take visitors
        to three unique cities: Detroit, NY and Los Angeles. In each city, the
        tour will provide insight into how makers have been making for
        centuries, highlighting the benefits of locally made goods and
        celebrating the collective spirit of makers' communities.
      </p>
      <video
        className="about__video"
        src="https://www.youtube.com/watch?v=2hR-uWjBAgw"
        width={350}
        height={240}
        controls
        data-testid="video"
      ></video>
      <q>
        "IT WILL MAKE ART, FASHION, LIFESTYLE AND COOKWARE FOR THE HOME AND
        ENJOY THE WORK OF WELL-KNOWN CRAFTSPEOPLE WHO WERE INSPIRED BY
        TRADITIONAL PATTERNS AND MATERIALS." <br /> -Bransdon Bruggendeep,
        founder
      </q>
      <h2>The Early Years</h2>
      <p>
        The concept of making has always been focused on self-sufficiency and
        self-sufficiency has become a core part of the Smithsonian's mission. We
        have supported crafts across the country since 1992. In 2009, we
        introduced "The Smithsonian Craft Show" at the National Museum of the
        American Arts and Crafts Movement. <br /> This is the first national
        museum exhibition on craft with a dedicated space for makers. With a
        commitment to finding innovative ways to connect people to their local
        communities and inspire local makers to create something new, we'll be
        taking the show on the road. <br /> We'll be making local crafts on the
        Make it Gallery Tour. It will offer an exclusive look at local artisans'
        work in the Smithsonian's collection. <br /> The tour will take visitors
        to three unique cities: Detroit, NY and Los Angeles. In each city, the
        tour will provide insight into how makers have been making for
        centuries, highlighting the benefits of locally made goods and
        celebrating the collective spirit of makers' communities.
      </p>
      <img src={reading} alt="Reading Image" />
      <h2>Doing Things Differently</h2>
      <p>
        The tour will take visitors to three unique cities: Detroit, NY and Los
        Angeles. In each city, the tour will provide insight into how makers
        have been making for centuries, highlighting the benefits of locally
        made goods and celebrating the collective spirit of makers' communities.
      </p>
      <h2>Growing Up</h2>
      <p>
        The tour will have something for everyone. Over forty makers and
        artisans will be taking part in this special event, showing their work
        on the main floor of the museum and in their studios. Each will welcome
        visitors to experience their craft, make art or talk about their work.
        <br />
        Learn more about the tour. <br /> It all starts when you visit the
        museum. Come see us this Saturday and be part of the making. Make it
        your local resource for learning about craft, art and making. The craft
        maker's story is an important part of the <br /> As part of the tour,
        artists will help you start creating art with their handmade crafts. Art
        students will demonstrate the art form that inspired them to craft.
        <br /> Young makers and art enthusiasts will be introduced to the people
        behind their favourite art work and learn about making and the makers
        who created it. <br /> The tour will make a celebration of local makers,
        a historic showcase of craft skills and encourage you to take part in
        the incredible history of making.
      </p>
    </div>
  );
};

export default About;
