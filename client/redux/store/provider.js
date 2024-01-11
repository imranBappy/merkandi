"use client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store";

export function Providers({ children }) {
    return (<Provider store={store}>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        
            {children}
    </Provider>);
}