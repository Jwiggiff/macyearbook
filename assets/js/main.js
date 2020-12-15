document.querySelectorAll(".trigger > li").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    li.classList.toggle("active");
    document.querySelectorAll(".trigger > li").forEach((sibling) => {
      if (sibling != li) sibling.classList.remove("active");
    });
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("page-link"))
    document
      .querySelectorAll(".trigger > li")
      .forEach((li) => li.classList.remove("active"));
});
