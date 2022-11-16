const Intern = require("../lib/Intern.js");

test("Can instantiate Intern instance", () => {
    const int = new Intern();
    expect(typeof(int)).toBe("object");
})

test("Can set school via constructor arguments", () => {
    const testSchool = "MSU";
    const int = new Intern("mat", 0, "mat@gmail.com", testSchool);
    expect(int.school).toBe(testSchool);
})

test("Can get role via getRole() method", () => {
    const testRole = "Intern";
    const int = new Intern("mat", 0, "mat@gmail.com", "MSU");
    expect(int.getRole()).toBe(testRole);
})

test("Can get school via getSchool() method", () => {
    const testSchool = "MSU";
    const int = new Intern("mat", 0, "mat@gmail.com", testSchool);
    expect(int.getSchool()).toBe(testSchool);
})