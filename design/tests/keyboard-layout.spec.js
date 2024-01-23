// @ts-check
const { test } = require('@playwright/test')
const { execSync } = require('node:child_process')


test('make keyboard layout icons', async ({ page }) => {
  await page.setViewportSize({ width: 2048, height: 1152 })
  await page.goto('file://' + process.cwd() + '/keyboard-layout/keyboard-layout.html')

  await page.screenshot({ path: 'icons.png' })

  async function createIcon(lang, sourceSize, resultSize) {
    const path = `keyboard-layout/${lang}.iconset/icon_${resultSize}.png`
    await page.locator(`.icon_lang_${lang}.icon_size_${sourceSize}`).screenshot({ path, omitBackground: true })
    execSync(`convert ${path} -alpha on -channel A -fx '1-(u.r+u.g+u.b)/3' ${path}`)
    // execSync(`convert ${path} -negate ${path.replace('.png', '_dark.png')}`)
  }

  async function createIcons(lang, size) {
    await createIcon(lang, size / 2, `${size}x${size}`)
    await createIcon(lang, size, `${size}x${size}@2x`)
  }

  async function createIcns(lang) {
    await createIcons(lang, 16)
    await createIcons(lang, 32)
    execSync(`iconutil -c icns keyboard-layout/${lang}.iconset`)
  }

  await createIcns('en')
  await createIcns('ru')
})
