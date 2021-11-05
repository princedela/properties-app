document.addEventListener("DOMContentLoaded", function () {
  initUIWidgets();
});
function initUIWidgets() {
  (function toggleMobileSearch() {
    let banSearch = document.querySelector(".banner .search-box");

    let mobSearch = document.querySelector(".mob-search");
    let scrollToTop = document.querySelector(".scroll-to-top");
    let mobileTabs = document.querySelector(".mobile-tabs");

    var mobElements = [mobSearch, mobileTabs];
    if (banSearch && mobSearch) {
      // banSearch.
      function showMobileSearch(entries) {
        function scrollEvent(e) {
          console.log(this, this.scrollY);
        }
        let lastScrollPosition = 0;
        entries.forEach((entry) => {
          console.log(entry);
          mobElements.forEach((el) => {
            if (entry.intersectionRatio > 0) {
              el.classList.remove("visible");
              window.removeEventListener("scroll", scrollEvent);
              console.log("unhinged", entry.intersectionRatio);
            } else {
              el.classList.contains("visible") || el.classList.add("visible");
              window.removeEventListener("scroll", scrollEvent);
              window.addEventListener("scroll", scrollEvent);
              console.log("hinged");
            }
          });
        });
      }
      new IntersectionObserver(showMobileSearch, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1],
      }).observe(banSearch);
    }
  })();
  (function initMobileMenu() {
    //mobile menu
    let mobileIcon = document.querySelector(".mobile-menu-link");

    if (mobileIcon) {
      mobileIcon.addEventListener("click", function (e) {
        if (mobileIcon.classList.contains("open")) {
          mobileIcon.classList.remove("open");
        } else {
          mobileIcon.classList.add("open");
          function checkForClose() {
            if (!document.body.classList.contains("mm-wrapper_opened"))
              mobileIcon.classList.remove("open");
            else requestAnimationFrame(checkForClose);
          }
          requestAnimationFrame(checkForClose);
        }
      });
      new Mmenu("#mobile-menu");
    }
  })();
}
