describe('Registration of a new user', () => {
    it('Sign in button should redirect to the Login page and find Sign up button to create a new register', async () => {
        //Open URL
        await browser.url('/')
        await $('.dropdown-container > nav > a').click()
        await expect(browser).toHaveUrlContaining('/sign-in')
        await $('.pull-right > a').click()
        await expect(browser).toHaveUrlContaining('/sign-up')

        await $('.mxm-signup__form input:nth-child(1)').setValue('Samuel')
        await $('.mxm-signup__form input:nth-child(2)').setValue('Gonzalez')
        await $('.mxm-signup__form input:nth-child(3)').setValue('samuel.gonzalez@enroutesystems.com')
        await $('.mxm-signup__form input:nth-child(4)').setValue('Abcd1234')
        await $('.mxm-signup__form input:nth-child(5)').click()
        await browser.pause(1000)
        await $('.mxm-signup__button >button').click()
        await browser.pause(2000)

        const h1 = await $('.mxm-verify-account h1')
        expect(h1).toHaveText('Check Your Inbox')
    });
    it('Should Login with values of a registered account and assert that the two items of the profile avatar are displayed with texts Profile and Sign out', async () => {
        await browser.url('/')
        await $('.dropdown-container > nav > a').click()
        await expect(browser).toHaveUrlContaining('/sign-in')
        await browser.pause(2000)
        await $('input[type=email]').setValue('samuel.gonzalez@enroutesystems.com')
        await $('input[type=password]').setValue('Abcd1234')
        await browser.pause(2000)
        await $('.mxm-signup__button button').click()
        await browser.pause(2000)
        await $('.mxm-user-avatar').click()
        await browser.pause(2000)
        const profileItem = await $('.mui-dropdown__menu li:nth-child(1)')
        await expect(profileItem).toHaveText('Profile')
        const signOutItem = await $('.mui-dropdown__menu li:nth-child(3)')
        await expect(signOutItem).toHaveText('Sign out')
        await $('.mui-dropdown__menu li:nth-child(3)').click()
        await browser.pause(2000)

    })

    it('Should like a song', async () => {
        await browser.url('/')
        await $('.dropdown-container > nav > a').click()
        await expect(browser).toHaveUrlContaining('/sign-in')
        await browser.pause(2000)
        await $('input[type=email]').setValue('samuel.gonzalez@enroutesystems.com')
        await $('input[type=password]').setValue('Abcd1234')
        await browser.pause(2000)
        await $('.mxm-signup__button button').click()
        await browser.pause(2000)
        await $('.mxm-user-avatar').click()
        //// THIS CSS SELECTOR WAS NOT RECOGNIZED
        await $('.mui-toolbar__item:nth-child(2) > div > div:nth-child(1) > i ').click()
        await $('.mui-input--search-bar').click()
        await browser.pause(2000)



    });

})
