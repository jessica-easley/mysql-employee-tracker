use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);


-- use employees;

-- INSERT INTO department 
-- (name)
-- VALUES ('Engineering'),
--        ('Sales'),
--        ('Finance'),
--        ('Legal');

-- INSERT INTO role 
-- (title, salary, department_id)
-- VALUES ('Software Engineer', 95000,1),
--        ('Lead Engineer', 125000,1),
--        ('Salesperson', 60000,2),
--        ('Sales Lead', 80000,2),
--        ('Accountant', 85000,3),
--        ('Account Manager', 100000,3),
--        ('Lawyer', 150000,4),
--        ('Legal Team Lead', 180000,4),

-- -- INSERT INTO employee 
-- -- (first_name, last_name, role_id, manager_id)
-- -- VALUES ('John', 'Wick', 1, NULL),
-- --        ('Ted', 'Logan', 2, 1),
-- --        ('Shane', 'Falco', 3),
-- --        ('Paul', 'Sutton', 4, 3),
-- --        ('Shane', 'Falco', 5),
-- --        ('Jack', 'Traven', 6, 5),
-- --        ('John', 'Constantine', 7),
-- --        ('Johnny', 'Utah', 8, 7);