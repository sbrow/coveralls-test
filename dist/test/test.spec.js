"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
/* tslint:disable only-arrow-functions */
var assert = __importStar(require("assert"));
var index = __importStar(require("../index"));
describe("helloWorld", function () {
    var tests = [
        { arg: "world", want: "Hello, world!" },
    ];
    var _loop_1 = function (test_1) {
        it("should return \"" + test_1.arg + "\" given \"" + test_1.want + "\"", function () {
            var got = index.helloWorld(test_1.arg);
            assert.deepEqual(got, test_1.want);
        });
    };
    for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
        var test_1 = tests_1[_i];
        _loop_1(test_1);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvdGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlDQUF5QztBQUN6Qyw2Q0FBaUM7QUFDakMsOENBQWtDO0FBRWxDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsSUFBTSxLQUFLLEdBQUc7UUFDVixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtLQUMxQyxDQUFDOzRCQUNTLE1BQUk7UUFDWCxFQUFFLENBQUMscUJBQWtCLE1BQUksQ0FBQyxHQUFHLG1CQUFZLE1BQUksQ0FBQyxJQUFJLE9BQUcsRUFBRTtZQUNuRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7O0lBSlAsS0FBbUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUs7UUFBbkIsSUFBTSxNQUFJLGNBQUE7Z0JBQUosTUFBSTtLQUtkO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==