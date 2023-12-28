const clientList = [...$$('.data-client-list')];
const inputSearch = $('#search-bar');
const sortButton = $('#sort-button')

const bodyTable = $('#body-table')

const displayList = displayData(bodyTable , 'basic');
const hideList = displayData(bodyTable , 'hide');

inputSearch.on('input' , function () {
    if (this.value == '') return displayList(clientList)
    const searchResult = search(clientList, this.value)
    hideList(searchResult.notResult);
    displayList(searchResult.result);
  })

sortButton.on('click' , function () {
    inputSearch.value = '';
    clientList.reverse();
    displayList(clientList)
})
  
function voidMain () {
    const DOMListFragment = document.createDocumentFragment()
    clientList.forEach(list => {
      DOMListFragment.appendChild(list);
    });
    sortByUsername(clientList);
    displayList(clientList);
};
  
voidMain();