import { describe, it } from 'node:test'

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(path.dirname(import.meta.url)),
  module = (await Promise.all(
    (await fs.readdir(__dirname, { withFileTypes: true }))
      .filter((dirent) => dirent.isDirectory() && dirent.name !== 'node_modules')
      .map(({ name }) => name)
      .map(async (dir) =>
        Promise.all((await fs.readdir(dir)).map((filename) =>
          fs.stat(path.join(dir, filename)).then(({ mtime }) => ({ dir, filename, mtime }))
        )))
  ))
    .flat()
    .filter(({ filename }) => filename !== 'test.js')
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())[0]

import(path.join(__dirname, module.dir, module.filename)).then(({ default: implementation }) => {
  import(path.join(__dirname, module.dir, 'test.js')).then(({ default: tests }) => {
    describe(
      `→ ${module.dir} / ${module.filename}`,
      () => tests(it, implementation))
  })
})
