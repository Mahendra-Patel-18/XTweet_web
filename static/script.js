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
