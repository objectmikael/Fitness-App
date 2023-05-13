import express from "express"
import {router as routesRouter} from "./routes/routes.js"
import {router as usersRouter} from "./routes/users.js"
import path from "path"
import { fileURLToPath } from "url"
import connectToDatabase from "./config/database.js"
import methodOverride from "method-override"
import moment from "moment"
import passport from "passport"
import flash from "connect-flash"
import session from  "express-session"
import {config} from "dotenv"
import {passportLib} from "./config/passport.js";


/*----- ACCESS TO ENV VARIABLES -----*/
const dotenvPath = path.resolve(process.cwd(), '.env');
config({ path: dotenvPath });


/*----- INITIALIZE APP -----*/
const app = express()


/*----- DATABASE CONNECTION -----*/
connectToDatabase()



/*----- CONFIGURATION -----*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))


/*----- MIDDLEWARE -----*/
app.use(express.json()) 
app.use(express.urlencoded({extended: false})) 
app.use(methodOverride("_method")) 
app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
  }
) 

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
  
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());


/*----- ROUTER -----*/
app.use("/", routesRouter)
app.use("/", usersRouter)


/*----- PORT DEFINITION -----*/
app.listen(3100, function (){
    console.log("App listening on port 3100")
})