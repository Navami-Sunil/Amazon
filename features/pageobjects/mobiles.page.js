
class mob{
    
    async mobiles(){
        await $("//a[text()='Mobiles']").waitForClickable();
        await $("//a[text()='Mobiles']").click();
        await $("(//span[text()='Redmi'])[2]").waitForClickable();
        await $("(//span[text()='Redmi'])[2]").click();
       
      
    }
}
module.exports=new mob();