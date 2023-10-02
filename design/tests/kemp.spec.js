// @ts-check
const { test } = require('@playwright/test')


test('make logo', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 })
  await page.goto('file://' + process.cwd() + '/kemp.html')
  await page.locator('.splash').screenshot({ path: 'kemp.png' })
})
