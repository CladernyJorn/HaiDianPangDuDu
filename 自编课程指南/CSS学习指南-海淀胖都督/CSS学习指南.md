# CSS 学习指南

## 序

我们在前一本《 HTML 学习指南》中系统地讲解了 HTML 语言的有关知识，本册我们将对 CSS 的有关内容进行介绍讲解。CSS 是网页前端设计者的必修科目，用于对 HTML 元素的显示方式进行细致的控制。CSS 的知识一般都不难，为了使读者对 CSS 知识能有更好的理解与掌握，我们给出几点建议：

- 对照 [附录1：学习资料](#附录1 参考资料) 中的资源进行细致的学习
- 对每一节都应该自己试一遍所有样式的属性和取值，以更好地掌握 CSS 知识
- 可以在 B站等视频网站自主寻找教学资源作为本册的补充

如果读者在阅读过程中发现本文内容有误，请联系我们指出，我们将对此表示十分感谢

再次感谢各位读者选择本文！

<p align="right">海淀胖都督&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>	

<p align="right">2021年8月于北京理工大学</p>

## 一. CSS 初识

CSS，即层叠样式表，是一种用来表现 HTML 等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

本册主要使用 VS Code 作为编写 CSS 样式文件的开发环境，使用 Chrome 浏览器作为调试运行的平台

### 1.1 创建第一个 CSS 样式文件

我们以及有了一个 HTML 文件：

```html
<html>
    <head>
        <title>CSS用例</title>
    </head>
    <body>
        <p>这是一段文字</p>
    </body>
</html>
```

现在我们希望用 CSS 文件去改变 p 元素的样式

打开 VS Code，选择文件，选择新建文件：

![4](C:\Users\zhdqlym\Desktop\CSS\pictures\4.png)

选择语言：CSS

![5](C:\Users\zhdqlym\Desktop\CSS\pictures\5.png)

输入代码：

```css
p{
    color: cyan;
    text-align: center;
    font-size: 20px;
}
```

保存文件，设置文件名为 mycss.css

![6](C:\Users\zhdqlym\Desktop\CSS\pictures\6.png)

在 HTML 文件中引入刚刚写好的 CSS 文件：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">    <!--引入 CSS 文件 -->
    </head>
    <body>
        <p>这是一段文字</p>
    </body>
</html>
```

在 Chrome 浏览器中打开 HTML 文件，观察到 p 元素的样式被更改了。这样，我们就完成了第一个 CSS 样式文件的编写

![7](C:\Users\zhdqlym\Desktop\CSS\pictures\7.png)



### 1.2 CSS 样式的用法

CSS 样式一般有以下三种用法：

- 站点样式

  在一个网站中，将需要重复在多个网页中使用的样式放在外部样式表文件中然后通过链接的方式引用其中的样式，可以让整个网站具有一致的视觉效果，形成独特的设计风格。因为外部样式表是应用于整个网站的多个网页，因此也叫作“站点样式”。

  链接引用外部样式表的方法为：在head标记符内使用link标记符，通过制定相应属性链接到外部样式表。用法是在\<head>\</head>中加入语句：\<link rel="stylesheet" type="text/css" href="样式表文件的URL"/>

- 网页样式

  当具体到每一个网页时，也可能需要设置仅适用与当前的网页效果，这时候就需要使用网页样式。使用方法为：在head标记符内使用style标记符，然后在style标记符中定义样式

  例如可以编写如下：

  ```html
  <html>
      <head>
          <title>CSS用例</title>
          <style>
              p{
                  color: cyan;
                  text-align: center;
                  font-size: 20px;
              }
          </style>
      </head>
      <body>
          <p>这是一段文字</p>
      </body>
  </html>
  ```

> 注意：当同时设置站点样式和网页样式时，应先使用\<link>标记符，在使用\<style>标记符，以确保网页样式的优先级高于站点样式

- 行内样式

  行内样式只在极其特殊的场合使用，通常为测试某种视觉效果时。使用方法为：

  <标记符 style=”property1:value1;property2:value2;……”>

> 注意：行内样式的用法违背了“内容与形式分离”的基本设计原则，与CSS的使用初衷背道而驰，因此不建议使用



### 1.3 CSS 基本语法

![7](C:\Users\zhdqlym\Desktop\CSS\pictures\7.gif)

如图所示，CSS 代码由选择器和声明构成，而声明中又包括属性和属性的值，属性和值之间用冒号隔开，多条声明用分号隔开

- 选择器告诉浏览器哪些 HTML 元素需要被设置样式
- 声明则告诉浏览器具体的样式及其取值

下举一例解释：我们希望让 class="text" 的 p 元素的文本对齐方式为居中对齐，字体大小为 20px，文字颜色为红色，则编写代码如下：

```css
p.text{
	color: red;
	text-align: center;
	font-size: 20px;
}
```

代码中，位于花括号前的 p 就是选择器，表明需要设置样式的 HTML 元素是 class="text" 的 p 元素。花括号内一共三条声明，其中 color、text-align、font-size 是属性，red、center、20px 则是这三个属性的取值



### 1.4 CSS 注释

在前一本《HTML 学习指南》中，我们曾经提到过，在代码的合适位置添加注释是一种很好的习惯，这对于编写 CSS 样式文件同样适用， CSS 中，注释是以 /\* 开始，以 \*/ 结束

注释可以是单行的：

```css
/* 这是一段注释 */
```

注释也可以跨越多行：

```css
/* 这段代码都是注释 
p.text{
	color: red;
	text-align: center;
	font-size: 20px;
} */
```

> 提示：在调试时可以利用注释使一部分代码不运行，从而准确找出问题所在



### 1.5 本章习题

1. CSS，即 (层叠样式表) ，是一种用来表现 (HTML 等文件) 样式的计算机语言。CSS不仅可以 (静态地) 修饰网页，还可以 (配合各种脚本语言) 动态地对网页各元素进行格式化。

2. CSS样式用法不包括：C

   A.   站点样式

   B.   网页样式

   C.   网站样式

   D.   行内样式

3. 以下说法错误的是 D

   A.   %：百分比值总是相对于另一个值来说的，该值可以是长度单位或者是其他单位。每一个可以使用百分比单位指定的属性同时也定义了这个百分比值的参照值。很多情况下，这个参照值是该元素本身的字体尺寸

   B.   px：像素（计算机屏幕上的一个点）

   C.   em：1em等于当前字体尺寸，在CSS中，em是非常有效的单位，因为它可以自动适应用户所使用的字体

   D.   ex：一个ex是一个字体的x-height，通常是字体尺寸的1.5倍

4. CSS 代码由 (选择器和声明) 构成，而声明中又包括 (属性和属性的值)，它们用冒号隔开，多条声明用分号隔开。

5. 判断：css注释不能跨越多行（×）



## 二、CSS3 文本样式

### 2.1 文本对齐

#### 2.1.1 水平对齐

CSS 中可以用 text-align 属性来设置元素的水平对齐方式，其值有：center（居中对齐）、left（左对齐）、right（右对齐）、justify（两端对齐），举例如下：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p class="center">这是一段文字（居中对齐）</p>
        <p class="left">这是一段文字（左对齐）</p>
        <p class="right">这是一段文字（右对齐）</p>
    </body>
</html>
```

CSS：

```css
p.center{
    text-align: center;
}
p.left{
    text-align: left;
}
p.right{
    text-align: right;
}
```

效果如下：

![9](C:\Users\zhdqlym\Desktop\CSS\pictures\9.png)



#### 2.1.2 垂直对齐

CSS 中可以用 vertical-align 属性来设置元素的垂直对齐方式，下用图片的垂直对齐来举例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p>默认对齐<img src="./pictures/02.jpg" width="72px" height="70px">的文字</p>
        <p>上对齐<img class="top" src="./pictures/02.jpg" width="72px" height="70px">的文字</p>
        <p>居中对齐<img class="middle" src="./pictures/02.jpg" width="72px" height="70px">的文字</p>
        <p>下对齐<img class="bottom" src="./pictures/02.jpg" width="72px" height="70px">的文字</p>
    </body>
</html>
```

CSS：

```css
img.top{
    vertical-align: top;
}
img.middle{
    vertical-align: middle;
}
img.bottom{
    vertical-align: bottom;
}
```

效果如图：

![8](C:\Users\zhdqlym\Desktop\CSS\pictures\8.png)



### 2.2 文本颜色

CSS 中可以用 color 属性设置文字颜色，颜色的表示方式主要有以下四种：

- 颜色名：如 pink
- rgb：如 rgb(60,179,173)
- rgba：如 rgba(255, 99, 71, 0.8)
- 十六进制：如 #FF0000

下举一例加以说明：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p class="text1">这是一段文字</p>
        <p class="text2">这是一段文字</p>
        <p class="text3">这是一段文字</p>
        <p class="text4">这是一段文字</p>
    </body>
</html>
```

CSS：

```css
p.text1{
    color:pink;
}
p.text2{
    color: rgb(42, 214, 93);
}
p.text3{
    color: rgba(111, 51, 170, 0.8);
}
p.text4{
    color: #ddda2f;
}
```

效果如下：

![10](C:\Users\zhdqlym\Desktop\CSS\pictures\10.png)



### 2.3 文本装饰 

CSS 中，我们可以使用 text-decoration 属性来设置文本的装饰属性，取值一般有：

- none：无装饰
- overline：上划线
- line-through：贯穿文字的横线
- underline：下划线

下举一例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p class="text1">这是一段文字</p>
        <p class="text2">这是一段文字</p>
        <p class="text3">这是一段文字</p>
    </body>
</html>
```

CSS：

```css
p.text1{
    text-decoration: overline;
}
p.text2{
    text-decoration: line-through;
}
p.text3{
    text-decoration: underline;
}
```

效果如下：

![11](C:\Users\zhdqlym\Desktop\CSS\pictures\11.png)



### 2.4 链接样式

可以通过指定下列选择器之一设置超链接样式：

- a:link 当超链接没被访问过时，所设置的样式应用于超链接。
- a:visited 当超链接已被访问过时，所设置的样式应用于超链接。
- a:hover 当鼠标指针移动到超链接上时，所设置的样式应用于超链接。
- a:active 当超链接当前为被选中状态时，所设置的样式应用于超链接。

下举一例说明：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <a href="https://www.bilibili.com/">B站的超链接</a>
    </body>
</html>
```

CSS：

```css
/* 未被访问的链接 */
a:link {
    color: red;
}
/* 已被访问的链接 */
a:visited {
    color: green;
}
/* 将鼠标悬停在链接上 */
a:hover {
    color: hotpink;
}
/* 被选择的链接 */
a:active {
    color: blue;
}
```

效果如图：

![8](C:\Users\zhdqlym\Desktop\CSS\pictures\8.gif)



### 2.5 字体样式

#### 2.5.1 字体种类

CSS中可以用 font-family 来设置字体种类，例如如果要设置 p 元素的字体为宋体，可以如下编写：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p>这是一段文字</p>
    </body>
</html>
```

CSS：

```
p{
	font-family: 宋体;
}
```

效果如下：

![12](C:\Users\zhdqlym\Desktop\CSS\pictures\12.png)



#### 2.5.2 字体大小

CSS 中，可以使用 font-size 属性来设置字体的大小，其值可以是像素(px)，也可以是 em 值，也可以是百分比，下用像素为例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p>这是一段文字</p>
    </body>
</html>
```

CSS：

```css
p{
	font-size: 100px;
}
```

效果如图：

![13](C:\Users\zhdqlym\Desktop\CSS\pictures\13.png)



#### 2.5.3 字体粗细

CSS 中，可以使用 font-weight 属性来设置字体的粗细，下举一例；

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p>这是一段文字</p>
    </body>
</html>
```

CSS：

```css
p{
	font-weight: bold;
}
```

效果如下：

![14](C:\Users\zhdqlym\Desktop\CSS\pictures\14.png)



### 2.6 背景样式

#### 2.6.1 背景颜色

和文本一样，CSS 也可以为背景填充颜色

```css
body{
	background-color: cyan;
}
```

#### 2.6.2 背景图像

CSS 中可以使用 background-image 来设置背景图片

```css
body{
	background-image: url(./pictures/碧蓝航线.jpg);
}
```

#### 2.6.3 背景大小

CSS 中可以使用 background-size 来设置背景图片大小

```css
body{
	background-size: cover;
}
```



### 2.7 本章练习题

1. css的文本对齐属性有：(水平对齐)、(垂直对齐)。

2. 以下哪一个不是css中颜色的表示方式：A

   A.   颜色名：如粉色

   B.   rgb：如 rgb(60,179,173)

   C.   rgba：如 rgba(255, 99, 71, 0.8)

   D.   十六进制：如 #FF0000

3. 以下说法正确的是：D

   A.   background-color属性：用于控制HTML元素内文本颜色，取值可以使用颜色名、#rrggbb、rgb（r，g，b）中任意一种形式

   B.   color属性：用于设置HTML元素的背景颜色，取值与color属性一样。此属性默认值是transparent，表示没有任何颜色。

   C.   在使用font属性时，应遵守以下正规表达式：

   [<’font-style’> || <’font-variant’> || <’font-weight’>]?<’fontfamily’>

   D.   text-align属性：该属性指定了所选元素的对齐方式，取值可以是：left | right | center |justify,分别表示左对齐、右对齐、居中对齐和两端对齐。

4. 以下说法正确的的是：C

   A.   a:visited 当超链接没被访问过时，所设置的样式应用于超链接。

   B.   a:link 当超链接已被访问过时，所设置的样式应用于超链接。

   C.   a:hover 当鼠标指针移动到超链接上时，所设置的样式应用于超链接。

   D.   a:active 当鼠标指针移动到超链接上时，所设置的样式应用于超链接。

5. css的背景样式属性有：背景颜色、背景图像、背景大小

   它们分别表示为：(background-color)、(background-image)、(background-size)



## 三、CSS 选择器

第二章讲了 CSS 的文本样式控制，肯定有读者已经发现了代码中有 .text1 这样的部分。实际上这样的内容就是 CSS 的一个核心内容，即选择器，本章将分为两个部分介绍 CSS 的选择器

### 3.1 CSS3基本选择器

#### 3.1.1 标记符选择器：

HTML标记符中是最典型的选择器类型。网页设计者可以为某个具体的HTML标记符应用样式符定义，此时网页中所有的该标记符对应的元素都会应用相应的样式。例如，如果要对网页中所有超链接设置某种视觉效果，其对应的选择器显然应该是a标记符，对应的CSS样式代码如下： 

```css
a{
	text-decoration:none;
}
```



#### 3.1.2 类选择器

如果要对网页中的多种HTML元素定义某种类别，可以使用类选择器，用一个句点和类名表示。这种类也叫做通用类，因为任何class属性为center的HTML元素都可以应用该样式

例如如果我们希望选择 class="title1" 的 h1 元素，使其文本居中对齐，则可以如下编写：

```css
.center{
	text-align:center;
}
```

#### 3.1.3 ID选择器

如果相对网页中独一无二的元素设置特定效果，那么可以使用ID选择器。具体做法是，在HTML标记符中为该元素用id属性进行命名，其格式为：#id

例如如果我们希望选择 id="text" 的 p 元素,使其文本居中对齐，则可以如下编写：

```css
p#text{
    text-align: center
}
```

> 注意：所谓ID在网页中应该是独一无二的，是指在任意一个具体的网页中，id属性等于某个特定值的元素应该只有一个，并不是说在整个网站的多个网页中，该id只能出现一次



#### 3.1.4 伪类选择器

伪类用于定义元素的特殊状态，例如悬停状态，未访问状态，取得焦点状态等，其格式为：标记符(类、id)：伪类

伪类主要有以下一些种类：

- :active
- :hover
- :first-child
- :visited
- :nth-child
- :last-child
- :focus
- :link

如果我们希望一个 div 元素在鼠标悬停时背景颜色变为黄色，并且文本大小变为40px，可以如下编写：

```css
div:hover{
	background-color: yellow;
	font-size:40px;
}
```



#### 3.1.5 群组选择器

如果多个选择器拥有相同的样式声明，那么可以使用逗号的方式将它们归在一起编组

例如如果想要讲 h1 ~ h6 的字体全部设置为楷体，可以如下编写：

```css
h1,h2,h3,h4,h5,h6{
	font-family:楷体
}
```



### 3.2 CSS3 高级选择器

除了标记符选择器、类选择器、ID选择器、伪类选择器以及群组选择器这几种选择器比较基础的选择器之外，CSS 中还有一些选择器，可以方便设计者来更有针对性地选择需要的网页元素

#### 3.1.1 后代选择器

后代选择器（包含选择器）可以用以选择某元素后代的元素。在后代选择器中，规则左边的选择器一端包括两个或多个用空格分隔的选择器

例如我们希望使 class=“text” 的 p 元素后代的 em 元素的文本变为 30px，可以如下编写：

```css
p.text em{
    font-size: 30px;
}
```

> 提示：后代选择器的两个元素之间的间隔可以是无限的。无论后代嵌套多深，都能够被正确的选择出来



#### 3.1.2 子元素选择器

子元素选择器与后代选择器有所区别，子元素选择器只能选中某个元素嵌套一层的子元素，两元素用 > 连接

例如：

```css
p.text > em{
    font-size:50px;
}
```

表示将 class="text" 的全部 em 子元素的文本变为 50px。



#### 3.1.3 相邻兄弟选择器

如果两个元素有共同的父元素，并且后一个元素紧接在前一个元素之后，就可以使用相邻兄弟选择器，两元素之间用 + 连接、

例如：

```css
div.container > div#box h1 + p{
	font-size: 20px;
}
```

表示使 class="container" 的 div 中 id="box" 的 div 中紧接在后代 h1 之后的 p 元素的文本字体大小变为20px



#### 3.1.4 属性选择器

如果知道了一个元素的属性，可以使用属性选择器

例如：

```css
a[href] {
	color:red;
}
```

可以将有 href 属性的 a 元素的颜色变为红色

详细用法：

|       选择器        |                描述                |                             举例                             |
| :-----------------: | :--------------------------------: | :----------------------------------------------------------: |
|     [attribute]     |       选择带有指定属性的元素       |      [title]{color:red;}<br>\<p title="text">段落\</p>       |
|  [attribute=value]  |     选取带有指定属性和值的元素     |    [title=text]{color:red;}<br>\<p title="text">段落\</p>    |
| [attribute~=value]  |   选取属性值中包含指定单词的元素   | [title~=text]{color:red}; <br>\<p title="first text">段落\</p> |
| [attribute\|=value] | 选取带有以指定值开头的属性值的元素 | [title\|=first]{color:red}; <br/>\<p title="first text">段落\</p> |
|  [attibute^=value]  |  选取属性值以指定值开头的每个元素  |  [title^=text]{color:red}; <br/>\<p title="text1">段落\</p>  |
| [attribute$=value]  |  选择属性值以指定值结尾的每个元素  | [title$=text]{color:red}; <br/>\<p title="first text">段落\</p> |
| [attribute*=value]  |  选择属性值中包含指定值的每个元素  | [title*=text]{color:red}; <br/>\<p title=" first text1">段落\</p> |



### 3.3 本章习题

1. CSS基本选择器不包括：A

   A.   自动选择器

   B.   标记符选择器

   C.   类选择器

   D.   ID选择器

2. (后代选择器) 可以用以选择某元素后代的元素；(子元素选择器) 只能选中某个元素嵌套一层的子元素，两元素用 >连接；如果两个元素有共同的父元素，并且后一个元素紧接在前一个元素之后，就可以使用 (相邻兄弟选择器)，两元素之间用 + 连接；如果知道了一个元素的属性，可以使用 (属性选择器)。

3. 关于CSS基础部分，以下说法错误的是：C

   A.   CSS的基本内容包括：属性单位、样式、选择器、基础属性

   B.   属性单位包括颜色单位和长度单位

   C.   如果相对网页中独一无二的元素设置特定效果，那么可以使用伪类选择器

   D.   text-indent属性可以对特定选项的文本进行首行缩进，取值可以是长度或百分比。此属性默认值为0，表示无缩进。



## 四、 CSS3 布局

使用 CSS 进行网页的布局设计，使 CSS 的核心功能之一

### 4.1 CSS 盒模型

#### 4.1.1 盒模型概念

盒模型如图：

![1](C:\Users\zhdqlym\Desktop\CSS\pictures\1.gif)

包括元素的高度 height、 宽度 width、填充 padding、边框 border、边距 margin

> 提示：增加填充、边框、边距不会影响内容区域的尺寸，但会增加元素框的总尺寸



#### 4.1.2 padding 属性

CSS 盒模型的填充属性包括 padding、padding-left、padding-right、padding-top、padding-bottom

- padding 属性用于同时指定上、右、左、下4个方向的填充宽度，如果只指定一个值，则4个方向采用相同的填充宽度，如果制定了2个或3个值，则没有指定填充宽度的边采用对边的填充宽度
- padding-left、padding-right、padding-top、padding-bottom 用于设置左、右、上、下的填充区宽度，取值可以为长度和百分数，不可为负数。如果指定值为百分比，则表示相对于父元素宽度的百分比



#### 4.1.3 margin 属性

CSS 盒模型的边距属性包括 margin、margin-left、margin-right、margin-top、margin-bottom

- margin 属性用于同时指定上、右、左、下4个方向的填充宽度，如果只指定一个值，则4个方向采用相同的填充宽度，如果制定了2个或3个值，则没有指定填充宽度的边采用对边的填充宽度
- padding-left、padding-right、padding-top、padding-bottom 用于设置左、右、上、下的填充区宽度，取值可以为长度、百分数和auto，可以是负数。如果指定值为百分比，则表示相对于父元素宽度的百分比



#### 4.1.4 border 属性

- border 属性可以一次性设置4给方向上边框的宽度、样式和颜色。在指定宽度、样式、颜色时，无顺序要求
- border-left、border-right、border-top、border-bottom 属性可以用来一次性指定左、右、上、下边框的宽度、样式、颜色。在指定宽度、样式、颜色时，无顺序要求
- border-bottom-color、border-left-color、border-right-color、border-top-color 属性分别用于指定下、左、右、上边框的颜色
- border-bottom-style、border-left-style、border-right-style、border-top-style 属性分别用于指定下、左、右、上边框的样式
- border-bottom-width、border-left-width、border-right-width、border-top-width 属性分别用于指定下、左、右、上边框的宽度



下举一例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <div class="box">
            <div class="pic"></div>
        </div>
    </body>
</html>
```

