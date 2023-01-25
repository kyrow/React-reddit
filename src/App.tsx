import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import './main.global.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {EColor, Text} from "./shared/Text";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {commentContext} from "./shared/context/commentContext";

function AppComponent() {
    const [commentValue,setCommentValue]=useState('')

    const [token] = useToken();
    const {Provider} = tokenContext

    const CommentProvider = commentContext.Provider

    return(
        <CommentProvider value={{
            value:commentValue,
            onChange:setCommentValue
        }}>
        <Provider value={token}>
        <Layout>
            <Header />
            <Content>
                <CardsList/>

            </Content>
        </Layout>
        </Provider>
        </CommentProvider>
    );
}

export const App = hot(()=> <AppComponent/>)