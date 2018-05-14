/* global Item cuid */

'use strict';

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const hideCheckedItems = false;
      
  const searchTerm = '';

  const findByID = function(id) {
    return store.items.find(function(each){return each.id === id;});
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
      shoppingList.render();
    }
    catch(err) {
      console.log(err.message);
    }
  };

  const findAndToggleChecked = function() {
    store.hideCheckedItems = !store.hideCheckedItems;
  };

  const findAndUpdate = function(id, newName) {
    try {
      Item.validateName(newName);
      let foundItem = this.findByID(id);
      foundItem.name = newName;
    }
    catch(err) {
      console.log('Cannot update name: ' + err.message);
    }
  };

  const findAndDelete = function(id) {
    const index = store.items.findIndex(function(item){return item.id === id;});
    store.items.splice(index, 1);
  };

  const setSearchTerm = function(val) {
    store.searchTerm = val;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID,
    setSearchTerm,
    addItem,
    findAndToggleChecked,
    findAndUpdate,
    findAndDelete
  };
}());
