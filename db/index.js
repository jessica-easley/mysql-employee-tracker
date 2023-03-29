const connection = require("./connection.js");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // View All Employees
  viewAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }
  // View All Roles
  viewAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS deparment, role.salary FROM role LEFT JOIN department on role.department_id = department.id, ,aed LEFT JOIN department on role.department_id = department.id;"
      );
  }
  // View All Departments
  viewAllDept() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }

  // Add Employee
  addEmployee() {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  // Add Role
  addRole() {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
  // Add Department
  addDept() {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  // Update Employee Role
  updateRole(employeeId, roleId) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
}

module.exports = new DB(connection);
