# Weekend Movies Saga

## Introduction

Weekend Movies Saga is a dynamic movie management application that leverages Redux-Saga for efficient state management and Chakra UI for an accessible, user-friendly interface. This project not only showcases the ability to view a list of movies and their details but also emphasizes inclusive design and advanced state management techniques.

## Personalized Movie Posters

In keeping with the spirit of movie magic, I've added a personal twist to the classic movie posters in our database. Each poster features an "approximate" superimposition of my face, blending a bit of fun with the functionality of the app. It's a nod to the creative process and a reminder that behind every line of code, there's a human touch.

## Key Features

- **Redux-Saga Integration:** Utilized for handling asynchronous actions and side effects in Redux, providing a more organized and maintainable approach to managing complex application states.
- **Chakra UI:** Employed to build a responsive, visually appealing interface. Customizations in `theme.js` enhance accessibility and inclusivity, following guidelines learned through ChatGPT consultations.

## Database Setup

1. Create a database named `saga_movies_weekend`.
2. Execute the SQL queries from `database.sql` to set up the schema.

## Installation and Setup

1. Run `npm install` to install dependencies.
2. Test the application with `npm run test`.
3. Start the server (`npm run server`) and the React app (`npm run client`).

## Application Workflow

### Home/List Page

- Displays all movies with options to view detailed information.
- Enhanced with Chakra UI components for a modern, accessible user interface.

### Details Page

- Shows comprehensive details of the selected movie, including genres, title, description, and poster.
- Implements Redux-Saga for efficient data fetching and state management.

### Accessibility and Inclusivity

- Chakra UI components in the `theme.js` file are customized to improve accessibility.
- Features like adjustable font sizes, color contrast, and keyboard navigability are considered.

## Stretch Goals

1. **Add Movie Page:** Interface for adding new movies.
2. **Refresh-able Details Page:** Utilize `useParams` for persistent state on page refresh.
3. **Edit Page:** Functionality to edit movie details.

## Additional Features (Optional)

- Current values in edit fields.
- Separation of sagas and reducers.
- Genre management for movies.
- Search functionality for movies.

## Contributing

Contributions are welcome. Please adhere to the project's coding standards and submit pull requests for proposed changes.

## License

[Specify License]
