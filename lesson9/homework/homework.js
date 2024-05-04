const company = {
  sales: [
    { name: "Jhon", salary: 1 },
    { name: "Alice", salary: 1 },
    { name: "Bob", salary: 1 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 1 },
      { name: "Alex", salary: 1 },
      { name: "Max", salary: 1 },
    ],
    internals: [{ name: "Jack", salary: 1 }],
  },
};

function totalSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, employee) => total + employee.salary, 0);
  } else {
    let sum = 0;
    for (const subDepartment in department) {
      sum += totalSalary(department[subDepartment]);
    }
    return sum;
  }
}

function totalSales(company) {
  let total = 0;
  for (const department in company) {
    total += totalSalary(company[department]);
  }
  return total;
}

const total = totalSales(company);
console.log(total);
