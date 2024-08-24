# url-shortner
A simple URL shortening application built with Node.js, Express, and EJS for server-side rendering. This project allows users to input a long URL and receive a shortened version that redirects to the original URL.

#Features
Shorten URLs: Convert long URLs into shortened versions.
Redirect: Shortened URLs redirect users to the original long URL.
EJS Templating: Server-side rendering with EJS for a dynamic and responsive UI.
Express: Lightweight server with routing and middleware.
MongoDB: Store and retrieve URL data.

# Installation
Clone the repository:
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

# Install the dependencies:
npm install

# Set up MongoDB:

Ensure MongoDB is running locally or provide a connection string to a remote MongoDB instance.
Create a .env file in the root of the project and add your MongoDB URI:
bash
MONGO_URI=your-mongodb-connection-string

# Run the application:
npm start

Open your browser and visit http://localhost:3000 to access the application.

# Usage
Enter the long URL you want to shorten in the input field on the homepage.
Click "Shorten URL" to generate a shortened link.
Copy the shortened link and use it to redirect to the original URL.
Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
EJS: Embedded JavaScript templating engine.
MongoDB: NoSQL database for storing URLs.
Mongoose: ODM for MongoDB.
Bootstrap: Frontend framework for styling and layout.
Future Enhancements
Add user authentication for managing personal URLs.
Implement analytics to track the number of times a shortened URL is accessed.
Add custom URL aliasing.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request.









