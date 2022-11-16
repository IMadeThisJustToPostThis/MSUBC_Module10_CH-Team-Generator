const Manager = require("../lib/Manager.js");

test("Can instantiate Manager instance", () => {
    const man = new Manager();
    expect(typeof(man)).toBe("object");
})

test("Can set school via constructor arguments", () => {
    const testOffice = "A-B";
    const man = new Manager("mat", 0, "mat@gmail.com", testOffice);
    expect(man.offNum).toBe(testOffice);
})

test("Can get role via getRole() method", () => {
    const testRole = "Manager";
    const man = new Manager("mat", 0, "mat@gmail.com", "A-B");
    expect(man.getRole()).toBe(testRole);
})

test("Can get office number via getOfficeNumber() method", () => {
    const testOffice = "MSU";
    const man = new Manager("mat", 0, "mat@gmail.com", testOffice);
    expect(man.getOfficeNumber()).toBe(testOffice);
})