CSS：

```css
.box{
    height: 800px;
    width: 800px;
    background-color: pink;
    padding: 25px 50px;
}
.pic{
    height: 701px;
    width: 720px;
    background-image: url(./pictures/02.jpg);
}
```

效果如下：

![15](C:\Users\zhdqlym\Desktop\CSS\pictures\15.png)



### 4.2 CSS 定位

#### 4.2.1 定位机制与定位属性

- #####  定位机制

  CSS 有三种基本的定位机制：普通流、浮动和绝对定位。除非专门指定，否则所有框都在普通流中定位

- ##### 定位属性

|      属性      |                             描述                             |
| :------------: | :----------------------------------------------------------: |
|    position    |   把元素放置到一个静态的、相对的、绝对的、或固定的位置中。   |
|      top       | 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。 |
|     right      |    定义了定位元素右外边距边界与其包含块右边界之间的偏移。    |
|     bottom     |    定义了定位元素下外边距边界与其包含块下边界之间的偏移。    |
|      left      |    定义了定位元素左外边距边界与其包含块左边界之间的偏移。    |
|    overflow    |           设置当元素的内容溢出其区域时发生的事情。           |
|      clip      |    设置元素的形状。元素被剪入这个形状之中，然后显示出来。    |
| vertical-align |                   设置元素的垂直对齐方式。                   |
|    z-index     |                     设置元素的堆叠顺序。                     |



