// 此文件为generator的入口文件
// 需要导出一个来自Yeoman Generator 的类型
// Yeoman Generato 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // Yeoman 在询问用户环境会自动调用此方法
  // 在此方法中可以调用父类的prompt()方法发出对用户的命令行询问
  prompting () {
    return this.prompt([
      {
        type: 'input', // 类型,表示使用用户输入的方式接收信息
        name: 'name',
        message: 'your project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ])
    .then(answers => {
      this.answers = answers
    })
  }

  writing () {
    // Yeoman 自动在生成文件阶段调用此方法
    // 我们在这里尝试王项目目录中写入文件
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      '.editorconfig',
      '.eslintrc.js',
      '.gitignore',
      'package.json',
      'README.md',
      '.eslintignore',
      '.postcssrc.js',
      'index.html',
      'package-lock.json',
      'config/dev.env.js',
      'config/index.js',
      'config/prod.env.js',
      'build/build.js',
      'build/check-versions.js',
      'build/utils.js',
      'build/logo.png',
      'build/vue-loader.conf.js',
      'build/webpack.base.conf.js',
      'build/webpack.dev.conf.js',
      'build/webpack.prod.conf.js',
      'static/.gitkeep',
      'src/App.vue',
      'src/main.js',
      'src/router/index.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue'
    ]

    templates.forEach(item => {
      // item 为每个文件的路劲 
      // asdfsd
      this.fs.copyTpl(
        this.templatePath(item), // 模板文件路径
        this.destinationPath(item), // 输出目标路径
        this.answers // 模板数据上下文
      )
    })
  }
}