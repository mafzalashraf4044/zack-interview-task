import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <Card className="m-10">
      <Card.Header className="flex flex-row justify-start items-center">
        About Our Top News App
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-left">
          Welcome to Our Top News App! We bring you the latest and most exciting
          news from around the world in one convenient place.
          <br />
          <br />
          Our mission is to keep you informed, entertained, and connected with
          the news that matter. We use the power of technology to provide you
          with fast, scalable, and reliable news updates.
          <br />
          <br />
          Here's how it works:
          <br />
          <br />
          Explore our selection of top news covering a wide range of topics,
          from business to sports to technology. Click on any news card to read
          the full article and stay up-to-date with the latest developments. Our
          team is dedicated to bringing you the news you care about. We value
          your time and aim to make your news-reading experience seamless.
          Whether you're on your computer or mobile device, our app is designed
          for your convenience.
          <br />
          <br />
          Thank you for choosing Our Top News App. We're excited to be your
          source for the latest news from around the globe.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