#### 4.2.2 浮动定位

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。浮动的核心属性是float，其取值为lefy（左浮动）、right（右浮动）和none（不浮动）

例如下图，当把框 1 向右浮动时，它脱离文档流并且向右移动，直到它的右边缘碰到包含框的右边缘：

![2](C:\Users\zhdqlym\Desktop\CSS\pictures\2.gif)

而当框 1 向左浮动时，它脱离文档流并且向左移动，直到它的左边缘碰到包含框的左边缘。因为它不再处于文档流中，所以它不占据空间，实际上覆盖住了框 2，使框 2 从视图中消失：

![3](C:\Users\zhdqlym\Desktop\CSS\pictures\3.gif)

#### 4.2.3 绝对定位

设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框，普通流中其它元素的布局就像绝对定位的元素不存在一样，其语法为：position: absolute

例如我们设置框2的定位为绝对定位，距离左侧和上侧距离分别为30px、20px：

```css
#box_2 {
  position: absolute;
  left: 30px;
  top: 20px;
}
```

效果如图：

![4](C:\Users\zhdqlym\Desktop\CSS\pictures\4.gif)



#### 4.2.4 相对定位

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。其语法为：position: relative

例如我们设置框2的定位为相对定位，距离其原位置左侧和上侧距离分别为30px、20px：

