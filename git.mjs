var name='zx-script'
var url='https://github.com/droog126/zx-script.git'
await $`git init`
await $`git add *`
await $`git commit -m "testgi"`
try {
    await $`git remote rm ${name}`
} catch (err) {
    console.log('没有这个远程仓库')
}
await $`git remote add ${name} ${url}`
await $`git push ${name} master`