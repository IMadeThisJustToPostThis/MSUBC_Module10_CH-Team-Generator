const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const testName = "Mat";
    const emp = new Employee(testName);
    expect(emp.name).toBe(testName);
})

test("Can set ID via constructor arguments", () => {
    const testID = 57;
    const emp = new Employee("mat", testID);
    expect(emp.id).toBe(testID);
})

test("Can set email via constructor arguments", () => {
    const testEmail = "mat@gmail.com";
    const emp = new Employee("mat", 0, testEmail);
    expect(emp.email).toBe(testEmail);
})

test("Can get name via getName() method", () => {
    const testName = "mat";
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
})

test("Can get ID via getName() method", () => {
    const testID = 57;
    const emp = new Employee("mat", testID);
    expect(emp.getId()).toBe(testID);
})

test("Can get email via getName() method", () => {
    const testEmail = "mat@gmail.com";
    const emp = new Employee(testEmail);
    expect(emp.getName()).toBe(testEmail);
})