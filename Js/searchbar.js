document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.getElementById('search');

    searchButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim().toLowerCase();
        if (!searchQuery) {
            alert('Please enter a search..');
            return;
        }

        // Remove previous highlights
        document.querySelectorAll('.highlight').forEach(el => {
            el.outerHTML = el.innerHTML;
        });

        let foundElements = [];
        
        // Search in all text elements
        document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td').forEach(el => {
            const text = el.innerHTML;
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            
            if (text.toLowerCase().includes(searchQuery)) {
                el.innerHTML = text.replace(regex, `<span class="highlight">$1</span>`);
                foundElements.push(el);
            }
        });

        if (foundElements.length > 0) {
            // Scroll to the first matched element
            foundElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert('No results found.');
        }
    });

    // Additional *functionality* to trigger the search with "Enter" key
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchButton.click();
        }
    });
});