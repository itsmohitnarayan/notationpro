# Notation Pro

## Overview
Notation Pro is an AI-powered web application designed to enhance note-taking and organization. Leveraging advanced technologies, Notation Pro allows users to create, store, and manage notes efficiently, with the added benefit of AI-driven features for improved productivity and user experience.

---

## Features
- **AI-Assisted Note Search**: Quickly find notes using AI-driven search capabilities.
- **User Authentication**: Secure login and registration with GitHub OAuth integration.
- **Note Management**: Create, update, delete, and organize notes based on priorities.
- **Favorites**: Mark notes as favorites for easy access.
- **Multi-language Support**: Available in multiple languages including English, Hindi, and Odia.
- **Customizable Appearance**: Switch between light and dark themes, and customize the app's appearance.

---

## Tech Stack

### Frontend
- Vue.js
- Nuxt.js
- TypeScript
- Tailwind CSS
- Vue Router
- Vee-validate
- Vue Writer

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Axios

### DevOps
- Docker
- Docker Compose

### Testing
- Vitest
- @vue/test-utils

---

## Installation

### Prerequisites
- **Node.js** (v20 or later)
- **Yarn** (v1.22 or later)
- **MongoDB** (local or cloud instance)
- **Docker** (optional, for containerization)

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd notation-pro
   ```
2. **Install dependencies**:
   ```bash
   yarn install
   ```
3. **Set up environment variables**:  
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_DB=<your-mongodb-connection-string>
   CLIENT_ID=<github-oauth-client-id>
   CLIENT_SECRET=<github-oauth-client-secret>
   HASH=<secret-hash-for-jwt>
   ```
4. **Run the application**:
   - **Development Mode**:
     ```bash
     yarn dev
     ```
   - **Production Mode**:
     ```bash
     yarn build
     yarn start
     ```
5. **Build and Run in Docker**:
   ```bash
   docker-compose up --build
   ```

---

## Usage

### Running the Application
- **Development Mode**:
  ```bash
  yarn dev
  ```
- **Production Mode**:
  ```bash
  yarn build
  yarn start
  ```

### Accessing the Application
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Notation Pro web application.

---

## Backend Environment Setup

### Prerequisites
- **Node.js** (v20 or later)
- **Yarn** (v1.22 or later)
- **MongoDB** (local or cloud instance)
- **Docker** (optional, for containerization)

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd notation-pro-backend
   ```
2. **Install dependencies**:
   ```bash
   yarn install
   ```
3. **Set up environment variables**:  
   Create a `.env` file in the `bck` directory and add the following:
   ```env
   MONGO_DB=<your-mongodb-connection-string>
   CLIENT_ID=<github-oauth-client-id>
   CLIENT_SECRET=<github-oauth-client-secret>
   HASH=<secret-hash-for-jwt>
   ```
4. **Run the backend server**:
   - **Development Mode**:
     ```bash
     yarn dev
     ```
   - **Production Mode**:
     ```bash
     yarn build
     yarn start
     ```
5. **Docker Setup**:
   - **Build the Docker image**:
     ```bash
     docker build -t notation-pro-backend .
     ```
   - **Run the Docker container**:
     ```bash
     docker run -p 3001:3001 notation-pro-backend
     ```

---

## API Endpoints

### Authentication
- **Login**: `POST /auth/login`
- **Register**: `POST /auth/register`
- **Get User**: `GET /auth/me`

### Notes
- **Get All Notes**: `GET /notes`
- **Get Note by ID**: `GET /notes/:id`
- **Create Note**: `POST /notes`
- **Update Note**: `PATCH /notes/:id`
- **Delete Note**: `DELETE /notes/:id`
- **Get Favorite Notes**: `GET /fav_notes`

### GitHub OAuth
- **GitHub Login**: `POST /gitlogin`

---

## Contributing
We welcome contributions from the community! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m 'Add new feature'
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature-branch
   ```
6. **Open a pull request**.

---

## License
This project is licensed under the GNU General Public License v3.0. See the `LICENSE` file for more details.

---

## Contact
For any questions or feedback, please reach out to me.
