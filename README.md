TaskMaster is a simple yet powerful task management application built using the Model-View-Controller (MVC) architecture. It allows users to efficiently organize their tasks by providing features for adding, viewing, and deleting tasks seamlessly.

## Key Features:

### Task Management:
TaskMaster enables users to manage their tasks effortlessly. Users can add new tasks, view existing tasks, and delete tasks as needed. Each task includes details such as title, description, and creation timestamp.

### MVC Architecture:
The project follows the MVC architecture for better code organization and separation of concerns. Models handle the data logic related to tasks, views are responsible for rendering HTML templates using EJS, and controllers manage the interaction between models and views.

### Displaying Tasks:
Implement routes and controller methods to display a list of tasks on the homepage.

### Adding Tasks:
Create routes and controller methods to handle adding new tasks. Implement a form for users to input task details and submit them to the server.

### Viewing Task Details:
Implement routes and controller methods to display details of a specific task when its link is clicked.

### Deleting Tasks:
Add functionality to delete tasks. Implement routes and controller methods to handle deleting tasks from the list.

### Express.js Server:
The application is powered by an Express.js server that handles HTTP requests and responses. Middleware functions are used for parsing request bodies and serving static assets such as CSS and images.

## Tech Stack:

### Frontend: HTML, CSS, Bootstrap, EJS (Embedded JavaScript)
### Backend: Node.js, Express.js
### Database: In-memory (array)
### Other Tools: JavaScript
### Project Implementation:

## Note:
For simplicity, tasks are stored in an array in memory instead of using a database.
Focus on understanding the MVC architecture and implementing basic CRUD operations. You can later enhance the project by adding more features or integrating a database for persistent storage.
