/// <reference path="typescript-ref/references.ts" />
var Roadkill;
(function (Roadkill) {
    var Web;
    (function (Web) {
        var Dialogs = /** @class */ (function () {
            function Dialogs() {
            }
            Dialogs.alert = function (message) {
                bootbox.setDefaults({ animate: false });
                bootbox.alert(message);
            };
            Dialogs.confirm = function (title, resultFunction) {
                bootbox.setDefaults({ animate: false });
                bootbox.confirm("<b>" + title + "</b>", resultFunction);
            };
            Dialogs.openModal = function (selector) {
                $(selector).modal("show");
            };
            Dialogs.openMarkupHelpModal = function (html) {
                $("#markup-help-dialog .modal-body-container").html(html);
                $("#markup-help-dialog").modal("show");
            };
            Dialogs.openImageChooserModal = function (html) {
                $("#choose-image-dialog .modal-body-container").html(html);
                $("#choose-image-dialog").modal("show");
            };
            Dialogs.closeImageChooserModal = function () {
                $("#choose-image-dialog").modal("hide");
            };
            Dialogs.closeModal = function (selector) {
                $(selector).modal("hide");
            };
            return Dialogs;
        }());
        Web.Dialogs = Dialogs;
    })(Web = Roadkill.Web || (Roadkill.Web = {}));
})(Roadkill || (Roadkill = {}));
