const prompt = require("prompt-sync")();

let todolist = [];
let userinput = 0;

while (userinput !== 4) {

    console.log("USER'S CHOICE");
    console.log("Press 1 to add an item");
    console.log("Press 2 to see the list");
    console.log("Press 3 to delete an item");
    console.log("Press 4 to exit");

    userinput = Number(prompt("Enter a number: "));

    if (isNaN(userinput) || userinput < 1 || userinput > 4) {
        console.log("Enter a valid number");
        continue;
    }

    if (userinput === 1) {

        let item = prompt("What do you want to add to today's to-do list? ");
        todolist.push(item);
        console.log("Item added successfully.");

    }
    else if (userinput === 2) {

        if (todolist.length === 0) {
            console.log("Your to-do list is empty.");
        } else {
            console.log("Your To-Do List:");
            for (let i = 0; i < todolist.length; i++) {
                console.log((i + 1) + ". " + todolist[i]);
            }
        }

    }
    else if (userinput === 3) {

        if (todolist.length === 0) {
            console.log("Nothing to delete.");
            continue;
        }

        console.log("Your To-Do List:");
        for (let i = 0; i < todolist.length; i++) {
            console.log((i + 1) + ". " + todolist[i]);
        }

        let itemnumber = Number(prompt("Enter the item number to delete: "));

        if (isNaN(itemnumber) || itemnumber < 1 || itemnumber > todolist.length) {
            console.log("Invalid item number.");
        } else {
            todolist.splice(itemnumber - 1, 1);
            console.log("Item deleted successfully.");
        }

    }
    else if (userinput === 4) {
        console.log("Thank you!");
        break;
    }

    console.log();
}