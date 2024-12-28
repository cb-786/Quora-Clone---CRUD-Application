<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>
<body>
    <h1>Quora Clone - CRUD Application</h1>

  <h2>Project Overview</h2>
    <p>This project is a web application that replicates the core functionalities of Quora, allowing users to create, read, update, and delete posts.</p>

  <h2>Features</h2>
    <ul>
        <li>Create new posts with a name, content, and date.</li>
        <li>Read all posts displayed in a Quora-like format.</li>
        <li>Update/edit posts using PATCH requests.</li>
        <li>Delete posts using DELETE requests.</li>
        <li>Uses <strong>method-override</strong> for PATCH and DELETE operations.</li>
        <li>Generates unique IDs for posts using <strong>UUID</strong>.</li>
        <li>Fully styled using CSS for a Quora-like design.</li>
    </ul>

  <h2>Installation Instructions</h2>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone &lt;repository-url&gt;</code></pre>

   <li>Navigate into the project folder:</li>
        <pre><code>cd quora-clone</code></pre>

  <li>Install all required packages:</li>
        <pre><code>npm install</code></pre>

  <li>Start the server:</li>
        <pre><code>node index.js</code></pre>

  <li>Open your browser and go to:</li>
        <pre><code>http://localhost:8080</code></pre>
    </ol>

  <h2>Packages Used</h2>
    <ul>
        <li><strong>Express:</strong> Handles routing and server-side logic.</li>
        <li><strong>EJS:</strong> Template engine for rendering dynamic HTML.</li>
        <li><strong>Method-Override:</strong> Allows the use of HTTP verbs such as PATCH and DELETE.</li>
        <li><strong>UUID:</strong> Generates unique IDs for each post.</li>
    </ul>

  <h2>Method-Override and UUID Usage</h2>
    <h3>Method-Override</h3>
    <p>The <code>method-override</code> package is used to support PATCH and DELETE methods via HTML forms. Forms submit a POST request with a query string, e.g., <code>?_method=PATCH</code>. The server interprets this and executes the intended HTTP method.</p>
    <pre><code>app.use(methodOverride('_method'));</code></pre>

  <h3>UUID</h3>
    <p>Each post is assigned a unique ID using the <code>UUID</code> package, ensuring every post has a distinct identifier:</p>
    <pre><code>const { v4: uuidv4 } = require('uuid');
const id = uuidv4();</code></pre>

  <h2>Folder Structure</h2>
    <pre>
    /views
        index.ejs
        new.ejs
        edit.ejs
        specific.ejs
    /public
        style.css
        css4.css
        style2.css
        style4.css
    index.js
    package.json
    package-lock.json
    </pre>

  <h2>Routes</h2>
    <ul>
        <li><code>GET /posts</code> - Displays all posts.</li>
        <li><code>GET /posts/new</code> - Form to create a new post.</li>
        <li><code>POST /posts</code> - Adds a new post.</li>
        <li><code>GET /posts/:id</code> - Shows details of a specific post.</li>
        <li><code>GET /posts/:id/edit</code> - Form to edit a post.</li>
        <li><code>PATCH /posts/:id</code> - Updates a post.</li>
        <li><code>DELETE /posts/:id</code> - Deletes a post.</li>
    </ul>

   
</body>
</html>
