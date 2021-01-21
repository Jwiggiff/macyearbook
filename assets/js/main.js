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
  const target = document.getElementById(a.getAttribute("href")[1]);
  if (target == null) a.removeAttribute('href');
  else
    a.addEventListener("click", (e) => {
      e.preventDefault();
      a.parentNode.parentNode.scrollTop =
        target.offsetTop - target.offsetHeight * 1.5;
    });
});
