import React from "react";

export default function AskQuestionPage() {
  return (
    <div>
      <h2 className="text-3xl mb-4">Ask a question on TechHub</h2>

      <label htmlFor="Title">Title</label>
      <textarea
        id="Title"
        className="bg-gray-100 border p-1 w-full min-h-[50px]"
        placeholder="Your title"
      ></textarea>

      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        className="bg-gray-100 border p-1 w-full min-h-[200px]"
        placeholder="Your description"
      ></textarea>

      <button className="py-1 px-2 bg-[#0a95ff] text-white rounded ml-auto hover:opacity-80">
        Ask question
      </button>
    </div>
  );
}
