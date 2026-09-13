let nameInput = document.getElementById("name");
let salaryInput = document.getElementById("salary");
let departmentInput = document.getElementById("department");

let addEmployeeBtn = document.getElementById("addEmployeeBtn");
let viewEmployeesBtn = document.getElementById("viewEmployeesBtn");

// Get previously saved employees
let employees = JSON.parse(localStorage.getItem("employees")) || [];

addEmployeeBtn.onclick = function () {

    let name = nameInput.value.trim();

    let namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(name) || name.length < 2) {
        alert("Please enter a valid name.");
        return;
    }

    let salary = Number(salaryInput.value);

    if (
        !Number.isFinite(salary) ||
        salary < 10000 ||
        salary > 1000000
    ) {
        alert("Please enter a valid salary.");
        return;
    }

    let department = departmentInput.value.trim();

    if (department.length < 2) {
        alert("Please enter a valid department name.");
        return;
    }

    let employee = {
        name: name,
        salary: salary,
        department: department
    };

    employees.push(employee);

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    console.log("Employee Added:", employee);
    alert("Employee data successfully added!");
};