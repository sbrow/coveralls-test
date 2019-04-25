"use strict";
exports.__esModule = true;
var index_1 = require("../index");
describe("helloWorld", function () {
    test.each([
        ["Hello, world!", "world"],
    ])("should return \"%s\" given \"%s\"", function (want, name) {
        var got = index_1.helloWorld(name);
        expect(got).toEqual(want);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ04sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO0tBQzdCLENBQUMsQ0FBQyxtQ0FBK0IsRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO1FBQzNDLElBQU0sR0FBRyxHQUFHLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=