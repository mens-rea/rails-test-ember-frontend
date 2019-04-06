//app/adapters/application.js
import DS from "ember-data";
export default DS.JSONAPIAdapter.extend({
    host: "https://limitless-citadel-80415.herokuapp.com",
    dataType: "json"
});