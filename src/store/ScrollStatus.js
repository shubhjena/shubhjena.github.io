import { create } from "zustand";

export const countStore = create((set) => ({
  scrollProgress: 0,
  updateScrollProgress: () =>
    set(() => {
      let fullHeight;
      let scrollAmount;

      //to calculate scroll amount for small scrrens
      if (window.innerWidth < 768) {
        const windowHeight = window.innerHeight;
        fullHeight = document.body.clientHeight - windowHeight;
        scrollAmount = window.scrollY;
      }

      //to calculate scroll amount for md and above screens
      else {
        const containerElement = document.querySelector(".home");
        if (!containerElement) {
          console.log("Container element not found.");
          return;
        }
        fullHeight =
          containerElement.scrollHeight - containerElement.offsetHeight;
        scrollAmount = containerElement.scrollTop;
      }
      //setting scroll progress state to calculated progress
      const progress = (scrollAmount / fullHeight) * 100;

      return { scrollProgress: progress };
    }),
}));
