import React, { useState } from "react";
import commentsData from "../data/comments";

const Comments = ({ eventId }) => {
  const [comments, setComments] = useState(() => commentsData.filter(c => c.eventId === eventId));
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        eventId,
        author: "CurrentUser",
        text: newComment,
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Comments & Feedback</h2>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow focus:shadow-lg focus:outline-none transition-all duration-200"
            rows="3"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            onClick={handlePost}
            className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2"
          >
            Post
          </button>
        </div>
        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="p-4 bg-blue-50 rounded-xl shadow group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform-gpu">
              <div className="font-bold text-blue-800">{comment.author}</div>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          ))}
          {comments.length === 0 && <div className="text-gray-500">No comments yet.</div>}
        </div>
      </div>
    </div>
  );
};

export default Comments; 