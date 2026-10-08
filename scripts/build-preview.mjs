import { execFileSync } from 'node:child_process'
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = join(rootDir, '_site')
const temporaryDir = mkdtempSync(join(tmpdir(), 'bootstrap-examples-'))
const installDependencies = process.argv.includes('--install')
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const projects = [
  'color-modes',
  'icons-font',
  'parcel',
  'sass-js',
  'sass-js-esm',
  'vite',
  'vue',
  'webpack'
]

function run(project, args) {
  execFileSync(npm, args, {
    cwd: join(rootDir, project),
    env: {
      ...process.env,
      FORCE_COLOR: '2'
    },
    stdio: 'inherit'
  })
}

function copy(source, destination) {
  const absoluteDestination = join(outputDir, destination)

  mkdirSync(dirname(absoluteDestination), { recursive: true })
  cpSync(join(rootDir, source), absoluteDestination, { recursive: true })
}

function copyProjectFiles(project, files) {
  for (const file of files) {
    copy(join(project, file), join(project, basename(file)))
  }
}

function writeIndex() {
  const links = ['starter', ...projects]
    .map(project => `        <li><a href="./${project}/">${project}</a></li>`)
    .join('\n')

  writeFileSync(join(outputDir, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap examples preview</title>
    <style>
      body {
        max-width: 44rem;
        margin: 4rem auto;
        padding: 0 1.5rem;
        font: 1rem/1.5 system-ui, sans-serif;
      }

      a {
        color: #6f42c1;
      }

      li + li {
        margin-top: .5rem;
      }
    </style>
  </head>
  <body>
    <h1>Bootstrap examples preview</h1>
    <p>Select an example to review this pull request.</p>
    <ul>
${links}
    </ul>
  </body>
</html>
`)
}

try {
  rmSync(outputDir, { force: true, recursive: true })
  mkdirSync(outputDir, { recursive: true })

  if (installDependencies) {
    for (const project of projects) {
      run(project, ['ci'])
    }
  }

  for (const project of ['color-modes', 'icons-font', 'sass-js', 'sass-js-esm']) {
    run(project, ['run', 'build'])
  }

  const parcelOutput = join(temporaryDir, 'parcel')
  run('parcel', [
    'exec',
    '--',
    'parcel',
    'build',
    'src/index.html',
    '--public-url',
    './',
    '--dist-dir',
    parcelOutput
  ])

  const viteOutput = join(temporaryDir, 'vite')
  run('vite', [
    'exec',
    '--',
    'vite',
    'build',
    '--base=./',
    `--outDir=${viteOutput}`,
    '--emptyOutDir'
  ])

  const vueOutput = join(temporaryDir, 'vue')
  run('vue', [
    'exec',
    '--',
    'vite',
    'build',
    '--base=./',
    `--outDir=${vueOutput}`,
    '--emptyOutDir'
  ])

  run('webpack', ['run', 'build'])

  copyProjectFiles('starter', ['index.html', 'styles.css', 'main.js'])
  copyProjectFiles('color-modes', ['index.html', 'css', 'js'])
  copyProjectFiles('icons-font', ['index.html', 'css'])
  copyProjectFiles('sass-js', ['index.html', 'css', 'js'])
  copyProjectFiles('sass-js-esm', ['index.html', 'css', 'js'])

  copy(
    'icons-font/node_modules/bootstrap-icons/font/fonts',
    'icons-font/node_modules/bootstrap-icons/font/fonts'
  )
  copy(
    'sass-js/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'sass-js/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
  )

  cpSync(parcelOutput, join(outputDir, 'parcel'), { recursive: true })
  cpSync(viteOutput, join(outputDir, 'vite'), { recursive: true })
  cpSync(vueOutput, join(outputDir, 'vue'), { recursive: true })
  copy('webpack/dist', 'webpack')

  writeIndex()
} finally {
  rmSync(temporaryDir, { force: true, recursive: true })
}
