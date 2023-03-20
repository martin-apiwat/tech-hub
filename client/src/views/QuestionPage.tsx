import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";
import { Question } from "../Question";
import { Comment } from "../Comment";
import moment from "moment";

export default function QuestionPage() {
  const { id } = useParams();
  const {
    data: question,
    isLoading,
    isError,
    refetch,
  } = useQuery<Question & { comments: Comment[] }>({
    queryKey: ["questions", id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_SOME_SERVER_URL}/questions/${id}`).then(
        (data) => data.json()
      ),
  });

  const [answer, setAnswer] = useState("");

  async function sendComment() {
    const response = await fetch(
      `${import.meta.env.VITE_SOME_SERVER_URL}/questions/${id}/comment`,
      {
        method: "POST",
        body: JSON.stringify({ text: answer }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAnswer("");
    refetch();
  }

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

        <div className="my-10">
          <h2 className="text-lg">All comments</h2>
          {question.comments.map((comment) => (
            <div className="bg-gray-100 mb-1 p-4 flex justify-between">
              <p className="text-sm">{comment.text}</p>
              <div className="text-xs text-gray-700">
                {moment(comment.createdAt).startOf("minute").fromNow()}
              </div>
            </div>
          ))}
        </div>
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
            onClick={() => sendComment()}
            className="py-1 px-2 bg-[#0a95ff] text-white rounded hover:opacity-80"
          >
            Add answer
          </button>
        </div>
      </div>
    </div>
  );
}
