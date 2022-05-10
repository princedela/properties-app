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
  // mapGenerator(id) {
  //   let initMap = () => {
  //     const initLocation = { lat: 5.6119476, lng: -0.2551413 };
  //     const map = new google.maps.Map(document.getElementById(id), {
  //       zoom: 4,
  //       center: initLocation,
  //     });
  //     const marker = new google.maps.Marker({
  //       position: initLocation,
  //       map: map,
  //     });
  //   };
  //   window.initMap = initMap;
  // },
};

export default utils;
