#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreen.bold("Welcome To Our TO-DO Application"));
let todos: string[] = ["NOUMAN", "JAMIL"];

async function createTodo() {
    do{
    let ans = await inquirer.prompt([{
        type: "list",
        name: "select",
        message: "Select an Operation",
        choices: ["Add", "Update", "View", "Delete"]
    }]);

    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "Add Task Items In Your List:",
        }]);
        todos.push(addTodo.todo);
        console.log(chalk.bgBlueBright.bold(todos));
    }

    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt([{
            name: "updatetodo",
            type: "list",
            message: "Select the task to update:",
            choices: todos
        }]);
        let updatedIndex = todos.indexOf(updateTodo.updatetodo);
        let newTodo = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "Enter the Updated task:",
        }]);
        todos[updatedIndex] = newTodo.todo;
        console.log(chalk.bgBlueBright.bold(todos));
    }

    if (ans.select === "View") {
        console.log(chalk.green.bold("****TO DO LIST****"));
        console.log(todos);
        console.log(chalk.green.bold("***Thank You***"));
    }

    if (ans.select === "Delete") {
        let delTodo = await inquirer.prompt([{
            name: "del",
            type: "list",
            message: "Select the task to delete:",
            choices: todos
        }]);
        todos = todos.filter(value => value !== delTodo.del);
        console.log(chalk.bgBlue.bold(todos));
    }
      } while(true)
}

createTodo();