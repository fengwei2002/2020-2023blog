(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{511:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("C++ virtual 关键字及其相关")])]),t._v(" "),s("p",[t._v("再见面已经快整整一年了，CPP 都忘了。"),s("br"),t._v("\n所以遇到就总结一下")]),t._v(" "),s("h2",{attrs:{id:"virtual-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-关键字"}},[t._v("#")]),t._v(" virtual 关键字")]),t._v(" "),s("p",[t._v("如果不使用 virtual 关键字，当使用基类的指针 p 指向派生类的对象时，调用的 p 的一个方法（比如 print）时，调用的是基类里面的 print 方法。")]),t._v(" "),s("p",[t._v("如果使用 virtual 关键字，则可以调用派生类里的 print 方法。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Base"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Derived")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Derived")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Derived"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" point "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Derived")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    point"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样的话  "),s("code",[t._v("point")]),t._v("  指针的输出函数就是派生类的函数")]),t._v(" "),s("p",[t._v('这个例子是虚函数的一个典型应用，通过这个例子，也许你就对虚函数有了一些概念。它虚就虚在所谓 "推迟联编" 或者 "动态联编" 上，一个类函数的调用并不是在编译时刻被确定的，而是在运行时刻被确定的。'),s("strong",[t._v('由于编写代码的时候并不能确定被调用的是基类的函数还是哪个派生类的函数，所以被成为 "虚" 函数。')])]),t._v(" "),s("h2",{attrs:{id:"虚函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚函数"}},[t._v("#")]),t._v(" 虚函数")]),t._v(" "),s("p",[t._v("虚函数功能"),s("br"),t._v("\n通过父类的指针调用实际子类的成员函数。这种技术可以让父类的指针有 “多种形态”，这是一种泛型技术")]),t._v(" "),s("ul",[s("li",[t._v("虚函数，在类成员方法的声明（不是定义）语句前加 “virtual”, 如  "),s("code",[t._v("virtual void func()")])]),t._v(" "),s("li",[t._v("纯虚函数，在虚函数后加 “ "),s("code",[t._v("=0")]),t._v(" ”，如  "),s("code",[t._v("virtual void func()=0")])]),t._v(" "),s("li",[t._v("对于虚函数，子类可以（也可以不）重新定义基类的虚函数，该行为称之为复写 Override。")]),t._v(" "),s("li",[t._v("对于纯虚函数，子类必须提供纯虚函数的个性化实现。")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("子类如果不提供虚函数的实现，将会自动调用基类的缺省虚函数实现，作为备选方案；")]),t._v(" "),s("li",[t._v("子类如果不提供纯虚函数的实现，编译将会失败。尽管在基类中可以给出纯虚函数的实现，但无法通过指向子类对象的基类类型指针来调用该纯虚函数，也即不能作为子类相应纯虚函数的备选方案。（纯虚函数在基类中的实现跟多态性无关，它只是提供了一种语法上的便利，在变化多端的应用场景中留有后路。）")])]),t._v(" "),s("p",[t._v("也就是:"),s("br"),t._v("\n 当使用类的指针调用成员函数时，普通函数由指针类型决定，而虚函数由指针指向的实际类型决定")]),t._v(" "),s("h3",{attrs:{id:"纯虚函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯虚函数"}},[t._v("#")]),t._v(" 纯虚函数")]),t._v(" "),s("p",[t._v("在基类中声明但不定义的虚函数，但要求任何派生类都要定义自己的实现方法。在基类中实现纯虚函数的方法是在函数原型后加 “ "),s("code",[t._v("=0")]),t._v(" ”，如 "),s("code",[t._v("virtual void funtion1()=0；")])]),t._v(" "),s("p",[t._v("含有纯虚函数的类为抽象类。")]),t._v(" "),s("p",[t._v("有些时候，想要使一个类成为抽象类，但刚好又没有任何纯虚函数。最简单的方法就是声明一个纯虚析构函数。")]),t._v(" "),s("p",[t._v("引入原因:")]),t._v(" "),s("ul",[s("li",[t._v("为了方便使用多态特性，我们常常需要在基类中定义虚拟函数。实际中并不进行使用")]),t._v(" "),s("li",[t._v("在很多情况下，基类本身生成对象是不合情理的。例如，动物作为一个基类可以派生出老虎、孔雀等子类，但动物本身生成对象明显不合常理。")]),t._v(" "),s("li",[t._v("为了安全，因为避免任何需要明确但是因为不小心而导致的未知的结果，提醒子类去做应做的实现。")]),t._v(" "),s("li",[t._v("为了效率，不是程序执行的效率，而是为了编码的效率。")])]),t._v(" "),s("p",[t._v("为了解决上述问题，引入了纯虚函数的概念，将函数定义为纯虚函数（方法: "),s("code",[t._v("virtual ReturnType Function()= 0;")]),t._v(" ），则编译器要求在派生类中"),s("strong",[t._v("必须予以重写")]),t._v("以实现多态性。同时含有纯虚拟函数的类称为抽象类，它不能生成对象。这样就很好地解决了上述两个问题。")]),t._v(" "),s("p",[t._v("声明了纯虚函数的类是一个抽象类。所以，用户不能创建类的实例，只能创建它的派生类的实例。")]),t._v(" "),s("p",[s("strong",[t._v("纯虚函数最显著的特征是")]),t._v("：它们必须在继承类中重新声明函数（不要后面的＝0，否则该派生类也不能实例化），而且它们在抽象类中往往没有定义。")]),t._v(" "),s("p",[t._v("定义纯虚函数的目的在于，使派生类仅仅只是继承函数的接口。")]),t._v(" "),s("p",[s("strong",[t._v("纯虚函数的意义")]),t._v('，让所有的类对象（主要是派生类对象）都可以执行纯虚函数的动作，但类无法为纯虚函数提供一个合理的默认实现。所以类纯虚函数的声明就是在告诉子类的设计者，"你必须提供一个纯虚函数的实现，但我不知道你会怎样实现它"。')]),t._v(" "),s("h3",{attrs:{id:"与-static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-static"}},[t._v("#")]),t._v(" 与 static:")]),t._v(" "),s("p",[t._v("static 成员函数不属于任何类对象或类实例，所以即使给此函数加上 virutal 也是没有任何意义"),s("br"),t._v("\n虚函数依靠 vptr 和 vtable 来处理。vptr 是一个指针，在类的构造函数中创建生成，并且只能用 this 指针来访问它，静态成员函数没有 this 指针，所以无法访问 vptr。")]),t._v(" "),s("h3",{attrs:{id:"与构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与构造函数"}},[t._v("#")]),t._v(" 与构造函数")]),t._v(" "),s("p",[t._v("构造函数不可以声明为虚函数。同时除了 inline 之外，构造函数不允许使用其它任何关键字。")]),t._v(" "),s("p",[t._v("为什么构造函数不可以为虚函数？")]),t._v(" "),s("p",[t._v("尽管虚函数表 vtable 是在编译阶段就已经建立的，但指向虚函数表的指针 vptr 是在运行阶段实例化对象时才产生的。 如果类含有虚函数，编译器会在构造函数中添加代码来创建 vptr。 问题来了，如果构造函数是虚的，那么它需要 vptr 来访问 vtable，可这个时候 vptr 还没产生。 因此，构造函数不可以为虚函数。")]),t._v(" "),s("p",[t._v("我们之所以使用虚函数，是因为需要在信息不全的情况下进行多态运行。而构造函数是用来初始化实例的，实例的类型必须是明确的。 因此，构造函数没有必要被声明为虚函数。")]),t._v(" "),s("h3",{attrs:{id:"与析构函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与析构函数"}},[t._v("#")]),t._v(" 与析构函数")]),t._v(" "),s("p",[t._v("析构函数可以声明为虚函数。如果我们需要删除一个指向派生类的基类指针时，应该把析构函数声明为虚函数。 事实上，只要一个类有可能会被其它类所继承， 就应该声明虚析构函数（哪怕该析构函数不执行任何操作）。")]),t._v(" "),s("p",[t._v("如果不用虚函数的话 继承类的析构函数没有被调用，delete 时只根据指针类型调用了基类的析构函数。 正确的操作是，基类和继承类的析构函数都应该被调用，解决方法是将基类的析构函数声明为虚函数。")]),t._v(" "),s("h2",{attrs:{id:"虚函数表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚函数表"}},[t._v("#")]),t._v(" 虚函数表")]),t._v(" "),s("p",[t._v("只要基类里面被声明为虚函数，那么在子类中默认都是虚的")]),t._v(" "),s("p",[t._v("C++ 的编译器应该是保证虚函数表的指针存在于对象实例中最前面的位置（这是为了保证取到虚函数表的有最高的性能 —— 如果有多层继承或是多重继承的情况下）。"),s("br"),t._v("\n这意味着我们通过对象实例的地址得到这张虚函数表，然后就可以遍历其中函数指针，并调用相应的函数。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2020-12-06-16-46-39","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-06-16-46-39.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"一般继承-无虚函数覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般继承-无虚函数覆盖"}},[t._v("#")]),t._v(" 一般继承（无虚函数覆盖）:")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2020-12-06-16-43-57","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-06-16-43-57.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("虚函数按照其声明顺序放于表中。"),s("br"),t._v("\n父类的虚函数在子类的虚函数前面。")]),t._v(" "),s("h3",{attrs:{id:"一般继承-有虚函数覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般继承-有虚函数覆盖"}},[t._v("#")]),t._v(" 一般继承（有虚函数覆盖）:")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2020-12-06-16-45-18","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-06-16-45-18.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("覆盖的  "),s("code",[t._v("f()")]),t._v("  函数被放到了虚表中原来父类虚函数的位置。"),s("br"),t._v("\n没有被覆盖的函数依旧。")]),t._v(" "),s("p",[t._v("由 b 所指的内存中的虚函数表的 f () 的位置已经被 Derive::f () 函数地址所取代，于是在实际调用发生时，是 Derive::f () 被调用了。这就实现了多态。")]),t._v(" "),s("h3",{attrs:{id:"多重继承-无虚函数覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多重继承-无虚函数覆盖"}},[t._v("#")]),t._v(" 多重继承（无虚函数覆盖）:")]),t._v(" "),s("p",[t._v("继承关系图示:")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2020-12-06-16-47-34","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-06-16-47-34.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("子函数的虚函数表")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2020-12-06-16-48-18","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-06-16-48-18.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("同理，有虚函数表覆盖时，对应的虚函数表指针就会发生替换")]),t._v(" "),s("h2",{attrs:{id:"vptr-指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vptr-指针"}},[t._v("#")]),t._v(" vptr 指针")]),t._v(" "),s("p",[t._v("vptr（虚函数指针）: 一个指向虚函数表的指针，每个具有虚函数的对象都会拥有这样的一个指针。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("sizeof(A) > sizeof(B)")]),t._v("  // 因为 A 比 B 多了一个虚函数指针")])]),t._v(" "),s("h3",{attrs:{id:"分步初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分步初始化"}},[t._v("#")]),t._v(" 分步初始化")]),t._v(" "),s("p",[t._v("每个使用虚函数的类（或者从使用虚函数的类派生）都有自己的虚拟表。该表只是编译器在编译时设置的静态数组。虚拟表包含可由类的对象调用的每个虚函数的一个条目。此表中的每个条目只是一个函数指针，指向该类可访问的最派生函数")]),t._v(" "),s("p",[t._v("其次，编译器还会添加一个隐藏指向基类的指针，我们称之为 vptr。vptr 在创建类实例时自动设置，以便指向该类的虚拟表。与 this 指针不同，this 指针实际上是编译器用来解析自引用的函数参数，vptr 是一个真正的指针。")]),t._v(" "),s("p",[t._v("当执行父类的构造函数时，vptr 指向父类的虚函数表"),s("br"),t._v("\n当父类的构造函数运行完毕后，vptr 指向子类的虚函数表"),s("br"),t._v("\n子类的 vptr 指针分布完成")])])}),[],!1,null,null,null);a.default=r.exports}}]);