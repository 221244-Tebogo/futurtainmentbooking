import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
        setLikeCount(response.data.likedUsers.length);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching event details", error);
      }
    };
    fetchEventDetails();
  }, [id]);

  const handleLike = async () => {
    try {
      await axios.post(`/api/events/like/${id}`, { userId: "currentUserId" }); // Replace with actual user ID
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error("Error liking event", error);
    }
  };

  const handleComment = async () => {
    try {
      await axios.post(`/api/events/comment/${id}`, {
        name: "Current User", // Replace with actual user name
        comment: newComment,
      });
      setComments([...comments, { name: "Current User", comment: newComment }]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  return (
    <div className="event-details-container">
      {event ? (
        <>
          <h2>{event.eventName}</h2>
          <p>Category: {event.eventCategory}</p>
          <p>Time: {event.time}</p>
          <p>Seats: {event.seats}</p>
          <p>Venue: {event.venue}</p>
          <p>Ticket Price: ${event.ticketPrice}</p>
          <p>Likes: {likeCount}</p>
          <button onClick={handleLike}>Like</button>
          <button onClick={() => setShowComments(!showComments)}>
            {showComments ? "Hide Comments" : "Show All Comments"}
          </button>
          {showComments && (
            <div className="comments-section">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>
                    <strong>{comment.name}</strong>: {comment.comment}
                  </p>
                </div>
              ))}
              <div className="add-comment">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment"
                />
                <button onClick={handleComment}>Comment</button>
              </div>
            </div>
          )}
          <Link to="/home">Back to Home</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./EventDetails.css";

// const EventDetails = () => {
//   const { id } = useParams();
//   const [pet, setPet] = useState(null);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [likeCount, setLikeCount] = useState(0);

//   useEffect(() => {
//     const fetchPetDetails = async () => {
//       try {
//         const response = await axios.get(`/api/petlisting/${id}`);
//         setPet(response.data);
//         setLikeCount(response.data.likedUsers.length);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.error("Error fetching Event details", error);
//       }
//     };
//     fetchPetDetails();
//   }, [id]);

//   return (
//     <div className="pet-details-container">
//       {pet ? (
//         <>
//           <h2>{pet.name}</h2>
//           <p>Type: {pet.animalType}</p>
//           <p>Age: {pet.age}</p>
//           <p>Breed: {pet.breed}</p>
//           <p>Sex: {pet.sex}</p>
//           <p>Colour: {pet.colour}</p>
//           <p>Likes: {likeCount}</p>
//           <button onClick={() => setShowComments(!showComments)}>
//             {showComments ? "Hide Comments" : "Show All Comments"}
//           </button>
//           {showComments && (
//             <div className="comments-section">
//               {comments.map((comment, index) => (
//                 <div key={index} className="comment">
//                   <p>
//                     <strong>{comment.name}</strong>: {comment.comment}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//           <Link to="/home">Back to Home</Link>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EventDetails;
