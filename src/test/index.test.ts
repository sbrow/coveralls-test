import rewire from "rewire";

import { helloWorld } from "../index";
const goodbyeWorld = rewire("../index").__get__("goodbyeWorld");

describe("index", () => {
    describe("helloWorld", () => {
        test.each([
            ["Hello, world!", "world"],
        ])(`should return "%s" given "%s"`, (want, name) => {
            const got = helloWorld(name);
            expect(got).toEqual(want);
        });
    });
    describe("goodbyeWorld", () => {
        test.each([
            ["Goodbye, world!", "world"],
        ])(`should return "%s" given "%s"`, (want, name) => {
            const got = goodbyeWorld(name);
            expect(got).toEqual(want);
        });
    });
});
