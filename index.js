const addButton = document.getElementById('btn');

addButton.addEventListener('click',() =>{

    const addedListItem = document.createElement('input');
    const addedItemDelete = document.createElement('input');
    const listItemsContainer = document.querySelector('.todo-dynamic');
    const newItemValue = document.querySelector('#add_item').value;
    addedListItem.value = newItemValue;

    document.querySelector('#add_item').value=""

    addedListItem.type = 'text';
    addedListItem.classList.add('todo__value');
    addedListItem.classList.add('new-input-value');
    addedItemDelete.type = 'checkbox';
    addedItemDelete.classList.add('todo__checkbox');

    addNewItem();

    addedItemDelete.addEventListener('change', (event) =>{
        console.log(event.target.parentElement);
        listItemsContainer.removeChild(addedListItem);
        listItemsContainer.removeChild(addedItemDelete);
    });

    function addNewItem(){
        listItemsContainer.appendChild(addedListItem);
        listItemsContainer.appendChild(addedItemDelete);
        listItemsContainer.appendChild(document.createElement('br'));
    }
})