```css
#box_2 {
  position: relative;
  left: 30px;
  top: 20px;
}
```

效果如图：

![5](C:\Users\zhdqlym\Desktop\CSS\pictures\5.gif)

#### 4.2.5 固定定位

如果将 position 属性值设置为 fixed，则表示采用固定定位。固定定位和绝对定位的规定一样，也是从文档流中删除被定位的元素，但定位是相对与视窗而非其他元素



### 4.3 本章习题

1. 请简单解释css盒模型

2. 以下说法错误的是 C

   A.    CSS 盒模型的边距属性包括 margin、margin-left、margin-right、margin-top、margin-bottom。

   B.    border-bottom-style、border-left-style、border-right-style、border-top-style 属性分别用于指定下、左、右、上边框的样式。

   C.    CSS 盒模型的填充属性包括 padding-all、padding-left、padding-right、padding-top、padding-bottom。

   D.    增加填充、边框、边距不会影响内容区域的尺寸，但会增加元素框的总尺寸。

3. CSS 的三种基本的定位机制是：(普通流)、(浮动) 和 (绝对定位)。

4. 以下哪一个不是css定位属性：B

   A.    position

   B.    cover

   C.    overflow

   D.    z-index

5. 以下这一种方式属于（）定位 A

   ```css
   #box_2{
   	position: relative;
   	left: 30px;
   	top: 20px;
   }
   ```

   A.    相对

   B.    绝对

   C.    固定

   D.    浮动



## 五、CSS3 高级属性

CSS 中还有控制如何显示元素和控制列表效果的分类属性、列表属性以及一些用于实现特定效果的特效属性

### 5.1 分类属性

CSS 的分类属性允许设计者控制元素的显示和定位

|    属性    |                     描述                     |
| :--------: | :------------------------------------------: |
|   clear    |  设置一个元素的侧面是否允许其他的浮动以元素  |
|   cursor   |     规定当指向某元素之上时显示的指针类型     |
|  display   |            设置是否及如何显示元素            |
|   float    |            定义元素在哪个方向浮动            |
|  position  | 把元素放置到一个静态、相对、绝对或固定的位置 |
| visibility |               设置元素是否可见               |



