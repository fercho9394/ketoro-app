import React             from "react";
import { createRoot }    from 'react-dom/client';

import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


import "moment/locale/es";

import Routes           from "./routes/index.js";
import ServiceApollo    from "../src/services/serviceApollo";
import ServiceAxios     from "../src/services/serviceAxios";
import { ContextStore } from "./store";
import "./helpers/axios";


const rootElement = document.getElementById('root');
const root        = createRoot(rootElement);

root.render(<ContextStore comp={<Routes />}  apollocon={ServiceApollo} axioscon={ServiceAxios} />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();