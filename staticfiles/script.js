// script.js

document.addEventListener("DOMContentLoaded", function () {
    const tweetTexts = document.querySelectorAll(".xtweet-text");

    tweetTexts.forEach(function (textElement) {
        const fullText = textElement.innerText.trim();
        const maxLength = 200; // Set maximum character length for preview

        if (fullText.length > maxLength) {
            const shortText = fullText.substring(0, maxLength) + "...";
            textElement.innerText = shortText;

            // Create Read More/Read Less link
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.className = "read-more-less";
            readMoreLink.innerText = "Read More";

            textElement.parentNode.appendChild(readMoreLink);

            // Event listener to toggle text
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

    // Disable the search button initially
    searchButton.disabled = true;

    // Listen for input changes
    searchInput.addEventListener('input', function() {
        if (searchInput.value.length >= 4) {
            searchButton.disabled = false;  // Enable the button if input is 5 or more characters
        } else {
            searchButton.disabled = true;  // Disable the button otherwise
        }
    });
});
