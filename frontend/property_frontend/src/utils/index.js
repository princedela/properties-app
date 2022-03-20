const utils = {
  toggleMobileSearch() {
    let banSearch = document.querySelector(".banner .search-box");

    let mobSearch = document.querySelector(".mob-search");
    let scrollToTop = document.querySelector(".scroll-to-top");
    let mobileTabs = document.querySelector(".mobile-tabs");

    var mobElements = [mobSearch];
    function showMobileSearch(entries) {
      let lastScrollPosition = 0;
      entries.forEach((entry) => {
        // console.log(entry);
        mobElements.forEach((el) => {
          if (entry.intersectionRatio > 0) {
            el.classList.remove("visible");
          } else {
            el.classList.contains("visible") || el.classList.add("visible");
          }
        });
      });
    }
    if (banSearch && mobSearch) {
      new IntersectionObserver(showMobileSearch, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1],
      }).observe(banSearch);
    }
  },
};

export default utils;
