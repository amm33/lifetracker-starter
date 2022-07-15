📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

# Week 3 Assignment: Life Tracker

Submitted by: **Adriana Morales**

GitHub Link: https://github.com/amm33/lifetracker-starter

## had some difficulites with this, will get this resolved by Monday

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button.
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page.
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves.
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [x] Deployed website with Heroku & Surge.

**Detailed Activity Page:**

- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.)
- [x] The activity tracked should be given a unique id for easy lookup.
      `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  - [Table Schema] https://github.com/amm33/lifetracker-starter/blob/main/lifetracker-api/lifetracker-schema.sql

### Stretch Features

Implement any of the following features to improve the application:

- [x] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [x] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [x] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [x] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

<iframe src="https://www.loom.com/embed/a6de3f890cdb4a3493dbd3902a9d9567" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
https://www.loom.com/share/a6de3f890cdb4a3493dbd3902a9d9567

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[Add your response here]
Many of the past labs had some relevance to this project, which was tremendously helpful. This project was big and featured many of the topics reviewed during our lessons and the labs. One lab that helped me create my project, specifically the login and register portion was the vaccine hub lab. The SQL lab also helped me understand how to create databases, tables, and other features which were also used in this project.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

[Add your response here]
If I had more time, I would love to play around with the CSS to make the website more attractive and pleasing to look at. I would also love to have both an edit and delete button for each product card (within the exercise, nutrition, and sleep) rather than having it just show up, even if there are errors within the data.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[Add your response here]
I think, overall, I did a good job despite any difficulties that occurred. I did have an axis error when making the login form, which was resolved with a complete computer restart. There were also little errors and mistakes along the way, but they were overall resolved. I do wish the activity feed would have the data displayed but that is something I will continue to work on and hopefully have it working. Through the demos, I did notice some of my peers did not replicate the code path life tracker but rather added some things or made it completely different. I thought this was a good thing as they create their vision of the project. Next project, I would love to have the core features but make the frontend look different.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

[Add your response here]
Shout out to instructor Moe for helping with any dificulities during this project.
