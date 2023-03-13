import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function QuestionCard({}: Props) {
  return (
    <div className="p-4 border-b border-b-gray-300">
      <Link to="/questions/123" className="text-lg text-sky-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        tempora commodi ea quas eveniet, iure natus praesentium at? Officia,
        distinctio.
      </p>
    </div>
  );
}
