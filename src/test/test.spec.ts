/* tslint:disable only-arrow-functions */
import * as assert from "assert";
import * as index from "../index";

describe("helloWorld", function() {
    const tests = [
        { arg: "world", want: "Hello, world!" },
    ];
    for (const test of tests) {
        it(`should return "${test.arg}" given "${test.want}"`, function() {
            const got = index.helloWorld(test.arg);
            assert.deepEqual(got, test.want);
        });
    }
});
