/// <reference path="../_all.ts" />
var TSAMApp;
(function (TSAMApp) {
    var CreateUser = (function () {
        function CreateUser(firstName, lastName, avatar, bio) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.bio = bio;
        }
        return CreateUser;
    })();
    TSAMApp.CreateUser = CreateUser;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        User.fromCreate = function (user) {
            return new User(user.firstName + ' ' + user.lastName, user.avatar, user.bio, []);
        };
        return User;
    })();
    TSAMApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    })();
    TSAMApp.Note = Note;
    var Il = (function () {
        function Il(id, name) {
            this.id = id;
            this.name = name;
        }
        return Il;
    })();
    TSAMApp.Il = Il;
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=models.js.map