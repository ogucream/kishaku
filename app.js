
let selectedField = null;
function selectField(id) {
  if (selectedField) document.getElementById(selectedField).classList.remove('selected');
  selectedField = id;
  document.getElementById(id).classList.add('selected');
  document.getElementById(id).textContent = "";
}
function appendValue(val) {
  if (!selectedField) return;
  const field = document.getElementById(selectedField);
  field.textContent += val;
}
function backspace() {
  if (!selectedField) return;
  const field = document.getElementById(selectedField);
  field.textContent = field.textContent.slice(0, -1);
}
function calc() {
  const a = parseFloat(document.getElementById("a").textContent);
  const b = parseFloat(document.getElementById("b").textContent);
  const d = parseFloat(document.getElementById("d").textContent);
  if (isNaN(a) || isNaN(b) || isNaN(d)) {
    document.getElementById("result").textContent = "すべて入力してください";
    return;
  }
  if (a === 0) {
    document.getElementById("result").textContent = "分析値が0では計算できません";
    return;
  }
  const c = b - (d * b / a);
  document.getElementById("result").textContent = "希釈量：" + c.toFixed(3) + " L";
}
