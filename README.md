# Tiny-Task
>Full stack application for parents to discover activities for their children in their leisure time.

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
- view all activities
- favorite activities
- delete activities

<div align="center">Welcome to Tiny-Task </div>
<br/>
<div align="center">
<kbd>
Desktop view:
<img width="750" alt="icon" src="https://user-images.githubusercontent.com/100221733/209723557-88f1d97a-4d76-469c-9fb5-f80e59c1d249.png">
</kbd>
</div>

## Project Demo
[Click to view site] (https://tiny-task.vercel.app/)

## Project Video
[Click to view site] (https://vimeo.com/748869588/2f2d5d8986)

## Technologies
### Backend Development 
* Ruby on Rails

### Frontend Development 
* JavaScript (ES6)
* HTML5
* CSS3
* React.js version 18.2.0
* React-Dom version 18.2.0
* React-router-dom version 6.3.0
* Chakra UI version 2.2.3

## Setup
To render this project on your computer:
1. Clone the GitHub repository locally to your computer
2. Start the backend, type the command $rails server in the terminal line.
3. Navigate to the client fodler. In the command line, type the following:
$npm install and start. 


## Code Example
## Ruby on Rails

```ruby
class FavoritedActivity < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  has_many :categories


  validates :user, uniqueness: { scope: :activity_id }
end
```

## JavaScript/React.js

```js
<Stack
    direction={"column"}
    spacing={3}
    align={"center"}
    alignSelf={"center"}
   >
           
  {isLogin ? (
      <>
    <LoginForm onLogin={onLogin} />
   <Text color={"black"} bg={"white"}>
     Don't have an account? &nbsp;
    <Button color="black" onClick={() => setIsLogin(false)}>
       Sign Up
     </Button>
    </Text>
      </>
    ) : (
    <>
    <SignupForm onLogin={onLogin} />

  <Text color={"black"} bg={"white"}>
    Already have an account? &nbsp;
      <Button color="black" onClick={() => setIsLogin(true)}>
        Log In
      </Button>
    </Text>
  </>
   )}

  </Stack>
```

## Features

* Full stack web application utiling JavaScript, React.js, SQLite, and Ruby on Rails.
* Authorization and authentication completed with bcrypt.
* Front-end styled with Chakra UI, Figma, and Canva.
* Users can sign up for an account through application.
* Users can add profile information and profile image.
* Users can favorite an activity, delete an activity, and complete an activity.


## Status

Project is finished with option to expand functionality and DRY out code.

## Inspiration

The inspiration derived from collaborating with a group at Flatiron School to create list of activities for parents to complete with children.

## Contact
Mai Vang

1. Github: https://github.com/vmaineng
2. Medium: https://medium.com/@vmaineng
3. LinkedIn: https://www.linkedin.com/in/mai-vang-software-engineer/
4. Email: vmaineng@gmail.com
