// @ts-check
const { test } = require('@playwright/test')


test('make logo', async ({ page }) => {
  await page.setViewportSize({ width: 2048, height: 1152 })
  await page.goto('file://' + process.cwd() + '/logo.html')
  await page.locator('.logo').screenshot({ path: 'logo.png' })
})
