var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('.custom-link');
const buttons = document.querySelectorAll('.custom-button');

function updateCursorPos(e) {
  const x = e.clientX;
  const y = e.clientY + window.scrollY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}

function scaleCursor() {
  cursor.style.transform = 'scale(1.5)';
}

function resetCursor() {
  cursor.style.transform = 'scale(1)';
}

document.addEventListener('mousemove', updateCursorPos);

links.forEach(link => {
  link.addEventListener('mouseenter', scaleCursor);
  link.addEventListener('mouseleave', resetCursor);
});

buttons.forEach(button => {
  button.addEventListener('mouseenter', scaleCursor);
  button.addEventListener('mouseleave', resetCursor);
});