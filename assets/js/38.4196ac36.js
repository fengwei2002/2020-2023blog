(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{521:function(t,a,o){"use strict";o.r(a);var s=o(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("ul",[o("li",[o("strong",[t._v("获取第三方包的工具： "),o("code",[t._v("goinstall")])])])]),t._v(" "),o("p",[t._v("goinstall 是将源码下载到  "),o("code",[t._v("$GOROOT/src/pkg/")]),t._v("  而不是  "),o("code",[t._v("$GOPATH/src/")]),t._v(" ，此时还没有  "),o("code",[t._v("$GOPATH")]),t._v(" 。")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("go get")]),t._v("  和 go 1 一起发布的包管理的工具")])])]),t._v(" "),o("p",[t._v("定义了新的  "),o("code",[t._v("$GOPATH")]),t._v(" , goroot 现在只存放内置的包，用这个规则来区分第三方包")]),t._v(" "),o("p",[t._v("go 在编译的时候，先寻找 goroot 下是否存在包，找不到就去 gopath 下面找")]),t._v(" "),o("p",[t._v("但是不存在包的版本管理机制，因为这个问题，所以出现了 为每一个项目都安排一个新的文件夹作为 gopath 的写法"),o("br"),t._v("\n在开发某一个项目之前，将系统的 gopath 指向该文件的专属文件夹，当想开发另一个项目的时候，将系统的 gopath 再次修改为其他文件夹")]),t._v(" "),o("p",[t._v("所以会有一个  "),o("code",[t._v("env.sh")]),t._v(" ，每次开发之前执行一遍这个专属项目的专属脚本")]),t._v(" "),o("p",[t._v("gopath 和 go get 一起开创了 golang 的包管理")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("gopkg.in")])])])]),t._v(" "),o("div",{staticClass:"language-go extra-class"},[o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/yaml.v2​"')]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/ini.v1​"')]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/redis.v5​"')]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/jcmturner/aescts.v1​"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),o("p",[t._v("它的先进之处在于，从包的名字就可以得知我用的是这个包的哪个版本 (根据末尾的.vxxxx)，且如果我愿意，我可以在同一份代码引用同一个包的多个版本，而此前这是不可能的：")]),t._v(" "),o("div",{staticClass:"language-go extra-class"},[o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tyamlv1 "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/yaml.v1​"')]),t._v("\n\tyamlv2 "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/yaml.v2​"')]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/yaml.v3​"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yamlv1"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yamlv2"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yaml"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"konng0120-02-golang-package-history-2022-04-27-21-01-35","data-src":"https://raw.githubusercontent.com/psychonaut1f/a/main/img/konng0120-02-golang-package-history-2022-04-27-21-01-35.png",loading:"lazy"}})]),t._v(" "),o("p",[t._v("也就是对每一个 gopkg.in 转换为一个 git 仓库的具体分支中的代码，进行了一个 url 的转换")]),t._v(" "),o("p",[t._v("缺点：")]),t._v(" "),o("ol",[o("li",[t._v("违背了取中心化：所有的包又变成了 gopkg.in 下面的内容")]),t._v(" "),o("li",[t._v("不是零入侵代码的，不想用 gopkg 的时候，需要修改代码")])]),t._v(" "),o("p",[t._v("但是 gopkg.in 提供了一个想法， 使用不同的 import 路径来引入一个包的多个版本")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("vendor")])])])]),t._v(" "),o("p",[t._v("因为想要使用开发项目的话， gopath 就需要有很多目录，而不是一个统一的目录， 所以打包发送项目的时候，经常会将 gopath 文件夹一起放在项目代码中，这样就导致了整个项目文件变的非常大")]),t._v(" "),o("p",[t._v("但是这是一种简单有效的方法")]),t._v(" "),o("p",[t._v("go 1.5 version 发布了 vendor 目录写法：")]),t._v(" "),o("ol",[o("li",[t._v("把项目中的 vendor 文件夹作为这一个项目专属的虚拟 gopath 文件夹")]),t._v(" "),o("li",[t._v("go build 的寻包路径依次是 goroot vendor gopath")])]),t._v(" "),o("p",[t._v("也就是做了一次抽离，尽量的不去修改 gopath")]),t._v(" "),o("p",[t._v("但是 go 官方没有提供一种将依赖包拷贝到 vendor 的工具，只是提供了对 vendor 机制的支持")]),t._v(" "),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"konng0120-02-golang-package-history-2022-04-27-21-19-02","data-src":"https://raw.githubusercontent.com/psychonaut1f/a/main/img/konng0120-02-golang-package-history-2022-04-27-21-19-02.png",loading:"lazy"}})]),t._v(" "),o("p",[t._v("这些包可以帮忙将依赖包拷贝到 vendor 中，同时也支持了按照 git 中的数据作为版本控制的写法 (commit id，branch， tags)")]),t._v(" "),o("p",[t._v("所以自从这个事情之后 git 基本就变成了 golang 的默认版本控制工具")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("dep")])])])]),t._v(" "),o("p",[t._v("全称是 golang/dep")]),t._v(" "),o("p",[t._v("使用方式：")]),t._v(" "),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"konng0120-02-golang-package-history-2022-04-27-21-23-40","data-src":"https://raw.githubusercontent.com/psychonaut1f/a/main/img/konng0120-02-golang-package-history-2022-04-27-21-23-40.png",loading:"lazy"}})]),t._v(" "),o("p",[t._v("这是一个来自官方的 golang 包管理解决方案")]),t._v(" "),o("p",[t._v("终结了多种不同文件包管理的方案，但是没有解决 vendor 不可以实现在同一个代码中引入同一个包的多个版本这个问题")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("go module")])])])]),t._v(" "),o("ol",[o("li",[t._v("如果旧包和新包的导入路径相同，则新包必须兼容旧包。")]),t._v(" "),o("li",[t._v("使用满足需求的最旧版本，而不是最新版本。")]),t._v(" "),o("li",[t._v("不是提供一个包管理工具，而是提供一种全新的 go")])]),t._v(" "),o("p",[o("code",[t._v("v[major].[minor].[patch]")])]),t._v(" "),o("p",[t._v("major: 破坏性更新，不支持旧版本"),o("br"),t._v("\n minor: 新特性更新，兼容旧版本"),o("br"),t._v("\n patch: 修复 bug")]),t._v(" "),o("p",[t._v("module 模式下的 go build 和 go get"),o("br"),t._v("\ngo build:  "),o("code",[t._v("GOROOT")]),t._v(" "),o("eq",[o("span",{staticClass:"katex"},[o("span",{staticClass:"katex-mathml"},[o("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[o("semantics",[o("mrow",[o("mo",[t._v("→")])],1),o("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\to")])],1)],1)],1),o("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[o("span",{staticClass:"base"},[o("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),o("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),o("code",[t._v("gopath/pkg/mod/")]),t._v(" , 不支持 vendor，发现缺包，自动获取缺失的包"),o("br"),t._v("\n go get: 将包按照版本不同分别存到  "),o("code",[t._v("gopath/pkg/mod")]),t._v("  下面的不同路径")],1),t._v(" "),o("blockquote",[o("p",[t._v("那么如何判断当运行命令时，是处于传统模式还是 module 模式呢？这由三个因素共同决定：")])]),t._v(" "),o("ol",[o("li",[t._v("当前路径（或父路径）是否有 go.mod 文件（如果有，则倾向于 module 模式）；")]),t._v(" "),o("li",[t._v("当前路径是否在  "),o("code",[t._v("$GOPATH")]),t._v("  下（如果是，则倾向于传统模式）；")]),t._v(" "),o("li",[t._v("环境变量  "),o("code",[t._v("$GO111MODULE")]),t._v("  的配置（当发生分歧时起，最终决策）。")])]),t._v(" "),o("p",[t._v("手动具体检测：go env 观察  "),o("code",[t._v("$GOMOD")]),t._v("  的值，如果有值并且指向了一个 go.mod 文件，那么他就是 mod 模式，否则就是传统模式"),o("br"),t._v(" "),o("code",[t._v("go env | grep GOMOD")])]),t._v(" "),o("p",[t._v("新的使用方式：")]),t._v(" "),o("ol",[o("li",[o("code",[t._v("go mod init [module-name]")]),t._v("  初始化一个  "),o("code",[t._v("module")])]),t._v(" "),o("li",[o("code",[t._v("go tidy")]),t._v("  检查当前  "),o("code",[t._v("module")]),t._v("  的依赖并写入  "),o("code",[t._v("go.mod")]),t._v("  和  "),o("code",[t._v("go.sum")]),t._v(" ；")]),t._v(" "),o("li",[o("code",[t._v("go.mod")]),t._v("  描述了本 module 的名称、go 版本依赖、依赖包的最小版本；")]),t._v(" "),o("li",[o("code",[t._v("​go.sum")]),t._v("  记录依赖包语义化版本对应的哈希。")])]),t._v(" "),o("p",[t._v("同时 module 模式下， go get 不是简单的 git clone 了， 存在了具体使用的协议： "),o("code",[t._v("https://pkg.go.dev/cmd/go#hdr-Module_proxy_protocol")])]),t._v(" "),o("p",[t._v("可以通过配置  "),o("code",[t._v("$GOPROXY")]),t._v(" 、 "),o("code",[t._v("$GONOPROXY")]),t._v("  等环境变量来设置代理，")]),t._v(" "),o("p",[t._v("且从 go 1.13 开始，module 引入了文件检查，go get 会将获取到的包与官方的包哈希数据库，进行对比，你可以通过修改  "),o("code",[t._v("$GOSUMDB")]),t._v(" 、 "),o("code",[t._v("$GONOSUMDB")]),t._v(" 、 "),o("code",[t._v("$GOPRIVATE")]),t._v("  等环境变量来控制这一行为。如果你引入私有包时，因为无法通过文件检查而失败（私有包无法被官方的包哈希数据库收录）google 一下")]),t._v(" "),o("p",[t._v("go.mod 文件中描述了这个 module 的名字，而不需要借助  "),o("code",[t._v("$GOPATH")]),t._v("  路径，所以  "),o("code",[t._v("module")]),t._v("  项目是不需要放到  "),o("code",[t._v("$GOPATH")]),t._v("  下的，可以放在任何位置，编译时也不依赖  "),o("code",[t._v("$GOPATH/src")]),t._v("  下存放的包。至此，module 基本摆脱了了对  "),o("code",[t._v("$GOPATH")]),t._v("  的依赖，只是需要借  "),o("code",[t._v("$GOPATH/pkg/mod")]),t._v("  这个位置存一下文件而已，算不得什么。")]),t._v(" "),o("h2",{attrs:{id:"after-go-1-18"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#after-go-1-18"}},[t._v("#")]),t._v(" after go 1.18")]),t._v(" "),o("p",[t._v("出现了一个叫做 go work 的东西")]),t._v(" "),o("p",[t._v("对本地项目使用子文件夹中的 package 的情况提供了方便，不用手动在 go mod 文件中添加一些 replace 字段或者是上传到云端进行调试")]),t._v(" "),o("p",[t._v("可以直接在本地 go work use 来使用这个子目录的 package")]),t._v(" "),o("hr"),t._v(" "),o("p",[t._v("参考：")]),t._v(" "),o("ul",[o("li",[t._v("https://github.com/wolfogre")]),t._v(" "),o("li",[t._v("https://blog.wolfogre.com/posts/golang-package-history/")]),t._v(" "),o("li",[t._v("https://go.dev/doc/tutorial/workspaces")])])])}),[],!1,null,null,null);a.default=n.exports}}]);