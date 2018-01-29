jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"automate/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"automate/test/integration/pages/Worklist",
		"automate/test/integration/pages/Object",
		"automate/test/integration/pages/NotFound",
		"automate/test/integration/pages/Browser",
		"automate/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "automate.view."
	});

	sap.ui.require([
		"automate/test/integration/WorklistJourney",
		"automate/test/integration/ObjectJourney",
		"automate/test/integration/NavigationJourney",
		"automate/test/integration/NotFoundJourney",
		"automate/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});