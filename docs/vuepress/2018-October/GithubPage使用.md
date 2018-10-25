# 使用 Github Pages

由 GitHub 网站服务，为众多 GitHub 用户提供了良好的服务器部署环境以及域名的好工具

## 开发准备

* 一个github账号，没有的要自己注册一个 [注册地址](https://github.com/)
* 会使用git工具，克隆及提交代码等简单操作，git学习请自行 [百度](https://www.baidu.com/)
* Markdown语法参考地址 [Markdown](https://www.jianshu.com/p/191d1e21f7ed)

只需要满足上述三个要求，任何人就都可以写出来一套属于自己的文档网站~

## 新建github代码仓库

![新建github代码仓库](https://upload-images.jianshu.io/upload_images/7704547-eb33dff4a8eeb625.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/749/format/webp)

## 克隆代码到本地

![克隆代码到本地](https://upload-images.jianshu.io/upload_images/7704547-37f1cc2aa4ce2421.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/951/format/webp)

## 创建入口文件

在当前文件下新建index.html

![创建入口文件](https://upload-images.jianshu.io/upload_images/7704547-de206dbc65d90f09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/467/format/webp)

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="">
</head>
<body>
    <h1>hello github</h1>
</body>
</html>
```

## 访问 Github Pages

保存并提交代码至github，提交代码后等待1分钟

浏览器访问 `http://自己的github用户名.github.io` 看到 `hello github` 到这一步 Github Page已经可以正常使用

如果不想用VuePress写文档，可以随便写点东西提交代码即可更新。