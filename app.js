const randomColor = {
  button: document.getElementById("start"),
  colorValue: document.getElementById("color"),
  icon: document.getElementById("copy-icon"),
  init: function () {
    this.button.addEventListener("click", function (e) {
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.background = newColor;
      document.getElementById("color").innerHTML = newColor;
    });
    this.colorValue.addEventListener("click", (e) => {

      navigator.clipboard.writeText(this.colorValue.innerHTML);
    });
    this.icon.addEventListener("click", (e) => {

        navigator.clipboard.writeText(this.colorValue.innerHTML);
      });
  },
};

randomColor.init();
