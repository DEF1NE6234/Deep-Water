//textBlock

const photoBlock = document.querySelector(".textBlock__img");

photoBlock.addEventListener("mouseenter", () => {
  photoBlock.classList.add("is-active");
});

photoBlock.addEventListener("mouseleave", () => {
  photoBlock.classList.remove("is-active");
});

//hero

const heroBlock = document.querySelector(".hero__img");

heroBlock.addEventListener("mouseenter", function () {
  heroBlock.classList.add("is-active");
});

heroBlock.addEventListener("mouseleave", function () {
  heroBlock.classList.remove("is-active");
});
