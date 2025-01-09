//----Team section------

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

//-----Side menu--------

document.querySelector(".menu_btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("sidebar_active");
});

document.querySelector(".close_sidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("sidebar_active");
});


//-----Banner slider--------

const banner = document.querySelectorAll('.banner');
const next_btn = document.querySelector('.next_btn');
const prev_btn = document.querySelector('.prev_btn');
let current_banner = 0;
let interval;

// Function to move banners
function MoveBanner(move) {
  current_banner = current_banner + move;
  current_banner = current_banner >= banner.length ? 0 : current_banner;
  current_banner = current_banner < 0 ? banner.length - 1 : current_banner;

  // Update the display of the banners
  banner.forEach((item, index) => {
    item.style.display = index == current_banner ? "flex" : "none";
  });
}

// Function to reset the interval
function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}

// Start auto banner sliding every 5 seconds
function startAutoSlide() {
  interval = setInterval(() => {
    MoveBanner(1); // Move to the next banner
  }, 5000); // Change every 5 seconds
}

// Initialize the first banner
MoveBanner(0);

// Start the automatic banner switch
startAutoSlide();

// Event listeners for next and previous buttons
next_btn.addEventListener("click", () => {
  MoveBanner(1);
  resetInterval(); // Reset interval when user interacts
});

prev_btn.addEventListener("click", () => {
  MoveBanner(-1);
  resetInterval(); // Reset interval when user interacts
});


