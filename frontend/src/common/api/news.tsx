import { API_BASE_URL } from "@common/constants";
import { NewsItem } from "@common/interfaces";
import { NewsSection } from "@common/enums";

export const getNewsTopStories = async (
  section: NewsSection
): Promise<NewsItem> => {
  const response = await fetch(
    `${API_BASE_URL}/news/top-stories?section=${section}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};
