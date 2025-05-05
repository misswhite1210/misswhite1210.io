const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const questionText = document.getElementById("question");
const mainImage = document.getElementById("mainImage");

// 图片加载成功和失败的日志
mainImage.onload = () => {
  console.log("图片加载成功！路径:", mainImage.src);
};

mainImage.onerror = () => {
  console.error("图片加载失败！路径:", mainImage.src);
};

// 读取URL参数name，限制最大长度为20字符
const params = new URLSearchParams(window.location.search);
const username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0;
const noTexts = ["？你认真的吗…", "要不再想想？", "不许选这个！", "我会很伤心…", "不行:("];

noButton.addEventListener("click", () => {
  clickCount++;

  // 放大“可以”按钮
  const yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // “不要”按钮向右移动
  const noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 图片和问题文字向上移动
  const moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // 改变“不要”按钮文字
  if (clickCount <= noTexts.length) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 根据点击次数切换图片
  let imgName = "";
  if (clickCount === 1) imgName = "shocked.gif";
  else if (clickCount === 2) imgName = "think.gif";
  else if (clickCount === 3) imgName = "angry.gif";
  else if (clickCount >= 4) imgName = "crying.gif";

  if (imgName) {
    mainImage.src = `images/${imgName}?t=${Date.now()}`;
  }
});

yesButton.addEventListener("click", () => {
  // 重置样式，防止与“不要”按钮操作冲突
  yesButton.style.transform = "scale(1)";
  noButton.style.transform = "translateX(0)";
  mainImage.style.transform = "translateY(0)";
  questionText.style.transform = "translateY(0)";

  // 切换图片为 OIP.jpg
  mainImage.src = `images/OIP.jpg?t=${Date.now()}`;

  // 修改问题文字
  questionText.innerText = "你选择了“可以”，谢谢你！";
});
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

// 图片加载成功和失败的日志
mainImage.onload = function() {
  console.log("图片加载成功！");
};

mainImage.onerror = function() {
  console.error("图片加载失败！路径:", mainImage.src);
};

// 读取URL参数name，限制最大长度为20字符
const params = new URLSearchParams(window.location.search);
let username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0;
const noTexts = ["？你认真的吗…", "要不再想想？", "不许选这个！", "我会很伤心…", "不行:("];

noButton.addEventListener("click", function () {
  clickCount++;

  // 放大“可以”按钮
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // “不要”按钮向右移动
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 图片和问题文字向上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // 改变“不要”按钮文字
  if (clickCount <= noTexts.length) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 根据点击次数切换图片
  let imgName = "";
  if (clickCount === 1) imgName = "shocked.gif";
  else if (clickCount === 2) imgName = "think.gif";
  else if (clickCount === 3) imgName = "angry.gif";
  else if (clickCount >= 4) imgName = "crying.gif";

  if (imgName) {
    mainImage.src = `images/${imgName}?t=${new Date().getTime()}`;
  }
});

// “可以”按钮点击事件，显示 OIP.jpg
yesButton.addEventListener("click", function () {
  // 重置样式，防止与“不要”按钮操作冲突
  yesButton.style.transform = "scale(1)";
  noButton.style.transform = "translateX(0)";
  mainImage.style.transform = "translateY(0)";
  questionText.style.transform = "translateY(0)";

  // 切换图片为 OIP.jpg
  mainImage.src = `images/OIP.jpg?t=${new Date().getTime()}`;

  // 修改问题文字
  questionText.innerText = "你选择了“可以”，谢谢你！";
});
