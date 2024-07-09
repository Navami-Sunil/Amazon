class sign{
    async signin(email,password){
       await $("//span[@id='nav-link-accountList-nav-line-1']").click();
       await $("//input[@type='email']").setValue(email);
       await $("//input[@id='continue']").waitForClickable();
       await $("//input[@id='continue']").click();
       await $("//input[@id='ap_password']").setValue(password);
       await $("//input[@id='signInSubmit']").waitForClickable();
       await $("//input[@id='signInSubmit']").click();
    }
}
module.exports=new sign();