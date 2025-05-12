const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const questionText = document.getElementById("question");
const mainImage = document.getElementById("mainImage");

// 读取URL参数name，限制最大长度为20字符
const params = new URLSearchParams(window.location.search);
const username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText += safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数
const noTexts = [
  "？你认真的吗…",
  "要不再想想？",
  "不许选这个！",
  "我会很伤心…",
  "不行:(",
];

noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 1.2 倍（你可以调节）
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 按钮文本变化（最多5次）
  if (clickCount <= noTexts.length) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（最多4次）
  switch (clickCount) {
    case 1:
      mainImage.src = "images/shocked.gif"; // 震惊
      break;
    case 2:
      mainImage.src = "images/doubt.gif"; // 质疑
      break;
    case 3:
      mainImage.src = "images/cry.png"; // 生气
      break;
    case 4:
      mainImage.src = "images/angry.png"; // 哭
      break;
  }
});

yesButton.addEventListener("click", function () {
  const loveTest = `!!!上号!! ( >᎑<)♡︎ᐝ  ${
    username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
  }`;

  // console.log("请求成功");

  document.body.innerHTML = `
    <div class="yes-screen" style="text-align:center; padding: 40px;">
      <h1 class="yes-text" style="font-size: 2em; margin-bottom: 20px;">${loveTest}</h1>
      <img src="images/happy.gif" alt="自嘲熊" class="yes-image" style="max-width: 100%; height: auto;">
    </div>
  `;
});
