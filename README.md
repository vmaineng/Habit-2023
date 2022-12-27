# Habit Breaker
>Full stack application to help users track their new habits and see a dashboard of their habits to help them attain their goals.

## Table of contents
* [General info](#general-info)
* [Project Demo](#project-demo)
* [Project Video](#project-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General Info
Users are able to:

- can register, login, and logout
- Add new habit
- update new habit
- see dashboard of habits tracked

<div align="center">Welcome to Habit Breaker </div>
<br/>
<div align="center">
<kbd>
Desktop view:
<img width="700" alt="icon" src="https://user-images.githubusercontent.com/100221733/209727878-5091d8d3-d1eb-462f-ae70-24a0c202c7d7.png">
</kbd>
</div>

## Project Demo
[Click to view site] (https://tiny-task.vercel.app/)

## Project Video

## Technologies
### Backend Development 
* Node.js 
* Express.js version 4.18.2
* Mongoose version 6.8.0
* JWT version 8.5.1
* Bcrypt version 5.1.0

### Frontend Development 
* JavaScript (ES6)
* React.js version 18.2.0
* React-Dom version 18.2.0
* React-router-dom version 6.4.5
* MaterialUI version 5.11.0
* React-Chartjs-2 version 5.0.1

## Setup
To render this project on your computer:
1. Clone the GitHub repository locally to your computer
2. Start the backend, type the command $npm run dev in the terminal line.
3. Navigate to the client fodler. In the command line, type the following:
$npm install and start. 


## Code Example
## Node.js/Express.js

```Express
//get a single habit
const getHabit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const habit = await Habit.findById(id);
  if (!habit) {
    return res.status(404).json({ error: "Not Found" });
  }

  res.status(200).json(habit);
};
```

## JavaScript/React.js

```js
function HabitForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habit = { title, description };

    const response = await fetch("/api/habits", {
      method: "POST",
      body: JSON.stringify(habit),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setError(null);
      console.log("new habit added");
    }
  };

```

## Features

* Full stack web application utiling MERN stack: MongoDB, Express.js, React.js, and Node.js
* Authorization and authentication completed with JWT and bcrypt.
* Front-end and chart styled with MaterialUI and Chart.js
* Users can sign up for an account through application.
* Users can add, update, and delete habits.

## Status

Project still needs more styling and adding more features. 

## Inspiration

The inspiration derived from setting goals for the new year. As the new year falls upon us, best way to reach our goals is through the habits we set daily, weekly, and monthly.

## Contact
Mai Vang

1. Github: https://github.com/vmaineng
2. Medium: https://medium.com/@vmaineng
3. LinkedIn: https://www.linkedin.com/in/mai-vang-software-engineer/
4. Email: vmaineng@gmail.com
