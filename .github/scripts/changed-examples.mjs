import { execFileSync } from 'node:child_process'

const projects = [
  'color-modes',
  'icons-font',
  'parcel',
  'sass-js',
  'sass-js-esm',
  'starter',
  'vite',
  'vue',
  'webpack'
]

const [eventName, baseSha, headSha] = process.argv.slice(2)
const allProjects = JSON.stringify(projects)

if (
  eventName === 'workflow_dispatch' ||
  !baseSha ||
  !headSha ||
  /^0+$/.test(baseSha)
) {
  process.stdout.write(allProjects)
  process.exit()
}

const files = execFileSync(
  'git',
  ['diff', '--name-only', baseSha, headSha],
  { encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(Boolean)

const runAll = files.some(file => [
  '.github/scripts/changed-examples.mjs',
  '.github/workflows/ci.yml',
  'package.json'
].includes(file))

const changedProjects = runAll
  ? projects
  : projects.filter(project =>
      files.some(file => file === project || file.startsWith(`${project}/`))
    )

process.stdout.write(JSON.stringify(changedProjects))
