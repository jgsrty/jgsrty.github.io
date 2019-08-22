# 终止一个错误
set -e

# 构建
npm run build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'https://rtyxmd.gitee.io'

git push -f git@gitee.com:RtyXmd/rtyxmd.git master

cd -