#### 5.1.1 cursor 属性

|    值     |                      含义                      |
| :-------: | :--------------------------------------------: |
|    url    |            需使用的自定义光标的URL             |
|   auto    |       浏览器基于当前文本决定显示哪种指针       |
| crosshair |                   简单十字形                   |
|  default  |             默认指针（通常为箭头）             |
|   hand    |                      手性                      |
|   move    |            指示某物被移动的交叉箭头            |
| *-resize  |              指示边缘被移动的箭头              |
|   text    |                  编辑文本指针                  |
|   wait    | 指示程序正忙、用户需要等待的沙漏图标或监视图标 |
|   help    |         指示用户可以得到帮助的问号图标         |

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p class="text1">这是一段文字</p>
        <p class="text2">这是一段文字</p>
        <p class="text3">这是一段文字</p>
        <p class="text4">这是一段文字</p>
        <p class="text5">这是一段文字</p>
        <p class="text6">这是一段文字</p>
    </body>
</html>
```

CSS：

```css
.text1{
    cursor: auto;
}
.text2{
    cursor: pointer;
}
.text3{
    cursor: wait;
}
.text4{
    cursor: help;
}
.text5{
    cursor: move;
}
.text6{
    cursor: default;
}
```

效果如下：

![9](C:\Users\zhdqlym\Desktop\CSS\pictures\9.gif)



#### 5.1.2 display 属性

|      值      |                             含义                             |
| :----------: | :----------------------------------------------------------: |
|     none     | 表示此元素不显示，此时不但元素不可见，并且元素也将退出当前的页面布局层，<br>不占用任何空间 |
|    block     | 此元素将显示为块级元素，元素前后会带有换行符，且可以设置宽高属性 |
|    inline    | 此元素会被显示为行内元素，元素前后没有换行符，不能设置宽高属性 |
| inline-block | 此元素将显示为行内块元素，这种元素结合了行内元素和块元素的优点，<br>既可以设置宽高，可以让padding和margin生效，又可以和其他行内元素并排 |

下举一例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <span>值为 "block" 的 display 属性会导致</span><span>两元素间的换行。</span>
        <ul>
            <li>值为 "inline" 的</li>
            <li> display 属性会导致</li>
            <li>元素变为行内元素，末尾没有换行</li>
        </ul>
        <p>下面其实有隐藏内容</p>
        <p class="hide">隐藏内容</p>
        <p>值为 "none" 的 display 属性不占用空间</p>
    </body>
</html>
```

CSS：

```css
span{
    display: block;
}
li{
    display: inline;
}
p.hide{
    display: none;
}
```

效果如下：

![18](C:\Users\zhdqlym\Desktop\CSS\pictures\18.png)



#### 5.1.3 visibility 属性

visibility 属性控制定位的元素是否可见，常用取值包括：visible（可见）、hidden（隐藏）和 inherit（继承），默认值为 inherit

> 提示：与display属性不同的是，visibility 属性隐藏元素是，仍然会为元素保留显示空间

下举一例：

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <p>下面其实有隐藏内容</p>
        <p class="hide">隐藏内容</p>
        <p>值为 "none" 的 display 属性不占用空间</p>
        <p>下面其实有隐藏内容</p>
        <p class="hidden">隐藏内容</p>
        <p>值为 "hidden" 的 visibility 属性会占用空间</p>
    </body>
</html>
```

CSS：

```css
p.hid{
    display: none;
}
p.hidden{
    visibility: hidden;
}
```

效果如下：

![19](C:\Users\zhdqlym\Desktop\CSS\pictures\19.png)



#### 5.1.4 列表属性

用于设置网页中列表的格式，包括：list-style、list-style-image、list-style-position、及 list-style-type

- list-style-image 属性使网页设计者可以指定图片作为列表项目的符号，取值为 url ( 图片URL ) 和 none，none为默认值
- list-style-position 属性可以设置列表元素标记的位置，取值可以说 inside 或 outside，默认值是outside
- list-style-type 属性可以用来设置项目符号和编号的样式，取值如下：
  - disc：默认值（实心黑点）
  - circle：空心圆圈
  - square：方形黑块
  - decimal：十进制数
  - lower-roman：小写罗马数字
  - upper-roman：大写罗马数字
  - lower-alpha：小写字母
  - upper-alpha：大写字母
  - none：无

HTML：

```html
<html>
    <head>
        <title>CSS用例</title>
        <link rel="stylesheet" href="mycss.css">
    </head>
    <body>
        <ul class="a">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
        <ul class="b">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
        <ul class="c">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
        <ul class="d">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
        <ol class="a">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ol>
        <ol class="b">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ol>
        <ol class="c">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ol>
    </body>
