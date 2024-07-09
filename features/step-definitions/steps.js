const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const sig=require("../pageobjects/signin.page");
const mob=require("../pageobjects/mobiles.page");
const cartt=require("../pageobjects/cart.page");
const anotherpro=require("../pageobjects/anotherp.page");
Given(/^I am on the home page$/, async () => {
	await browser.url("https://www.amazon.in/");
    await browser.maximizeWindow();
});

When(/^I sign in using (.*),(.*)$/,async  (email,password) => {
    // const currentDate = new Date().toISOString().replace(/[^\d]/g, ''); // Get current date and time as a numeric string
    // emailWithDateTime = `${email}_${currentDate}@gmail.com`;
    // await sig.signin(email,password);
    await browser.pause(2000);
});

When(/^I click on mobiles$/, async () => {
	await mob.mobiles();
});

When(/^select a mobile,change colour,add to cart$/, async () => {
	await cartt.addcart();
});

When(/^select another product,add to cart$/,async  () => {
	await anotherpro.anotherproduct();
});

Then(/^I should see my cart with selected items$/, async () => {
	return true;
});

