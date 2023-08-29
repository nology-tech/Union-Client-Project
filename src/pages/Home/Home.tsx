import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header
        title="Title"
        videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        subTitle="Hello this is Max and Chu trying stuff out"
      />

      <Layout>
        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
          dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
          maxime tempora, temporibus beatae voluptas repellat rerum.
          Dignissimos, necessitatibus.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
