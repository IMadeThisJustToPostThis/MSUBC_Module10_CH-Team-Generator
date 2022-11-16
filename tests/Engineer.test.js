const Engineer = require("../lib/Engineer.js");

test("Can instantiate Engineer instance", () => {
    const eng = new Engineer();
    expect(typeof(eng)).toBe("object");
})

test("Can set github via constructor arguments", () => {
    const testGit = "Wecodingouthere";
    const eng = new Engineer("mat", 0, "mat@gmail.com", testGit);
    expect(eng.github).toBe(testGit);
})

test("Can get role via getRole() method", () => {
    const testRole = "Engineer";
    const eng = new Engineer("mat", 0, "mat@gmail.com", "Wecodingouthere");
    expect(eng.getRole()).toBe(testRole);
})

test("Can get github via getGithub() method", () => {
    const testGit = "Wecodingouthere";
    const eng = new Engineer("mat", 0, "mat@gmail.com", testGit);
    expect(eng.getGithub()).toBe(testGit);
})