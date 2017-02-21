var ObjectId = require("../src/objectId");
var assert = require("assert");

describe("ObjectId.toHexString()", function () {
    it("Should return a valid objectId.", function () {
        var objectId = ObjectId.toHexString();
      	
      	console.dir(objectId);

        assert.ok(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(objectId), objectId);
    });
});