</html>
```

CSS：

```css
ul.a{
    list-style-type: circle;
}
ul.b{
    list-style-type: square;
}
ul.c{
    list-style-position: outside;
}
ul.d{
    list-style-image: url(./pictures/16.png);
}
ol.a{
    list-style-type: lower-alpha;
}
ol.b{
    list-style-type: upper-roman;
}
ol.c{
    list-style-position: inside;
}
```

效果如图：

![17](C:\Users\zhdqlym\Desktop\CSS\pictures\17.png)



### 5.2 特效属性

#### 5.2.1 圆角矩形效果

圆角矩形效果可以使用 border-radius 属性来得到，语法如下：

border-radius：1-4 length|% [/ 1-4 length|%]?;

如果我们希望设置 class='_button' 的按钮为圆角矩形，且圆角半径为10px，可以如下编写样式代码：

```css
._button{
    border-radius: 20px;
    height: 100px;
    width: 150px;
}
```

效果如下：

![1](C:\Users\zhdqlym\Desktop\CSS\pictures\1.png)



#### 5.2.2 边框阴影效果

边框阴影效果可以使用 box-shadow 属性来得到，语法如下：

box-shadow：[h-shadow v-shadow blur spread color inset ]+

其中：

- h-shadow 和 v-shadow 分别表示阴影在水平方向和垂直方向上的偏移量
- blur：阴影的模糊距离，只能设置 0（默认值）或正值，值越大表示阴影边缘越模糊
- spread：阴影的扩展半径（可省略，默认值为 0）
- color：阴影的颜色
- inset：设置该值后表示内阴影，不设置则表示外阴影

如果我们想要为 class="text" 的 div 元素加上边框阴影效果：水平方向和垂直方向均偏移15px，模糊距离为5px，阴影颜色为灰色，则可以如下编写样式代码：

```css
.text{
    height: 100px;
    width: 150px;
    background-color: cyan;
    box-shadow: 10px 10px 5px gray;
}
```

效果如图：

![2](C:\Users\zhdqlym\Desktop\CSS\pictures\2.png)



#### 5.2.3 文本阴影效果

文本阴影效果可以使用 text-shadow 属性来得到，语法如下：

text-shadow [h-shadow v-shadow blue color]+;

其中：

- h-shadow 和 v-shadow 分别表示阴影在水平方向和垂直方向上的偏移量
- blur：阴影的模糊距离，只能设置 0（默认值）或正值，值越大表示阴影边缘越模糊
- color：阴影的颜色

如果我们希望为 h1 元素设置文本阴影效果，此阴影在水平方向和垂直方向均偏移10px，模糊距离为3px，颜色为灰色，则可以如下编写样式代码：

```css
h1{
    text-shadow: 10px 10px 3px gray;
}
```

效果如图：

![3](C:\Users\zhdqlym\Desktop\CSS\pictures\3.png)



#### 5.2.4 过渡效果

过渡效果是元素从一种样式逐渐改变为另一种样式的效果，可以用 transition 属性实现吗，语法如下：

transition: property duration timing-function delay;

其中：

- property 规定设置过渡效果的 CSS 属性的名称，不可省略
- duration 规定完成过渡效果的时间，不可省略
- timing-function 规定过渡效果的速度曲线，可以省略
- delay 规定过渡效果效果何时开始，可以省略

如果我们希望鼠标悬浮在 class="_button" 的按钮上时，按钮的字体大小从 20px 逐渐过渡变化到 35px，过渡时间为 1s，则可以如下编写样式代码：

```css
._button{
    border-radius: 20px;
    height: 100px;
    width: 150px;
    font-size: 20px;
}
._button:hover{
    font-size: 35px;
    transition: 1s;
}
```

效果如下：

![6](C:\Users\zhdqlym\Desktop\CSS\pictures\6.gif)



### 5.3 本章习题

1. CSS的分类属性包括：(cursor属性)、(display属性)、(visibility属性) 和 (列表属性)。

2. (border-radius)、(box-shadow)、(text-shadow)分别是圆角矩形效果、边框阴影效果、文本阴影效果。

3. 以下说法错误的是：D

   A.    property 规定设置过渡效果的 CSS 属性的名称，不可省略

   B.    duration 规定完成过渡效果的时间，不可省略

   C.    timing-function 规定过渡效果的速度曲线，可以省略

   D.    delay 规定过渡效果效果何时开始，不可省略



## 六、CSS3 样式的优先级

### 6.1 一般性规则

大多数浏览器中，样式的优先级遵循“就近优先“的原则，也就是说，距离所修饰对象越近的样式优先级越高。因此，在标记符中直接用 style 属性定义的样式优先级最高，而用 style 标记符和用 link 标记符链接的样式，谁离所修饰对象越近，谁优先级越高



### 6.2 样式优先级的计算

CSS 规定了一个计算样式优先级的方法：

对于一个任意选择器，它的优先级可以由一个（a,b,c）三元组确定，其中 a 的权重最高，c 的最低

计算规则如下：

a = 选择器中 id 选择器的个数

b = 选择其中 class 选择器、伪类选择器、属性选择器的个数

c = 选择器中元素选择器的个数

最后具体优先级可以用 a\*100 + b\*10 + c 来确定，值越大表示优先级越高



### 6.3 本章习题

1. 大多数浏览器中的样式优先级原则是 (“就近优先”)。

2. 计算优先级时，a = 选择器中 id 选择器的个数，b = 选择其中 class 选择器、伪类选择器、属性选择器的个数，c = 选择器中元素选择器的个数，它们的权重分别是 (100、10、1)



## 七、CSS实践案例——“次世界”游戏新建用户界面设计

### 7.1 网页布局

在用CSS与HTML编写简单网页时，我们首先要对网页的布局进行构思，即我们希望页面大概看起来是什么样子的，每一部分应该在哪，大小是多少。首先编写HTML部分：

```html
<html>
    <head>
        <title>次世界-新建用户界面</title>
        <link rel="stylesheet" href="styleLogin.css"/>
    </head>
    <body>
        <div class="container">
            <div class="panel">
                <div class="content">
                    <div class="switch">
                        <h1 id="login">新建用户</h1>
                    </div>
                    <form action="">
                        <div id="userName" class="input" aria-placeholder="用户名"><input type="text" id="Nname"></input></div>
                        <div id="userName" class="input" aria-placeholder="密码"><input type="password" id="Npass"></input></div>
                        <div id="userName" class="input" aria-placeholder="确认密码"><input type="password" id="NpassCon"></input></div>
                        <button type="button" class="button" onclick="newgame()">新冒险</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
```

可以看出，此网页的 HTML 相较于之前 HTML 指南实例网页精简许多，那是因为所有的属性均在外部站点样式表“styleLogin.css”中。

接下来我们看到 CSS 部分：

首先我们要对整个页面的背景进行设计，代码如下：

```css
body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("背景图1.jpg") no-repeat;
}
```

这里通过标记符选择器制定了页面的背景图面并将其设定为在水平、垂直方向均不重复，并且规定了页面中所有元素按其中轴线居中对齐

然后就是新建用户框的属性设计，代码如下：  

```css
.container {
    position: relative;
    width: 24rem;
}

