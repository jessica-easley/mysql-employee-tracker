use employees;

INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title,salary, department_id)
VALUES ("Software Engineer", 85000,1),
       ("Lead Engineer", 125000,1),
       ("Salesperson", ,2),
       ("Sales Lead", ,2),
       ("Accountant", ,3),
       ("Account Manager", ,3),
       ("Lawyer", ,4),
       ("Legal Team Lead", ,4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John". "Wick", 1, NULL),
       ("Ted". "Logan", 2, 1),
       ("Shane". "Falco", 3, NULL),
       ("Paul". "Sutton", 4, 3),
       ("Shane". "Falco", 5, NULL),
       ("Jack". "Traven", 6, 5),
       ("John". "Constantine", 7, NULL),
       ("Johnny". "Utah", 8, 7);