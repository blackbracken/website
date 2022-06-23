/* @refresh reload */
import { render } from "solid-js/web";

import "./app.css";
import { Page } from "./page/Page";

render(() => <Page />, document.getElementById("root") as HTMLElement);
