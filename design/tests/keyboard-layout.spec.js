// @ts-check
const { test } = require('@playwright/test')


test('make logo', async ({ page }) => {
  await page.setViewportSize({ width: 2048, height: 1152 })
  await page.goto('file://' + process.cwd() + '/keyboard-layout/keyboard-layout.html')

  await page.screenshot({ path: 'icons.png' })

  await page.locator('.icon_lang_en.icon_size_8').screenshot({ path: 'English.iconset/icon_16x16.png', omitBackground: true })
  await page.locator('.icon_lang_en.icon_size_16').screenshot({ path: 'English.iconset/icon_16x16@2x.png', omitBackground: true })
  await page.locator('.icon_lang_en.icon_size_16').screenshot({ path: 'English.iconset/icon_32x32.png', omitBackground: true })
  await page.locator('.icon_lang_en.icon_size_32').screenshot({ path: 'English.iconset/icon_32x32@2x.png', omitBackground: true })

  await page.locator('.icon_lang_ru.icon_size_8').screenshot({ path: 'Russian.iconset/icon_16x16.png', omitBackground: true })
  await page.locator('.icon_lang_ru.icon_size_16').screenshot({ path: 'Russian.iconset/icon_16x16@2x.png', omitBackground: true })
  await page.locator('.icon_lang_ru.icon_size_16').screenshot({ path: 'Russian.iconset/icon_32x32.png', omitBackground: true })
  await page.locator('.icon_lang_ru.icon_size_32').screenshot({ path: 'Russian.iconset/icon_32x32@2x.png', omitBackground: true })
})
