var expect = require("chai").expect;
var titleize = require("./titleize.js");

describe("titleize", function () {
    it("should make the first letters capital", function() {
        expect(titleize("mr bill")).to.equal("Mr. Bill");
    });
    it("should add a . after the title", function() {
        expect(titleize("Mr Bill")).to.equal("Mr. Bill");
    });
});