# TodoX V2

A modern, full-stack todo application with a sleek UI and powerful task management features.

## 🎯 Features

- ✅ Create, read, update, and delete tasks
- 📅 Date and time filtering for tasks
- 📊 Task statistics and analytics
- 🎨 Beautiful UI with Tailwind CSS and Radix UI components
- 🔄 Real-time task updates
- 📱 Responsive design
- ⚡ Fast performance with Vite and React
- 🔌 RESTful API backend with Express.js

## 📚 Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

### Frontend

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB running locally or a MongoDB Atlas connection string

### Installation

1. Clone the repository

```bash
git clone https://github.com/FrozenBiu/todoxv2.git
cd todoxv2
```

2. Install dependencies for both backend and frontend

```bash
npm run build
```

### Configuration

1. Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

2. Create a `.env` file in the `frontend` directory (if needed):

```env
VITE_API_URL=http://localhost:5000
```

### Running the Application

#### Development Mode

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend (in a new terminal):**

```bash
cd frontend
npm run dev
```

The frontend will typically be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

#### Production Build

```bash
npm run build
```

This will install dependencies and build the frontend for production.

## 📁 Project Structure

```
todoxv2/
├── backend/                    # Express.js server
│   ├── src/
│   │   ├── server.js          # Server entry point
│   │   ├── config/
│   │   │   └── db.js          # Database configuration
│   │   ├── controllers/
│   │   │   └── tasksController.js   # Task logic
│   │   ├── models/
│   │   │   └── TaskSchema.js   # MongoDB schema
│   │   └── routes/
│   │       ├── index.js        # Main routes
│   │       ├── ping.js         # Health check
│   │       └── tasks.js        # Task endpoints
│   └── package.json
│
├── frontend/                   # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.jsx     # Add task form
│   │   │   ├── TaskCard.jsx    # Task display
│   │   │   ├── TaskList.jsx    # Task list container
│   │   │   ├── DateTimeFilter.jsx    # Filtering
│   │   │   ├── StatsAndFilters.jsx   # Statistics
│   │   │   ├── TaskListPagination.jsx # Pagination
│   │   │   └── ui/             # Reusable UI components
│   │   ├── lib/
│   │   │   ├── axios.js        # Axios configuration
│   │   │   └── utils.js        # Utility functions
│   │   ├── pages/
│   │   │   ├── HomePage.jsx    # Main page
│   │   │   └── NotFound.jsx    # 404 page
│   │   ├── App.jsx             # Root component
│   │   └── main.jsx            # Entry point
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── package.json                # Root package configuration
```

## 🔌 API Endpoints

### Health Check

- `GET /ping` - Server health check

### Tasks

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a specific task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## 🛠️ Available Scripts

### Root Directory

```bash
npm run build    # Install dependencies and build frontend
```

### Backend

```bash
npm start        # Start production server
npm run dev      # Start development server with hot reload
```

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🎨 UI Components

The frontend uses reusable UI components built with Radix UI and styled with Tailwind CSS:

- Button
- Card
- Badge
- Input
- Label
- Dialog
- Popover
- Pagination
- Command

## 📖 Development Tips

1. **Hot Module Replacement**: The frontend uses Vite's HMR for instant updates during development
2. **CORS**: Backend is configured to accept requests from the frontend
3. **Database**: Ensure MongoDB is running and the connection string is correct
4. **Environment Variables**: Use `.env` files for sensitive configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 🔗 Links

- [GitHub Repository](https://github.com/FrozenBiu/todoxv2)
- [Issues & Bug Reports](https://github.com/FrozenBiu/todoxv2/issues)

## 📧 Support

For support, open an issue on the GitHub repository or contact the project maintainers.

---

**Made with ❤️ by FrozenBiu**
