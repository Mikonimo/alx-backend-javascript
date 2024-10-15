export default function createReportObject(employeesList) {
  const employeeObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return employeeObj;
}
