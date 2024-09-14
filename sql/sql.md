
7. SQL Query
Task: Given the following table schema:

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

Write an SQL query to:
Retrieve the names of employees who have a salary greater than $50,000.
Order the results by salary in descending order.

Answer : 

SELECT name
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;
