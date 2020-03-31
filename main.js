// Make your global todos array here.
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
const todosArray = [
    '1. wake up', 
    '2. go back to sleep', 
    '3. dream that you are coding', 
    '4. wake up and code', 
    '5. code some more'
    ]

// Now test it here just by console.logging a particular todo index.
console.log(todosArray[2]);

// Next: a function that prints a value given.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)
const todosPrintsOut = function(todo) {
    console.log(todo);
}



// Below, call your printTodo with a value of any kind. All it will do is console.log it,
// but soon we'll do more with it!

todosPrintsOut(1);
// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!

const todosPrintsOutAllIndividually = function() {
    for (const individual of todosArray) {
        todosPrintsOut(individual);
    }
}

//Now test it out by calling your print-everything function. It should print out each item from your todo list array.

todosPrintsOutAllIndividually();

// Now please write a function that adds an item to our todo list.
// Could add it anywhere! We'll talk about where it should be added eventually.
const addTodo = function(todo) {
    todosArray.push();
}

// Test the above function by calling it with a value,
// then calling your print-everything function and making sure it's in there.
addTodo('This is a push todo');

todosPrintsOutAllIndividually();

// Now write a function that removes an item at a given index from our todo list.
const todosRemoveItem = function(item) {
    todosArray.splice(item, 1);
}

// Test the above function by passing it an index, then calling our print-everything
// function to see if the correct thing was removed.
todosRemoveItem(1);

todosPrintsOutAllIndividually();

// Lastly: write a function that clears all items from our array.
const clearAllTodos = function() {
    todosArray.splice();
}

// Test it by calling it and then calling your print-everything function.
// Nothing should print because the array should be empty now!
clearAllTodos();
console.log(todosArray);
todosPrintsOutAllIndividually();