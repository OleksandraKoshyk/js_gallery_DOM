"use strict";
const thumbs = document.querySelector("#thumbs");
thumbs.onclick = function(ev) {
    ev.preventDefault();
    const largeImage = document.querySelector("#largeImg");
    const smallImageLink = ev.target.closest(".list-item__link");
    const newSrc = smallImageLink.href;
    if (!smallImageLink) return;
    largeImage.src = newSrc;
};

//# sourceMappingURL=index.f75de5e1.js.map
