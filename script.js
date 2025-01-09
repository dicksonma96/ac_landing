const expand_btn = document.querySelectorAll("[data-expand]");
const collapse_btn = document.querySelectorAll(".collapse_btn");
const thumbnail = document.querySelectorAll("[data-thumbnail]");

expand_btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    const target = e.target.getAttribute("data-expand");
    const teams = document.querySelector(".teams");
    teams.classList.add("teams_expand");
    document.querySelectorAll(`[data-team]`).forEach((e) => {
      e.style.display = "flex";
      if (e.getAttribute("data-team") !== target) e.style.display = "none";
    });
    document.querySelectorAll(`[data-thumbnail]`).forEach((e) => {
      e.style.display = "flex";
      if (e.getAttribute("data-thumbnail") == target) e.style.display = "none";
    });
  });
});

thumbnail.forEach((e) => {
  e.addEventListener("click", (e) => {
    const target = e.target.getAttribute("data-thumbnail");
    const teams = document.querySelector(".teams");
    teams.classList.add("teams_expand");
    document.querySelectorAll(`[data-team]`).forEach((e) => {
      e.style.display = "none";
      if (e.getAttribute("data-team") == target) e.style.display = "flex";
    });
    document.querySelectorAll(`[data-thumbnail]`).forEach((e) => {
      e.style.display = "flex";
      if (e.getAttribute("data-thumbnail") == target) e.style.display = "none";
    });
  });
});

collapse_btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    const teams = document.querySelector(".teams");
    teams.classList.remove("teams_expand");
    document.querySelectorAll(`[data-team]`).forEach((e) => {
      e.style.display = "block";
    });
  });
});

document.querySelector(".menu_btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("sidebar_active");
});

document.querySelector(".close_sidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("sidebar_active");
});
