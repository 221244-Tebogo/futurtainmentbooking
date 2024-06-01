import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EventCard.css";

const EventCard = ({ event, userId }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = async () => {
    try {
      await axios.post(`/api/events/like/${event._id}`, { userId });
      alert("Event liked successfully");
    } catch (error) {
      console.error("Error liking event", error);
      alert("Failed to like event");
    }
  };

  const handleComment = async () => {
    if (!comment) {
      return alert("Comment cannot be empty");
    }

    try {
      await axios.post(`/api/events/comment/${event._id}`, {
        userId,
        comment,
      });
      alert("Comment added successfully");
      setComment("");
      setShowCommentBox(false);
    } catch (error) {
      console.error("Error adding comment", error);
      alert("Failed to add comment");
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3>{event.eventName}</h3>
        <p className="event-category">{event.eventCategory}</p>
      </div>
      <div className="event-card-body">
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Seats:</strong> {event.seats}
        </p>
        <p>
          <strong>Venue:</strong> {event.venue}
        </p>
        <p>
          <strong>Ticket Price:</strong> R{event.ticketPrice}
        </p>
      </div>
      <div className="event-card-actions">
        <button onClick={handleLike} className="like-button">
          Like
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="comment-button"
        >
          Comment
        </button>
        <Link to={`/eventdetails/${event._id}`} className="details-link">
          View Details
        </Link>
      </div>
      {showCommentBox && (
        <div className="comment-box">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your comment"
          ></textarea>
          <button onClick={handleComment} className="submit-comment-button">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./EventCard.css";

// const EventCard = ({ event, userId }) => {
//   const [showCommentBox, setShowCommentBox] = useState(false);
//   const [comment, setComment] = useState("");

//   const handleLike = async () => {
//     try {
//       await axios.post(`/api/events/like/${event._id}`, { userId });
//       alert("Event liked successfully");
//     } catch (error) {
//       console.error("Error liking event", error);
//       alert("Failed to like event");
//     }
//   };

//   const handleComment = async () => {
//     if (!comment) {
//       return alert("Comment cannot be empty");
//     }

//     try {
//       await axios.post(`/api/events/comment/${event._id}`, {
//         userId,
//         comment,
//       });
//       alert("Comment added successfully");
//       setComment("");
//       setShowCommentBox(false);
//     } catch (error) {
//       console.error("Error adding comment", error);
//       alert("Failed to add comment");
//     }
//   };

//   return (
//     <div className="event-card">
//       <h3>{event.eventName}</h3>
//       <p>Category: {event.eventCategory}</p>
//       <p>Time: {event.time}</p>
//       <p>Seats: {event.seats}</p>
//       <p>Venue: {event.venue}</p>
//       <p>Ticket Price: ${event.ticketPrice}</p>
//       <div className="event-card-actions">
//         <button onClick={handleLike}>Like</button>
//         <button onClick={() => setShowCommentBox(!showCommentBox)}>
//           Comment
//         </button>
//       </div>
//       {showCommentBox && (
//         <div className="comment-box">
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Add your comment"
//           ></textarea>
//           <button onClick={handleComment}>Submit</button>
//         </div>
//       )}
//       <Link to={`/eventdetails/${event._id}`} className="details-link">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default EventCard;
