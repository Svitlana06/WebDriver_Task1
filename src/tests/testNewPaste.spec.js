describe('Pastebin site', () => {

    beforeEach(async () => {
        await browser.url('https://pastebin.com/#google_vignette');
    })

    it('Add a new paste', async () => {
        await $('#postform-text').setValue('Hello from WebDriver'); // adding a code

        var selectBox = await $('#postform-expiration')
        await browser.execute(() => {
            document.getElementById('postform-expiration').classList.remove('select2-hidden-accessible');
            document.getElementById('postform-expiration').style = "";

        });
        await selectBox.selectByAttribute('value', '10M'); // adding  a paste expiration

        await $('#postform-name').setValue('helloweb'); // adding  a paste Name / title

        await $('.-big').click();

    })

})