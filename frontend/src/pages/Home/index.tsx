import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, TError } from "@tanstack/react-query";
import BulkEmailJobs from "./NewsList";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

import { getNewsTopStories } from "@common/api";

import NewsList from "./NewsList";

export default function Home() {
  const [section, setSection] = useState("home");

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
    <Container>
      <Card className="my-10">
        <Card.Body className="flex flex-row justify-between items-center">
          <p className="font-bold">Section: </p>
        </Card.Body>
      </Card>

      <NewsList news={news} />
    </Container>
  );
}
