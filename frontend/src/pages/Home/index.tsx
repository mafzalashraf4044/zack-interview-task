import { useState } from "react";
import { useQuery, TError } from "@tanstack/react-query";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

import { getNewsTopStories } from "@common/api";
import { NewsSection } from "@common/enums";

import NewsList from "./NewsList";

export default function Home() {
  const [section, setSection] = useState<NewsSection>(NewsSection.Home);

  const handleReactQueryError = (error: TError) => {
    toast.error(error.message);
  };

  const { data: news } = useQuery(
    ["getNewsTopStories", section],
    () => getNewsTopStories(section),
    {
      initialData: [],
      onError: handleReactQueryError,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <Container fluid className="px-10">
      <Card className="my-10">
        <Card.Body className="flex flex-row justify-between items-center">
          <p className="font-bold">Section: </p>
        </Card.Body>
      </Card>

      <NewsList news={news} />
    </Container>
  );
}
