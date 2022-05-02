// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less"
import "../css/image.css"
// file-loader 可以帮我们把图片引入
import zznhImage from "../img/zznh.png";
import "../font/iconfont.css";

const divE1 = document.createElement("div");

divE1.className = "title";
divE1.innerHTML = "你好啊，李银河";


// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

const imgE1 = document.createElement('img');
imgE1.src = zznhImage;

// i 元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divE1);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgE1);
document.body.appendChild(iEl);

