const filters = document.querySelectorAll('.search input');
const filterableItems = document.querySelectorAll('[data-search-result]');
let selectedFilters = [];

function filterResults() {
    const dataValue = this.dataset.searchFilter;

    !selectedFilters.includes(dataValue) ?
        selectedFilters.push(dataValue) : selectedFilters = selectedFilters.filter(e => e !== dataValue);
 
    if(!selectedFilters.length) {
        filterableItems.forEach(item => {item.style.display = "block"});
    } else {
        filterableItems.forEach(item => {
            selectedFilters.includes(item.dataset.searchResult) ? item.style.display = "block" : item.style.display = "none";
        });
    }
}

filters.forEach(filter => {
    filter.addEventListener('click', filterResults);
});