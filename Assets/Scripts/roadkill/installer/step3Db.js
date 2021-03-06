/// <reference path="../typescript-ref/installerconstants.ts" />
var Roadkill;
(function (Roadkill) {
    var Web;
    (function (Web) {
        var Installer;
        (function (Installer) {
            var Step3DbMessages = /** @class */ (function () {
                function Step3DbMessages() {
                }
                return Step3DbMessages;
            }());
            Installer.Step3DbMessages = Step3DbMessages;
            var Step3Db = /** @class */ (function () {
                function Step3Db(wizard, messages) {
                    this._wizard = wizard;
                    this._messages = messages;
                    // Set the page number in the header
                    this._wizard.updateNavigation(3);
                }
                Step3Db.prototype.configureValidation = function () {
                    // Form validation
                    var validationRules = {
                        EditorRoleName: {
                            required: true
                        },
                        AdminRoleName: {
                            required: true
                        },
                        AdminEmail: {
                            required: true
                        },
                        AdminPassword: {
                            required: true
                        },
                        password2: {
                            required: true,
                            equalTo: "#AdminPassword",
                            messages: {
                                equalTo: this._messages.passwordsDontMatch
                            }
                        }
                    };
                    var validation = new Roadkill.Web.Validation();
                    validation.Configure("#step3-form", validationRules);
                    var rules = $("#password2").rules();
                    rules.messages.equalTo = "The passwords don't match";
                    $("#password2").rules("add", rules);
                };
                return Step3Db;
            }());
            Installer.Step3Db = Step3Db;
        })(Installer = Web.Installer || (Web.Installer = {}));
    })(Web = Roadkill.Web || (Roadkill.Web = {}));
})(Roadkill || (Roadkill = {}));
