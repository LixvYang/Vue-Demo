// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less"

const divE1 = document.createElement("div");

divE1.className = "title";
divE1.innerHTML = "你好啊，李银河";

document.body.appendChild(divE1);
