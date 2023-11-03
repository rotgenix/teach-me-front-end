# Teach Me
This is MERN Stack App. It is fully responsive and functional like you can Register as a Teacher/Student.
Student can login again but Teacher's can't, they can only register.
Students can see teachers available for teaching in Teachers section. Info of Teachers is fetched dynamically from Database (MongoDB). Whenever Student/Teacher registers their data is also saved in DB.

User Sample to check the function:
Email: student1@gmail.com
Password: student1

Or you can register as a student to check the app.

If you register as a Teacher then you can't login but as a student you can see all the registered Teachers.
Check Here: https://teach-me-front-end.vercel.app/

## Technologies and Packages used

 - React JS: For front End
 - MongoDB Atlas: For Data Storage
 - NodeJS: For Making Server
 - Express JS: For server Routing
 ### Packages
 
 - bcrypt: For Encrypting Password
 - cookie-parser: For working with Cookies
 - cors: For Requesting on backend from different front url
 - dotenv: For Environment Variables
 - express: For Server Side Routing
 - jsonwebtoken: For Encypting Cookies
 - mongoose:For Connecting with Database-
 - nodemon: To sun the server
 - axios: For making API request
- react-icons: For icons
- react-router-dom:For Front end Routing


# Screenshots

![Home Page of TeachMe](https://raw.githubusercontent.com/rotgenix/teach-me-front-end/main/Screenshots/Screenshot%20%28734%29.png)

![enter image description here](https://raw.githubusercontent.com/rotgenix/teach-me-front-end/main/Screenshots/Screenshot%20%28735%29.png)

![enter image description here](https://raw.githubusercontent.com/rotgenix/teach-me-front-end/main/Screenshots/Screenshot%20%28736%29.png)

![enter image description here](https://raw.githubusercontent.com/rotgenix/teach-me-front-end/main/Screenshots/Screenshot%20%28739%29.png)

![enter image description here](https://raw.githubusercontent.com/rotgenix/teach-me-front-end/main/Screenshots/Screenshot%20%28738%29.png)

# Test in Your Device
Clone the Front end Repo in your device

    git clone https://github.com/rotgenix/teach-me-front-end.git
    
Change the Directory

	cd teach-me-front-end
	
Install the dependencies

    npm i

Start the Server

    npm run dev

Go to Project Folder > src > App.jsx:
Comment the Line no. 14 and uncomment the Line no. 15


Now Clone the Backend Repo in your Device

    git clone https://github.com/rotgenix/teach-me-backend.git
    
Change the Directory

	cd teach-me-backend
	
Install the dependencies

    npm i
Now Make a folder 'Utils' in the project Folder
Now make 'config.env' file in this folder
Copy & Paste following Environment Variables in this file:

    FRONT_ENDURL ='http://localhost:5173'
    PORT = 5000
    MONGODB_URL= 'mongodb://127.0.0.1:27017'
    JWT_KEY = 'asdfsdgdsgd'

Start the Server

    npm run dev


Open the Link in Your Browser:
http://localhost:5173/

Now you can Register as Teacher/Student but as I described above you can see teachers as a student only

Contact me for any Query if you face a Problem :)
https://www.linkedin.com/in/rotgenix/
