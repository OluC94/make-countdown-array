import { makeCountdownArray } from "./makeCountdownArray";

test("Counts down from whole number", () => {
    const testCase = makeCountdownArray(5, '💥');
    const result = [5, 4, 3, 2, 1, '💥'];
    expect(testCase).toEqual(result);
})

test("Counts from 0", () => {
    const testCase = makeCountdownArray(0, '💥');
    const result = ['💥'];
    expect(testCase).toEqual(result);
})