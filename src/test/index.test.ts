import { helloWorld } from "../index";

describe("helloWorld", () => {
    test.each([
        ["Hello, world!", "world"],
    ])(`should return "%s" given "%s"`, (want, name) => {
        const got = helloWorld(name);
        expect(got).toEqual(want);
    });
});
