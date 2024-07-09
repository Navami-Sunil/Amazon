class cart{
    async addcart(){
        await $("//span[text()='Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display']").click();
       
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(1000);
        await $("//img[@alt='black']").waitForClickable();
        await $("//img[@alt='black']").click();
        await $("(//input[@id='add-to-cart-button'])[2]").waitForClickable();
        await $("(//input[@id='add-to-cart-button'])[2]").click();
    }
}
module.exports=new cart();