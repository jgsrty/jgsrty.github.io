set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'https://rtyxmd.gitee.io'

git push -f git@gitee.com:RtyXmd/rtyxmd.git master

cd -
