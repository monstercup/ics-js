import assert from "assert";
import ICS from "../../ics-js/ICS";
import Property from "../../ics-js/Property";
import Component from "../../ics-js/Component";

const string = "BEGIN:VCALENDAR\nEND:VCALENDAR";

describe("ICS", function() {
  describe("Property", function() {
    it("should return the Property class", function() {
      assert.equal(ICS.Property, Property);
    });
  });

  describe("Component", function() {
    it("should return the Component class", function() {
      assert.equal(ICS.Component, Component);
    });
  });

  describe("::MIME_TYPE", function() {
    it("should return 'text/calendar'", function() {
      assert.equal(ICS.MIME_TYPE, "text/calendar");
    });
  });
});