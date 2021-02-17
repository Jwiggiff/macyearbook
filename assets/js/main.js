document.querySelectorAll(".trigger > li").forEach((li) => {
  li.querySelector("a").addEventListener("click", (e) => {
    li.classList.toggle("active");
    document.querySelectorAll(".trigger > li").forEach((sibling) => {
      if (sibling != li) sibling.classList.remove("active");
    });
  });
});
window.addEventListener("click", (e) => {
  if (e.target.closest(".trigger") == null) {
    document
      .querySelectorAll(".trigger > li")
      .forEach((li) => li.classList.remove("active"));
  }
});

document.querySelectorAll(".alpha-links > a").forEach((a) => {
  const target = document.getElementById(a.getAttribute("href").slice(1));
  if (target == null) a.removeAttribute('href');
  if (a.parentNode.parentNode.classList.contains('dropdown'))
    a.addEventListener("click", (e) => {
      e.preventDefault();
      a.parentNode.parentNode.scrollTop =
        target.offsetTop - target.offsetHeight * 1.5;
    });
});

const names = [
  "Josh Friedman",
  "Jesus Christ",
  "Our Lord and Saviour",
  "Stud Move",
  "Santa Suit"
];
let currentIndex = 0;
document.querySelector('.site-footer p:last-child span')
  .addEventListener('wheel', (e) => {
    e.preventDefault();
    currentIndex += e.deltaY < 0 ? -1 : 1;
    currentIndex = Math.max(0, Math.min(names.length-1, currentIndex));
    e.target.innerText = names[currentIndex];
  });