import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import { NewsItem } from "@common/interfaces";

import NewsItemCard from "./NewsItemCard";

interface NewsListProps {
  news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }: NewsListProps) => {
  return (
    <Row className="flex-wrap">
      {!news.length && <Alert variant="dark">No news for now.</Alert>}
      {news.map((newsItem: NewsItem, index: number) => (
        <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
          <NewsItemCard newsItem={newsItem} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsList;
