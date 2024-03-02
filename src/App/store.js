import { configureStore } from "@reduxjs/toolkit";
import User from "../Components/Features/User.js";
import Project from "../Components/Features/Project.js";
import Message from "../Components/Features/ContactUs.js"

export const store = configureStore({

    reducer: {
        app: User ,
        project: Project,
        Message: Message
    }, 

}); 