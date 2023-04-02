# Typescript task 3

## Task

Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.

The first part of will require that you build an interface and a type. Inside a file named interface.ts:

Create a type RowID and set it equal to number
Create an interface RowElement that contains these 3 fields:
firstName: string
lastName: string
age?: number
You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js. Copy this file into the task_3/js directory.