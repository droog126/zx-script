var name='zx-script'
var url='https://github.com/droog126/zx-script.git'
await $`git init`
await $`git add *`
await $`git commit -m "testgi"`
await $`git remote rm ${name}`
await $`git remote add ${name} ${url}`
await $`git push ${name} master`