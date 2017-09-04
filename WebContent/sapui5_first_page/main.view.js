sap.ui.jsview("sapui5_first_page.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5_first_page.main
	*/ 
	getControllerName : function() {
		return "sapui5_first_page.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5_first_page.main
	*/ 
	createContent : function(oController) {
		var oButton = new sap.m.Button({
			id : "id", // sap.ui.core.ID
			busy : false, // boolean
			busyIndicatorDelay : 1000, // int
			visible : true, // boolean
			fieldGroupIds : [], // string[], since 1.31
			text : "asd", // string
			type : sap.m.ButtonType.Default, // sap.m.ButtonType
			width : undefined, // sap.ui.core.CSSSize
			validateFieldGroup : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			tap : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			press : function(){
				oController.handleButtonClicked();
			}
		});
		
		return oButton;
	}

});
