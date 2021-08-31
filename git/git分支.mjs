//创建分支
await $`git checkout -b b1`

//删除
await $`git checkout -d b1`

//切换
await $`git checkout b1`

//同步改动
await $`git pull origin`