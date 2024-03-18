
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const habit = { title, description, category };

//     const response = await fetch("/api/habits", {
//       method: "POST",
//       body: JSON.stringify(habit),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setError(null);
//       console.log("new habit added");
//       navigate("/home");
//     }
//   };