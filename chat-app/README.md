# Realtime Chat App 


Techstack:

### **Frontend:**
1. **React (part of MERN stack)**  
   - For building the user interface.
   
2. **Socket.io (client-side)**  
   - For real-time messaging and handling WebSocket connections.
   
3. **TailwindCSS**  
   - A utility-first CSS framework for styling components.

4. **Daisy UI**  
   - Component library built on top of TailwindCSS, providing pre-built UI components.

5. **Zustand**  
   - State management library for handling global state.

### **Backend:**
1. **Node.js (part of MERN stack)**  
   - JavaScript runtime for server-side code execution.
   
2. **Express.js**  
   - Web framework for building REST APIs and handling HTTP requests.

3. **MongoDB (part of MERN stack)**  
   - NoSQL database for storing data.

4. **Socket.io (server-side)**  
   - For handling WebSocket connections and enabling real-time messaging.

5. **JWT (JSON Web Token)**  
   - For authentication and authorization via tokens.


### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
