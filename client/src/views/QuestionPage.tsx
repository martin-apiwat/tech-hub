import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";
import { Question } from "../Question";
import moment, { calendarFormat } from "moment";

export default function QuestionPage() {
  const { id } = useParams();
  const {
    data: question,
    isLoading,
    isError,
  } = useQuery<Question>({
    queryKey: ["questions", id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_SOME_SERVER_URL}/questions/${id}`).then(
        (data) => data.json()
      ),
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  return (
    <div className="p-4">
      <div className="text-2xl">{question.title}</div>
      <div className="text-sm flex gap-1">
        <p className="text-gray-400">Asked</p>{" "}
        {moment(question.createdAt).startOf("day").fromNow()}
      </div>
      <p className="text-sm mt-10">{question.description}</p>
    </div>
  );
}
