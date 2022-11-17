import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import './main.global.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import {Dropdown} from "./shared/Dropdown";

function AppComponent() {
    return(
        <Layout>
            <Header />
            <Content>
                <CardsList/>

            </Content>
            <br/>

            <Dropdown
                onOpen={()=> console.log('opened')}
                onClose={()=> console.log('closed')}
                button={<button>TEST</button>}>
                <ul >
                    <li>Click here</li>
                </ul>

            </Dropdown>
        </Layout>
    );
}

export const App = hot(AppComponent)