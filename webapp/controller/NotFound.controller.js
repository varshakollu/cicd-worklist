sap.ui.define([
		"automate/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("automate.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);