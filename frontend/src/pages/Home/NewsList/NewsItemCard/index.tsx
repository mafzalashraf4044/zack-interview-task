import React from "react";
import Card from "react-bootstrap/Card";
import { format } from "date-fns";

import { truncateText } from "@common/utils";

interface NewsItemProps {
  newsItem: NewsItem;
}

const NewsItemCard: React.FC<NewsItemProps> = ({ newsItem }: NewsItemProps) => {
  const formatPublishedDate = (publishedAt: string) => {
    return format(new Date(publishedAt), "MMMM d, yyyy h:mm a");
  };

  return (
    <Card className="news-item-card max-w border rounded-lg shadow bg-gray-800 border-gray-700">
      {newsItem.image && (
        <Card.Img
          variant="top"
          src={newsItem.image}
          alt={newsItem.title}
          className="rounded-t-lg"
        />
      )}
      <Card.Body className="p-4">
        <Card.Title className="mb-2 text-2xl font-bold tracking-tight text-white text-left">
          {newsItem.title}
        </Card.Title>
        <Card.Subtitle className="mb-4 text-sm text-gray-600 text-left">
          {formatPublishedDate(newsItem.publishedAt)}
        </Card.Subtitle>
        <Card.Text className="mb-4 font-normal text-gray-400 text-left">
          {truncateText(newsItem.abstract, 100)}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-sm text-gray-600 text-left">
          Author: {newsItem.author}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer className="p-4 flex">
        <a
          href={newsItem.url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </Card.Footer>
    </Card>
  );
};

export default NewsItemCard;
