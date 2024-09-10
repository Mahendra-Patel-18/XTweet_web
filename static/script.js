document.addEventListener("DOMContentLoaded", function () {
    const tweetTexts = document.querySelectorAll(".xtweet-text");

    tweetTexts.forEach(function (textElement) {
        const fullText = textElement.innerText.trim();
        const maxLength = 200; 

        if (fullText.length > maxLength) {
            const shortText = fullText.substring(0, maxLength) + "...";
            textElement.innerText = shortText;

            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.className = "read-more-less";
            readMoreLink.innerText = "Read More";

            textElement.parentNode.appendChild(readMoreLink);

            readMoreLink.addEventListener("click", function (e) {
                e.preventDefault();
                if (readMoreLink.innerText === "Read More") {
                    textElement.innerText = fullText;
                    readMoreLink.innerText = "Read Less";
                } else {
                    textElement.innerText = shortText;
                    readMoreLink.innerText = "Read More";
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('searchButton');

    searchButton.disabled = true;

    searchInput.addEventListener('input', function() {
        if (searchInput.value.length >= 4) {
            searchButton.disabled = false;
        } else {
            searchButton.disabled = true;
        }
    });
});
