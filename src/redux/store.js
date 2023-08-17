import {configureStore} from "@reduxjs/toolkit";
import counter from "../redux/counterslice";

export const store = configureStore({
    reducer : {
        counter : counter
    }
})