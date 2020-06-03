describe('my awesome website', () => {
  it('should do some chai assertions', async () => {
    browser.maximizeWindow()
    await browser.url('/')
    const title = await browser.getTitle()

    expect(title).toEqual('WordPress Local – Your slogan goes here')
  })
})
