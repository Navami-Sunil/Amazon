

let close=$("//a[@id='attach-close_sideSheet-link']");
class anotherp{
    async anotherproduct(){
        await browser.pause(2000);
        if(close)
            await close.click();
            await $("//input[@id='twotabsearchtextbox']").setValue("asus");
            await $("//input[@id='nav-search-submit-button']").click();  
            await $("//span[text()='ASUS VivoBook 15 (2021) Thin and Light Laptop, Dual Core Intel Celeron N4020, 15.6-inch (39.62 cm) HD, (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W']").click();
            const handles1 = await browser.getWindowHandles();
            await browser.switchToWindow(handles1[2]);
            await $("//select[@id='quantity']").waitForClickable();
            await $("//select[@id='quantity']").click();
            await browser.pause(2000);
            await $("//select[@id='quantity']/option[@value='3']").waitForDisplayed();
            await $("//select[@id='quantity']/option[@value='3']").click();
            await $("(//input[@id='add-to-cart-button'])[2]").click();
            await browser.pause(6000);
    }
}
module.exports=new anotherp();