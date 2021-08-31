const name='zx-script'
const url='https://github.com/droog126/zx-script'
await $`git init`
await $`git add .`
try {
    await $`git commit -m "first commit"`
} catch (err) {
    console.log('你没有做出更改')
}

try {
    await $`git remote rm ${name}`
} catch (err) {
    console.log('没有这个远程仓库')
}
await $`git remote add ${name} ${url}`
await $`git push ${name} master`