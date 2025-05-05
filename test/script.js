let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

// 只绑定一次
mainImage.onload = function() {
  console.log("图片加载成功！");
};

mainImage.onerror = function() {
  console.log("图片加载失败！");
};

const params = new URLSearchParams(window.location.search);
let username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0;
const noTexts = ["？你认真的吗…", "要不再想想？", "不许选这个！ ", "我会很伤心…", "不行:("];

noButton.addEventListener("click", function () {
  clickCount++;

  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  let imgName = "";
  if (clickCount === 1) imgName = "shocked.gif";
  else if (clickCount === 2) imgName = "think.gif";
  else if (clickCount === 3) imgName = "angry.gif";
  else if (clickCount >= 4) imgName = "crying.gif";

  if (imgName) {
    // 本地开发去掉 ?t= 时间戳参数
    mainImage.src = `images/${imgName}`;
  }
});
