import { useState } from "react";
import { useQuery, TError } from "@tanstack/react-query";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

import { getNewsTopStories } from "@common/api";
import { NewsSection } from "@common/enums";

import NewsList from "./NewsList";
import SectionSelector from "./SectionSelector";
import { NewsItem } from "@common/interfaces";

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
  ) as { data: NewsItem[] };

  const handleSectionChange = (section: NewsSection) => {
    setSection(section);
  };

  return (
    <Container fluid className="px-10">
      <Card className="my-10">
        <Card.Body className="flex flex-column justify-center flex-start">
          <Card.Title className="mb-2 text-xl font-bold tracking-tight text-left">
            Section
          </Card.Title>
          <SectionSelector section={section} onChange={handleSectionChange} />
        </Card.Body>
      </Card>

      <NewsList news={news} />
    </Container>
  );
}
