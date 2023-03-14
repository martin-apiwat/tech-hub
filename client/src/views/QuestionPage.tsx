import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { Question } from "../Question";

export default function QuestionPage() {
  const { id } = useParams();
  const {
    data: question,
    isLoading,
    isError,
  } = useQuery<Question>({
    queryKey: ["questions", id],
    queryFn: () =>
      fetch("http://localhost:3000/questions/" + id).then((data) =>
        data.json()
      ),
  });

  console.log(question);

  return <div>QuestionPage</div>;
}
