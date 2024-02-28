export const elements = {
	header:{
		settingsHeading: "//h1[normalize-space()='Settings']",
	},

	tabMenu:{
		usersTab: "//div[@role='tab' and @data-test='Users']",
	},
	users:{
		addUserBtn: "//button[@id='add-user']",
		addUserModal:{
			emailInput: "//input[@id='email']",
			existingUserValidationMessage: "//p[normalize-space()='User already exists and has access in the account.']",
			backBtn: "//button[normalize-space()='< Back']",
			nextBtn: "//button[normalize-space()='Next >']/span",
			confirmBtn: "//button[normalize-space()='Confirm']/span",
			firstNameInput: "//input[@id='firstname']",
			lastNameInput: "//input[@id='lastname']",
			coownerRadio: "//p[normalize-space()='Co-Owner']",
			appsUserRadio: "//p[normalize-space()='Apps user']",
			appsCheckbox: (text) => `//span[text()='${text}']/ancestor::span/following-sibling::div//input[@type='checkbox']`,
		},	
	}
};
