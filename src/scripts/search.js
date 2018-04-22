const filters = document.querySelectorAll('.search__filter-list input');
const filterItems = document.querySelectorAll('[data-search-result]');

let seletedFilters = [];

const resultHtml = document.querySelector('#results-count');
let resultCount = filterItems.length;

function updateFilters() {
    
    resultCount = 0;
    const filterName = this.dataset.searchFilter;
    
    if(seletedFilters.includes(filterName)) {
        seletedFilters = seletedFilters.filter(filter => filter != filterName);
    } else {
        seletedFilters.push(filterName);
    }

    if(seletedFilters.length){
        filterItems.forEach(filterItem => {
            if(!seletedFilters.includes(filterItem.dataset.searchResult)) {
                filterItem.style.display = 'none'
            } else {
                resultCount++;
                filterItem.style.display = 'block';
            }
        })
    } else {
        resultCount = filterItems.length;
        filterItems.forEach(filterItem => filterItem.style.display = 'block');
    }

    updateResultCount();
}

function updateResultCount() {
    resultHtml.innerText = resultCount;
}

updateResultCount();

filters.forEach(filter => {
    filter.addEventListener('click', updateFilters);
});