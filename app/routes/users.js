import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        createUser(name, email) {
            let user = this.get("store").createRecord("user", {
                name: name,
                email: email
            });
            user.save().then(response => {
                alert("Create user");
            });
        }
    }
});
