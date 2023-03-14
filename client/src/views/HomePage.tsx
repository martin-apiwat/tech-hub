import React from "react";
import QuestionCard from "../components/QuestionCard";
import { useQuery } from "@tanstack/react-query";
import { Question } from "../Question";

export default function HomePage() {
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: () =>
      fetch("http://localhost:3000/questions").then((data) => data.json()),
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <div className="w-7 h-7 border-4 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );

  if (isError) return <div>Oops, something went wrong...</div>;

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
