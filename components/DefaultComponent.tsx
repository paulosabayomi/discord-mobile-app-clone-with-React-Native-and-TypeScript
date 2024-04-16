import React from "react";
import { Provider } from "react-redux";
import { store } from "../shared/store";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";

const DefaultComponent = React.memo((props: any) => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <App /> 
            </NavigationContainer>
        </Provider>
    )
})

export default DefaultComponent