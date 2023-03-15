import React from "react";
import QuestionCard from "../components/QuestionCard";
import { useQuery } from "@tanstack/react-query";
import { Question } from "../Question";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

export default function HomePage() {
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_SOME_SERVER_URL}/questions`).then((data) =>
        data.json()
      ),
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        {questions.map((question) => (
          <QuestionCard question={question} />
        ))}
      </div>
    </div>
  );
}
