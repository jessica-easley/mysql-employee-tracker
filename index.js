const { prompt } = require("inquirer");
// const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

// init();

function loadPrompts() {
  prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES",
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE",
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE",
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES",
          },
          {
            name: "Add Role",
            value: "ADD_ROLE",
          },
          {
            name: "View All Departments",
            value: "VIEW_DEPARMENTS",
          },
          {
            name: "Add Department",
            value: "ADD_DEPARTMENT",
          },
          {
            name: "Quit",
            value: "QUIT",
          },
        ],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
        case "VIEW ALL EMPLOYEES":
          displayEmployees();
          break;
        case "VIEW ALL DEPARTMENTS":
          displayDepartments();
          break;
        case "VIEW ALL ROLES":
          displayRoles();
          break;
        case "ADD AN EMPLOYEE":
          addEmployee();
          break;
        case "ADD A ROLE":
          addRole();
          break;
        case "ADD A DEPARTMENT":
          addDept();
          break;
        case "UPDATE ROLE":
          updateRole();
          break;
          default:
        quit();
      }
    });
}

function displayEmployees() {
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    console.log("\n")
    console.table(employees);
  })
  .then(() => loadPrompts());
  }

function addEmployee() {
  prompt([
      {
        type: "input",
        name: "first_name",
        message: "WHAT IS THE EMPLOYEES FIRST NAME?",
      },
      {
        type: "input",
        name: "last_name",
        message: "WHAT IS THE EMPLOYEES LAST NAME?",
      },
      {
        type: "input",
        name: "role",
        message: "WHAT IS THEIR ROLE?",
      },
      {
        type: "input",
        name: "salary",
        message: "WHAT IS THEIR SALARY?",
      },
      {
        type: "input",
        name: "department",
        message: "WHAT DEPARTMENT ARE THEY IN?",
      },
      {
        type: "input",
        name: "manager",
        message: "WHOS THEIR MANAGER?",
      },
    ])
    .then((input) => {
      sql.query(
        "INSERT INTO employees SET ?",
        {
          first_name: input.first,
          last_name: input.last,
          role_title: input.role,
          salary_number: input.salary,
          department_name: input.department,
          manager_name: input.manager,
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("ADDED NEW EMPLOYEE");
            loadPrompts();
          }
        }
      );
    });
}
function updateRole() {}

function displayDepartments() {
  sql.query("SELECT * FROM departments", (err, data) => {
    console.table(data);
    loadPrompts();
  });
}

function addDept() {
  prompt([
      {
        type: "input",
        name: "departmentTitle",
        message: "WHAT IS THE TITLE OF THE NEW DEPARTMENT",
      },
    ])
    .then((input) => {
      sql.query(
        "INSERT INTO departments SET ?",
        {
          department_name: input.departmentTitle,
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("NEW DEPARTMENT ADDED");
            loadPrompts();
          }
        }
      );
    });
}

function displayRoles() {
  sql.query("SELECT * FROM roles", (err, data) => {
    console.table(data);
    loadPrompts();
  });
}

function addRole() {
  prompt([
      {
        type: "input",
        name: "role",
        message: "WHAT IS THE NEW ROLE TITLE",
      },
      {
        type: "input",
        name: "salary",
        message: "WHAT IS THE SALARY OF THE NEW ROLE",
      },
      {
        type: "input",
        name: "department",
        message: "WHAT DEPARTMENT DOES THE ROLE BELONG TO",
      },
    ])
    .then((input) => {
      sql.query(
        "INSERT INTO roles SET ?",
        {
          role_title: input.role,
          salary_number: input.salary,
          department_name: input.department,
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("NEW ROLE ADDED");
            loadPrompts();
          }
        }
      );
    });
}
// // Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       // MySQL username,
//       user: 'root',
//       // MySQL password
//       password: '',
//       database: 'employees'
//     },
//     console.log(`Connected to the employees database.`)
//   );

// Exit the application
// quit();

function quit() {
  console.log("Goodbye!");
  process.exit();
}
