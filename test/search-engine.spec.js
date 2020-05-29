var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const charFilter = require("../search-engine");
const twoWords = require("../search-engine");
const threeWords = require("../search-engine")
const fourWords = require("../search-engine")


describe('search engine', function() {
    it('charFilter must be a function', function () {
        charFilter();
    });
});



describe('two words', function() {
    it('twoWords must be a function', function () {
        twoWords();
    });
    /*it("For first word, funcition returns suggestion for next word", function() {
        let result = twoWords( ... );
        expect(twoWords).to.eq("...");
    });
    */
});



describe('three words', function() {
    it('threeWords must be a function', function () {
        threeWords();
    });
    /*it("For second word, funcition returns suggestion for next word", function() {
        let result = threeWords(...);
        expect(threeWords[1]).to.eq("...");
    });
    */
});



describe('four words', function() {
    it('fourWords must be a function', function () {
        fourWords();
    });
    /*it("For third or more words, function must not return suggestion", function() {
        let result = fourWords(...);
        assert.strictEqual(result, undefined);
    });
    */
});
