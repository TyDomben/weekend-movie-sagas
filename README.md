![toystoryALT](https://github.com/TyDomben/weekend-movie-sagas/assets/127000572/741a93c3-2733-42fc-99e5-b56f3e9f6314)

# Weekend Movies Saga

## Overview

Weekend Movies Saga is an innovative movie catalog application that combines Redux-Saga's state management efficiency with the aesthetic and accessible design of Chakra UI. This application is not just a platform for browsing movie collections but also an embodiment of inclusive design and sophisticated state handling.

## Unique Movie Posters

Adding a personal and whimsical touch, each movie poster in our collection has been playfully altered with my own image. This creative flair underscores the fun aspect of the app and highlights the personalized nature of software development.

## Core Functionalities

- **Redux-Saga for Asynchronous Operations:** Streamlines handling asynchronous tasks and complex state changes, ensuring a seamless user experience.
- **Chakra UI for Design and Accessibility:** The application boasts a responsive, intuitive interface, tailored for inclusivity and ease of use.

## Setting Up the Database

1. Create a new database titled `saga_movies_weekend`.
2. Run the provided SQL scripts in `database.sql` to configure your database structure.

## Getting Started

1. Install all necessary dependencies with `npm install`.
2. Launch the server using `npm run server` and start the React application with `npm run client`.

## Navigating the Application

### Home & Movie List Page

- Presents a comprehensive list of movies, complete with options to access detailed views.
- Enhanced using Chakra UI for a sleek, user-friendly experience.

### Movie Details Page

- Provides in-depth information about a movie, including its genres, synopsis, and a customized poster.
- Leverages Redux-Saga for effective data retrieval and state control.

### Commitment to Accessibility

- Carefully curated Chakra UI components in `theme.js` to enhance accessibility.
- Emphasis on features such as legible font sizes, contrast optimization, and keyboard-friendly navigation.

## Future Enhancements

1. **Movie Addition Feature:** A dedicated interface for adding new entries to the movie collection.
2. **State Persistence on Details Page:** Implementing `useParams` for maintaining state during page refreshes.
