import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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
  const [answer, setAnswer] = useState("");

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  return (
    <div className="p-4">
      <div className="py-4">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl text-gray-700">{question.title}</h2>
          <p className="text-gray-400 text-sm">
            Asked {""}
            <span className="text-gray-800">
              {moment(question.createdAt).startOf("minute").fromNow()}
            </span>
          </p>
        </div>
        <p className="text-sm mb-10">{question.description}</p>
        <div>
          <label className="text-lg" htmlFor="answer-textarea">
            Your answer
          </label>
          <textarea
            id="answer-textarea"
            className="bg-gray-100 border p-1 w-full min-h-[200px]"
            placeholder="Leave your answer here"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          ></textarea>
          <button
            // onClick={() => sendQuestion()}
            className="py-1 px-2 bg-[#0a95ff] text-white rounded hover:opacity-80"
          >
            Add answer
          </button>
        </div>
      </div>
    </div>
  );
}
