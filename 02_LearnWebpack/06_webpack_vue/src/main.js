import {sum} from "./js/math";
import "./js/element";
import { createApp } from "vue";
const {priceFormat} = require("./js/format");


console.log(sum(20, 30));
console.log(priceFormat());

// Vue源代码
createApp