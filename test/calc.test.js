import { expect } from "chai";
import { add, divide, multiply, subtract } from "../dist/calculator.js";

describe("test add function", () => {
    describe("test adding 2 positive numbers", () => {
        it("should return 11", () => {
            expect(add(5, 6)).to.equal(11);
        })
    })
    describe("test adding positive and negative number", () => {
        it("should return -5", () => {
            expect(add(-8, 3)).to.equal(-5);
        })
    })
    describe("test adding a zero", () => {
        it("should return 3", () => {
            expect(add(0, 3)).to.equal(3);
        })
    })
    describe("test adding floating number", () => {
        it("should return 11.9", () => {
            expect(add(6.7, 5.2)).to.be.closeTo(11.9, 0.001);
        })
    })
})


describe("test subtract function", () => {
    describe("test 2 positive numbers", () => {
        it("should return 3", () => {
            expect(subtract(6, 3)).to.equal(3);
        })
    })
    describe("test subtracting positive from negative number", () => {
        it("should return -7", () => {
            expect(subtract(-5, 2)).to.equal(-7);
        })
    })
    describe("test subtracting zero from a number", () => {
        it("should return 8", () => {
            expect(subtract(8, 0)).to.equal(8);
        })
    })
    describe("test subtracting a number from zero", () => {
        it("should return -8", () => {
            expect(subtract(0, 8)).to.equal(-8);
        })
    })
    describe("test subtracting floating numbers", () => {
        it("should return 8.1", () => {
            expect(subtract(11.5, 3.4)).to.be.closeTo(8.1, 0.001);
        })
    })
})


describe("test multiply function", () => {
    describe("test multiply 2 positive numbers", () => {
        it("should return 18", () => {
            expect(multiply(6, 3)).to.equal(18);
        })
    })
    describe("test multiply positive and negative number", () => {
        it("should return -18", () => {
            expect(multiply(6, -3)).to.equal(-18);
        })
    })
    describe("test multiply number by zero", () => {
        it("should return 0", () => {
            expect(multiply(7, 0)).to.equal(0);
        })
    })
    describe("test multiply zero by number", () => {
        it("should return 0", () => {
            expect(multiply(0, 7)).to.equal(0);
        })
    })
    describe("test multiply number by one", () => {
        it("should return 5", () => {
            expect(multiply(5, 1)).to.equal(5);
        })
    })
})

describe("test division function", () => {
    describe("test divide positive by positive number", () => {
        it("should return 4", () => {
            expect(divide(8, 2)).to.equal(4);
        })
    })
    describe("test divide positive by negative number", () => {
        it("should return -2", () => {
            expect(divide(6, -3)).to.equal(-2);
        })
    })
    describe("test divide number by one", () => {
        it("should return 9", () => {
            expect(divide(9, 1)).to.equal(9);
        })
    })
    describe("test divide zero by number", () => {
        it("should return 0", () => {
            expect(divide(0, 5)).to.equal(0);
        })
    })
    describe("test divide number by zero", () => {
        it("should throw error", () => {
            expect(() => divide(9, 0) ).to.throw("Can not divide by zero");
        })
    })
    describe("test divide zero by zero", () => {
        it("should throw error", () => {
            expect(() => divide(0, 0)).to.throw("Can not divide by zero");
        })
    })
})