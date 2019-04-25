"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var rewire_1 = __importDefault(require("rewire"));
var index_1 = require("../index");
var goodbyeWorld = rewire_1["default"]("../index").__get__("goodbyeWorld");
describe("index", function () {
    describe("helloWorld", function () {
        test.each([
            ["Hello, world!", "world"],
        ])("should return \"%s\" given \"%s\"", function (want, name) {
            var got = index_1.helloWorld(name);
            expect(got).toEqual(want);
        });
    });
    describe("goodbyeWorld", function () {
        test.each([
            ["Goodbye, world!", "world"],
        ])("should return \"%s\" given \"%s\"", function (want, name) {
            var got = goodbyeWorld(name);
            expect(got).toEqual(want);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFFNUIsa0NBQXNDO0FBQ3RDLElBQU0sWUFBWSxHQUFHLG1CQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRWhFLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDZCxRQUFRLENBQUMsWUFBWSxFQUFFO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDTixDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7U0FDN0IsQ0FBQyxDQUFDLG1DQUErQixFQUFFLFVBQUMsSUFBSSxFQUFFLElBQUk7WUFDM0MsSUFBTSxHQUFHLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDTixDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztTQUMvQixDQUFDLENBQUMsbUNBQStCLEVBQUUsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUMzQyxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==