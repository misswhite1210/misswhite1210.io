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



noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
  if (clickCount === 2) mainImage.src = "images/think.png"; // 思考
  if (clickCount === 3) mainImage.src = "images/angry.png"; // 生气
  if (clickCount === 4) mainImage.src = "images/crying.png"; // 哭
  if (clickCount >= 5) mainImage.src = "images/crying.png"; // 之后一直是哭
});


// let clickCount = 0;
// const noTexts = ["？你认真的吗…", "要不再想想？", "不许选这个！", "我会很伤心…", "不行:("];
// noButton.addEventListener("click", () => {
//   clickCount++;

//   // 放大“可以”按钮
//   const yesSize = 1 + clickCount * 1.2;
//   yesButton.style.transform = `scale(${yesSize})`;

//   // “不要”按钮向右移动
//   const noOffset = clickCount * 50;
//   noButton.style.transform = `translateX(${noOffset}px)`;

//   // 图片和问题文字向上移动
//   const moveUp = clickCount * 25;
//   mainImage.style.transform = `translateY(-${moveUp}px)`;
//   questionText.style.transform = `translateY(-${moveUp}px)`;

//   // 改变“不要”按钮文字
//   if (clickCount <= noTexts.length) {
//     noButton.innerText = noTexts[clickCount - 1];
//   }

//   // 根据点击次数切换gif图片
//   let imgName = "";
//   if (clickCount === 1) imgName = "shocked.gif";
//   else if (clickCount === 2) imgName = "think.gif";
//   else if (clickCount === 3) imgName = "angry.gif";
//   else if (clickCount >= 4) imgName = "crying.gif";

//   if (imgName) {
//     mainImage.src = `images/${imgName}?t=${Date.now()}`;
//   }
// });
yesButton.addEventListener("click", function () {
        const loveTest = `!!!上号!! ( >᎑<)♡︎ᐝ  ${
          username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
        }`;

        console.log("请求成功");

        document.body.innerHTML = `
          <div class="yes-screen" style="text-align:center; padding: 40px;">
            <h1 class="yes-text" style="font-size: 2em; margin-bottom: 20px;">${loveTest}</h1>
            <img src="images/OIP.jpg" alt="自嘲熊" class="yes-image" style="max-width: 100%; height: auto;">
          </div>
        `;
      });
