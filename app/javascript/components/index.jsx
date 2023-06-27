import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Redux 
import { Provider } from 'react-redux';
import store from "./redux/store";

document.addEventListener("turbo:load", () => {
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
        // document.getElementById('root')
    );
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});

