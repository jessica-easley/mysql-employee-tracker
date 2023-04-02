use employees;

INSERT INTO department 
(name)
VALUES ('Engineering'),
       ('Sales'),
       ('Finance'),
       ('Legal');

INSERT INTO role 
(title, salary, department_id)
VALUES ('Software Engineer', 95000,1),
       ('Lead Engineer', 125000,1),
       ('Salesperson', 60000,2),
       ('Sales Lead', 80000,2),
       ('Accountant', 85000,3),
       ('Account Manager', 100000,3),
       ('Lawyer', 150000,4),
       ('Legal Team Lead', 180000,4),

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Wick', 1, NULL),
       ('Ted', 'Logan', 2, 1),
       ('Shane', 'Falco', 3),
       ('Paul', 'Sutton', 4, 3),
       ('Shane', 'Falco', 5),
       ('Jack', 'Traven', 6, 5),
       ('John', 'Constantine', 7),
       ('Johnny', 'Utah', 8, 7);