.panel {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    width: 400px;
    padding: 40px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.5);
    border-radius: 10px;
}
```

这里通过类选择器指定了两个 class 分别为 container、panel 的 div 块的属性，container 是最外层我们看不到的块，此处指定了其宽度并用 position=relative 规定其位置为相对位置，以对该块中内容起固定作用。panel 是我们能看到的新建用户框，此处指定了其宽度、背景颜色、阴影效果，并用 positive=absolute、top、left 指定了其相对 container 的绝对位置，并用 border-radius 设计了圆角效果



### 7.2 细节设计

在做好网页布局后，我们就该对新建用户框中的细节进行设计。首先是标题，即“新建用户”四个字，代码如下

```css
.switch h1 {
    text-align: center;
    font-size: 1.4rem;
    color: rgba(5, 155, 201, 0.8);
    border-bottom: rgba(5, 155, 201, 0.8) solid 2px;
    cursor: default;
}
```

此处使用后代选择器，指定 class 为 switch 的元素中的 h1 子元素，指定了标题的字体大小、颜色、对齐方式，并用 border-bottom 指定了下边框的颜色、虚实以及粗细，最后用 cursor=default 制定了鼠标移动到此处时为默认光标

接下来我们对表单中几个输入框进行设计，代码如下：

```css
form.input {
    position: relative;
    opacity: 1;
    width: 100%;
    margin: 2rem 0 0;
    height: 42px;
}
```

此处依然使用后代选择器，指定 form 元素中 class 为 input 的子元素，指定了表单中输入框的位置、宽度、高度、对齐方式、并用 opacity 指定其为完全不透明

随后我们对输入框中输入的内容进行属性设置，代码如下：

```css
.input input {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    border-bottom: .1rem solid rgba(5, 155, 201, 0.8);;
    color: rgba(37, 215, 202, 0.84);
    font-size: 1rem;
}
```

此处依然使用后代选择器，指定 class 为 input 的元素中的 input 子元素，注意此处第一个 input 为类，第二个为标记符，并不是同一个东西，这样做易造成混淆，所以不建议用标记符单词作为 id、class 的名字。此处制定了输入内容的背景、颜色、宽度、大小、下边框，并用 outline=none 规定了输入内容不偏离输入框轮廓

接下来我们设计最下方的按钮，代码如下：

```css
form button {
    display: block;
    border: none;
    outline: none;
    margin: 2rem 61px 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(90deg, #8a8fff, rgb(216, 174, 255));
    box-shadow: 0 0 8px #8a8fff;
    cursor: pointer;
}
```

此处依然使用后代选择器，但因为 form、button均为标记符，所以该 CSS 样式相较于前几个优先级较低。此处指定了按钮的宽度、高度、边框、阴影、对齐方式，并用 outline=none 确保按钮上内容不会离开按钮，用 border-radius 将按钮设计为圆形，用cursor=pointer 规定鼠标悬停时会变为“pointer”光标

至此，整个网页设计完毕，其效果如下图：

![index1](C:\Users\zhdqlym\Desktop\CSS\pictures\index1.png)



### 7.3 动态效果

为了使网页更加动感有活力，我们在制作网页时应为其添加一些动态效果，以按钮为例，代码如下：

```css
form button:hover {
    border: none;
    outline: none;
    margin: 2rem -7px 0;
    width: 100%;
    height: 3.5rem;
    border-radius: 3rem;
    background: linear-gradient(90deg, rgba(138, 143, 255, 0.75), rgba(216, 174, 255, 0.75));
    box-shadow: 0 0 8px #8a8fff;
    cursor: pointer;
    color: rgba(0,0,0,0.6);
    transition: .4s;
}
```

此处结合使用后代选择器与伪类选择器，指定 form 的子元素 button 在鼠标悬停时的状态。此处将 width 改为 100% 使得按钮变为一个更大的圆角矩形，并用 rgba 将背景的不透明度稍稍调高，最后通过 transition 设置过渡动画效果。按钮在鼠标悬停时效果如下图：

![index2](C:\Users\zhdqlym\Desktop\CSS\pictures\index2.png)



### 7.4 学习总结

至此，我们已经完成了“次世界”网页的设计。我们总结以下几点：

（1）在设计网页时要先对网页整体进行布局设计，整体设计好后再对细节进行设计

（2）要学会组合使用多种CSS选择器以对想调整的元素进行精准定位

（3）学会动态效果的制作可以让整个网页看起来更加有活力





## 附录

### 附录1 参考资料

1. 网页设计与制作（HTML5+CSS3+JavaScript）第4版|微课版   赵丰年 编著
2. 菜鸟教程：https://www.runoob.com/
3. W3school：https://www.w3school.com.cn/



### 附录2 CSS 属性大全表

#### 1. CSS文字属性：

​	color : #999999; /\*文字颜色\*/
​	font-family : 宋体,sans-serif; /\*文字字体\*/
​	font-size : 9pt; /\*文字大小\*/
​	font-style:itelic; /\*文字斜体\*/
​	font-variant:small-caps; /\*小字体\*/
​	letter-spacing : 1pt; /\*字间距离\*/
​	line-height : 200%; /\*设置行高\*/
​	font-weight:bold; /\*文字粗体\*/
​	vertical-align:sub; /\*下标字\*/
​	vertical-align:super; /\*上标字\*/
​	text-decoration:line-through; /\*加删除线\*/
​	text-decoration: overline; /\*加顶线\*/
​	text-decoration:underline; /\*加下划线\*/
​	text-decoration:none; /\*删除链接下划线\*/
​	text-transform : capitalize; /\*首字大写\*/
​	text-transform : uppercase; /\*英文大写\*/
​	text-transform : lowercase; /\*英文小写\*/
​	text-align:right; /\*文字右对齐\*/ 
​	text-align:left; /\*文字左对齐\*/
​	text-align:center; /\*文字居中对齐\*/
​	text-align:justify; /\*文字分散对齐\*/
​	vertical-align:top; /\*垂直向上对齐\*/
​	vertical-align:bottom; /\*垂直向下对齐\*/
​	vertical-align:middle; /\*垂直居中对齐\*/
​	vertical-align:text-top; /\*文字垂直向上对齐\*/
​	vertical-align:text-bottom; /\*文字垂直向下对齐\*/



#### 2. CSS 边框空白

​	padding-top:10px; /\*上边框留空白\*/
​	padding-right:10px; /\*右边框留空白\*/
​	padding-bottom:10px; /\*下边框留空白\*/
​	padding-left:10px; /\*左边框留空白\*/



#### 3. CSS符号属性

​	list-style-type:none; /\*不编号\*/
​	list-style-type:decimal; /\*阿拉伯数字\*/
​	list-style-type:lower-roman; /\*小写罗马数字\*/
​	list-style-type:upper-roman; /\*大写罗马数字\*/
​	list-style-type:lower-alpha; /\*小写英文字母\*/
​	list-style-type:upper-alpha; /\*大写英文字母\*/
​	list-style-type:disc; /\*实心圆形符号\*/
​	list-style-type:circle; /\*空心圆形符号\*/
​	list-style-type:square; /\*实心方形符号\*/
​	list-style-image:url(/dot.gif); /\*图片式符号\*/
​	list-style-position: outside; /\*凸排\*/
​	list-style-position:inside; /\*缩进\*/



#### 4. CSS背景样式

​	background-color:#F5E2EC; /\*背景颜色\*/ 
​	background:transparent; /\*透视背景\*/
​	background-image : url(/image/bg.gif); /\*背景图片\*/
​	background-attachment : fixed; /\*浮水印固定背景\*/
​	background-repeat : repeat; /\*重复排列-网页默认\*/
​	background-repeat : no-repeat; /\*不重复排列\*/
​	background-repeat : repeat-x; /\*在x轴重复排列\*/
​	background-repeat : repeat-y; /\*在y轴重复排列\*/

指定背景位置：
	background-position : 90% 90%; /\*背景图片x与y轴的位置\*/
	background-position : top; /\*向上对齐\*/
	background-position : buttom; /\*向下对齐\*/
	background-position : left; /\*向左对齐\*/
	background-position : right; /\*向右对齐\*/
	background-position : center; /\*居中对齐\*/



#### 5. CSS连接属性

​	a /\*所有超链接\*/
​	a:link /\*超链接文字格式\*/ 
​	a:visited /\*浏览过的链接文字格式\*/
​	a:active /\*按下链接的格式\*/
​	a:hover /\*鼠标转到链接\*/
鼠标光标样式：
​	链接手指 CURSOR: hand
​	十字体 cursor:crosshair
​	箭头朝下 cursor:s-resize
​	十字箭头 cursor:move
​	箭头朝右 cursor:move
​	加一问号 cursor:help
​	箭头朝左 cursor:w-resize
​	箭头朝上 cursor:n-resize
​	箭头朝右上 cursor:ne-resize
​	箭头朝左上 cursor:nw-resize
​	文字I型 cursor:text
​	箭头斜右下 cursor:se-resize
​	箭头斜左下 cursor:sw-resize
​	漏斗 cursor:wait
光标图案(IE6)  p {cursor:url(“光标文件名.cur”),text;}



#### 6. CSS框线一览表

​	border-top : 1px solid #6699cc; /\*上框线\*/
​	border-bottom : 1px solid #6699cc; /\*下框线\*/
​	border-left : 1px solid #6699cc; /\*左框线\*/ 
​	border-right : 1px solid #6699cc; /\*右框线\*/
以上是建议书写方式,但也可以使用常规的方式 如下:
​	border-top-color : #369 /\*设置上框线 top 颜色\*/
​	border-top-width :1px /\*设置上框线 top 宽度\*/
​	border-top-style : solid/\*设置上框线 top 样式\*/
其他框线样式
​	solid /\*实线框\*/
​	dotted /\*虚线框\*/
​	double /\*双线框\*/
​	groove /\*立体内凸框\*/
​	ridge /\*立体浮雕框\*/
​	inset /\*凹框\*/
​	outset /\*凸框\*/



#### 7. CSS表单运用

​	文字方块 
​	按钮 
​	复选框 
​	选择钮 
​	多行文字方块 
​	下拉式菜单 选项1选项2



#### 8. CSS边界样式

​	margin-top:10px; /\*上边界\*/
​	margin-right:10px; /\*右边界值\*/
​	margin-bottom:10px; /\*下边界值\*/
​	margin-left:10px; /\*左边界值\*/



#### 9. CSS滤镜属性

Filter：在样式中加上滤镜特效。

1. Alpha：设置透明度
   Alpha(Opacity=?, FinishOpacity=?, Style=?, StartX=?, StartY=?, FinishX=?, FinishY=?) 
   Opacity：透明度级别，范围是0-100，0代表完全透明，100代表完全不透明。FinishOpacity：设置渐变的透明效果时，用来指定结束	时的透明度，范围也是0 到 100。Style：设置渐变透明的样式，值为0代表统一形状、1代表线形、2代表放射状、3代表长方形。StartX和StartY：代表渐变透明效果的开始X和Y坐标。 FinishX和FinishY：代表渐变透明效果结束X和Y 的坐标。 
2. BlendTrans：图像之间的淡入和淡出的效果 
   BlendTrans(Duration=?) Duration：淡入或淡出的时间。注意：这个滤镜必须配合JS建立图片序列，才能做出图片间效果。
3. Blur：建立模糊效果 
   Blur(Add=?, Direction=?, Strength=?) Add：是否单方向模糊，此参数是一个布尔值，true（非0）或false（0）。 Direction：设置模糊的方向，其中0度代表垂直向上，然后每45度为一个单位。 Strength：代表模糊的象素值。 
4. Chroma：把指定的颜色设置为透明
   Chroma(Color=?) Color：是指要设置为透明的颜色。
5. DropShadow：建立阴影效果 
   DropShadow(Color=?, OffX=?, OffY=?, Positive=?) Color：指定阴影的颜色。OffX：指定阴影相对于元素在水平方向偏移量，整数。 OffY：指定阴影相对于元素在垂直方向偏移量，整数。 Positive：是一个布尔值，值为true（非0）时，表示为建立外阴影；为false(0)，表示为建立内阴影。 
6. FlipH：将元素水平反转 
7. FlipV：将元素垂直反转 
8. Glow：建立外发光效效果 
   Glow(Color=?, Strength=?) 
   Color：是指定发光的颜色。 
   Strength：光的强度，可以是1到255之间的任何整数，数字越大，发光的范围就越大。
9. Gray：去掉图像的色彩，显示为黑白图象 
10.　　Invert：反转图象的颜色，产生类似底片的效果 
11.　　Light：放置光源的效果，可以用来模拟光源在物体上的投影效果 注意：此效果需要用JS设置光的位置和强度。
12.　　Mask：建立透明遮罩 
Mask(Color=?) Color：设置底色，让对象遮住底色的部分透明。
13.　　RevealTrans：建立切换效果
RevealTrans(Duration=?, Transition=?) 
Duration：是切换时间，以秒为单位。 
Transtition：是切换方式，可设置为从0到23。
注意：如果做页面间的切换效果，可以在<head>区加上一行代码：<Meta http-equiv=Page-enter content=revealTrans(Transition=?,Duration=?) >。如果用在页面里的元素必须配合JS使用。
14.　　Shadow：建立另一种阴影效果 Shadow(Color=?, Direction=?) Color：是指阴影的颜色。 
Direction：是设置投影的方向，0度代表垂直向上，然后每45度为一个单位。 
15.　　Wave：波纹效果 
Wave(Add=?, Freq=?, LightStrength=?, Phase=?, Strength=?) Add：表示是否显示原对象，0表示不显示，非0表示要显示原对象。 Freq：设置波动的个数。LightStrength：设置波浪效果的光照强度，从0到100。0表示最弱，100表示最强。 Phase：波浪的起始相角。从0到100的百分数值。（例如：25相当于90度，而50相当于180度。） Strength：设置波浪摇摆的幅度。 
16.　　Xray：显现图片的轮廓，X光片效果 
注意：在使用CSS滤镜时，必须使用在有区域的元素，比如表格，图片等。而文本，段落这样没有区域的元素不能使用CSS滤镜，对这样的元素我们可以设置元素的Height和Width样式或坐标来实现。"



### 附录3 练习题

1. 判断：

   （1）内容与表现分离是使用CSS的一大优势（√）

   （2）可以使用%、em、ex作为css的长度单位（√）

   （3）站点样式的优先级高于网页样式（×）

   （4）如果想对网页中某个独一无二的元素设置特定效果，可以使用类选择器（×）

   （5）font属性的取值之间要用逗号分割（√）

   （6）text-align的默认属性是center（×）

2. 填空题：

   （1）css三种样式分别是 ( 站点样式、网页样式和行内样式 )

   （2）用于设置字体粗细的属性是 (font-weight)

   （3）在font属性中，(font-style、 font-variant、 font-weight) 这3个属性可有可无，如果有的话，按照任意顺序首先出现; (font-size) 和(font- family)这两个属性必须有，按照 (font- size 在先 font-family 在后) 的顺序出现

   （4）用于设置高度的属性是：(height)

   （5）.如果你有一个\<p>元素，它的 font-size 为10rem, 当用户改变浏览器窗口大小时，该元素的字体 (不会) 响应式改变

3. 简答题：

   （1）css区分大小写吗？

```css
ul{
	MaRgIn: 10px;
}
```

​		这种写法是否正确？

​	  （2）简要说明你所知道的文本属性及其作用

​	  （3）使用 css 制作一个网页，要求合理使用外部样式表、页内样式表、标记符选择器、ID选择器、类选择器和伪类选择器。
