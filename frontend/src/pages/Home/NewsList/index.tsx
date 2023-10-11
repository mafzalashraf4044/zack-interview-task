import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

import { NewsItem } from '@common/interfaces'

const NewsItem = ({ news: NewsItem[] }) => {
  const formatPublishedDate = (publishedAt: string) => {
    return moment(publishedAt).format("MMMM D, YYYY h:mm A");
  };

  return (
    <Row className="flex-wrap">
      {stories.map((story, index) => (
        <Col key={index} xs={12} sm={6} lg={4}>
          <Card>
            {story.image && (
              <Card.Img variant="top" src={story.image} alt={story.title} />
            )}
            <Card.Body>
              <Card.Title>{story.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {formatPublishedDate(story.publishedAt)}
              </Card.Subtitle>
              <Card.Text>{story.abstract}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                {story.section}
                {story.subSection && ` - ${story.subSection}`}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Author: {story.author}
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <a href={story.url} className="card-link">
                Read More
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsCardList;
