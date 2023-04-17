#The WDI-200 Final Assessment will be used to guage whether or not a student is capable of semi-independent fullstack development. The project must be: created using the MERNstack (MongoDB, ExpressJS, ReactJS, and NodeJS), deployed to a hosted environment with a public url domain (Heroku, Digital Ocean, Vercel, etc.), must include user login and registration functionality, and include core CRUD functionality (Create, Read, Update, and Delete).

The overall project goal is to create a basic ticket tracker application similar to JIRA. Ticket trackers are used to create and manage tasks within developer teams. Typically, project managers create tasks/tickets with titles and descriptions and then assign those tickets to developers on their team. As the developers progress through their tasks, they update the ticket status as well as leave comments for feedback. Developers work in tandem with the project managers and the quality assurance team to move tickets from unassigned, to in progress, to testing, to done.

The Final Assessment will be graded as follows. Implementation of the core requirements will constitute a passing grade. Implementation of all the core requirements with the stretch requirements will constitute a B grade. Implementation of core requirements, stretch requirements, and ANY super stretch requirement will constitute an A grade.


## Tech Stack

- [Required] Node - Runtime
- [Required] React - Client Framework
- [Required] Express - Server Framework
- [Required] MongoDB - Database
- [Required] Git - Code Versioning
- [Required] Github - Code Storage and Collaboration
- [Required] CORS - Express CORS Library
- [Suggested] bcryptJS - User Authentication
- [Suggested] JsonWebToken - User Auth Tokens
- [Suggested] Bootstrap - CSS Framework
- [Suggested] Nodemon - Server Hot Reloading
- [Suggested] React-Router - Client Side Routing
- [Suggested] uuidv4 - Unique ID Generator

## Core Requirements

### User Login and Registration

- [Core] 
  - A user should be able to register with the application.
    - [Stretch] The user's password should be encrypted via salt+hash algorithm.
  - A user should be able to login with the application.
    - [Stretch] A user ID Token should be generated using JsonWebToken. The ID Token should then be persisted on client side with local storage. The client should then check for the existence of the token before prompting the user to authenticate.
    - [Stretch] A user should be able to logout of the application and login with a different account.

### Ticket Management

- [Core]
  - A user should be able to create a new ticket and edit an existing a ticket.
    - [Stretch] There should be a page or modal for users to create new tickets. 
    - [Stretch] A user should be able to create and edit the following fields on a ticket:
      - title {String}
      - description {String}
      - relatedTicketIds {uuid[]}
      - assignedToUserId {uuid}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}
  - A user should be able to delete a ticket.
  - A user should be able to see a list of their tickets.
    - [Stretch] The ticket list should be sortable and filterable.
    - [Stretch] The ticket list should be paginated.
    - [Stretch] If a user clicks a ticket title, it should bring up a quick edit modal of the ticket.

### Project
- [Stretch]
  - Create Project README


### Super Stretch Goals

- Add support for users to be part of an organization.
- Add support for admin users in an organization to have authorized privileges that basic users do not.
- A user should be able to attach a file to a ticket.
- Add support for users to add comments onto a ticket.
- Add support for users to tag other users in a comment.
- Integrate any third party API

### Recommendations

- Authentication and Authorization
  -  Use bcryptJS for password encryption.

- Server-Side

- Client-Side
- [Recommendation] Many of the input fields for ticket creation are shared with ticket editing. You may be able to create the same page/modal for ticket creation and ticket editing.
- [Optional] Instead of a page, there can be a modal ticket creator popup on Create Ticket button click.
- First, create a <TicketsPage /> that will fetch all tickets in the database
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
