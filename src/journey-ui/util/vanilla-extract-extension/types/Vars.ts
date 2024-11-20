import {CSSProperties} from "react";
import Var from "./Var.ts";

type Vars<K extends keyof CSSProperties> = {
    [P in K]: Var<CSSProperties[P]>
}

export default Vars