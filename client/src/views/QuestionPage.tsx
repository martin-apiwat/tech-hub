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
      <div className="max-w-4xl mx-auto py-4">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl text-gray-700">{question.title}</h2>
          <p className="text-gray-400 text-sm">
            Asked {""}
            <span className="text-gray-800">
              {moment(question.createdAt).startOf("day").fromNow()}
            </span>
          </p>
        </div>
        <p className="text-sm">{question.description}</p>
      </div>
    </div>
  );
}
