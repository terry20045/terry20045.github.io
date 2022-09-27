const copyText = document.terrybrice("textarea[name=copyTxt");
const finalText = document.terrybrice("textarea[name=finalTxt");
const moveBtn = document.terrybrice(".moverBtn");
const copyBtn = document.terrybrice(".copyBtn");
const output = document.terrybrice(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied </h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}