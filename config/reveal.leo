<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>封面投影片</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624142233.1"><vh>投影片</vh>
<v t="leo.20200624142233.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624154636.1"><vh>投影片</vh>
<v t="leo.20200624154636.3"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624142240.1"><vh>投影片</vh>
<v t="leo.20200624142240.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624142242.1"><vh>投影片</vh>
<v t="leo.20200624142242.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624155105.1"><vh>投影片</vh>
<v t="leo.20200624155105.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624155103.1"><vh>投影片</vh>
<v t="leo.20200624155103.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624155917.1"><vh>投影片</vh>
<v t="leo.20200624155917.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624155934.1"><vh>投影片</vh>
<v t="leo.20200624155934.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624160319.1"><vh>投影片</vh>
<v t="leo.20200624160319.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624160321.1"><vh>投影片</vh>
<v t="leo.20200624160321.2"><vh>封面投影片內容</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## 協同產品設計實習

### 40723133

&lt;small&gt;
Created by [40723133](https://s40723133.github.io/cd2020/content/index.html)
&lt;/small&gt;



</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
40723133協同產品設計實習
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200624142233.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624142233.2"># WEEK1~5

創建新倉儲cd2020

更新可攜套件(python3) 

進行亂數分組部分


</t>
<t tx="leo.20200624142240.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624142240.2">## WEEK6~9

進行assigment2
</t>
<t tx="leo.20200624142242.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624142242.2">## assigment2

[翻譯MechanicalDesignProcess](https://s40723133.github.io/cd2020/content/%E6%A9%9F%E6%A2%B0%E8%A8%AD%E8%A8%88%E9%81%8E%E7%A8%8B.html)
## [開會紀錄](https://s40723133.github.io/cd2020/content/WEEK6~9.html)
</t>
<t tx="leo.20200624154636.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624154636.3">## [創建新倉儲cd2020](https://github.com/s40723133/cd2020)

## [python3.8](https://www.python.org/downloads/)

## [亂數分組程序](https://s40723133.github.io/cd2020/content/%E8%A7%A3%E9%87%8B%E4%BA%82%E6%95%B8%E5%88%86%E7%B5%84%E4%B9%8B%E7%A8%8B%E5%BA%8F.html)
</t>
<t tx="leo.20200624155103.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624155103.2">## [可動四輪車模擬](https://s40723133.github.io/cd2020/content/vrep%E5%8F%AF%E5%8B%95%E5%9B%9B%E8%BC%AA%E8%BB%8A%E6%A8%A1%E6%93%AC.html)


&lt;iframe width="556" height="310" src="https://www.youtube.com/embed/df28Bv9rxFA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;

</t>
<t tx="leo.20200624155105.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624155105.2">## WEEK10~14

可動四輪車模擬

coppeliasim導入模組

vrep虛擬主機設置</t>
<t tx="leo.20200624155917.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624155917.2">## [coppeliasim導入模組](https://s40723133.github.io/cd2020/content/coppeliasim%20%E5%B0%8E%E5%85%A5%E6%A8%A1%E5%9E%8B%E4%B8%A6%E6%A8%A1%E6%93%AC.html)

## [vrep虛擬主機設置](https://s40723133.github.io/cd2020/content/Vrep%E8%99%9B%E6%93%AC%E4%B8%BB%E6%A9%9F%E8%A8%AD%E7%BD%AE.html)</t>
<t tx="leo.20200624155934.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624155934.2">## WEEK15~17
[ipv6對外連線設定](https://s40723133.github.io/cd2020/content/WEEK15~17.html)

[ipv4對外連線設定](https://s40723133.github.io/cd2020/content/WEEK15~17.html)</t>
<t tx="leo.20200624160319.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624160319.2">## ipv6對外連線設定
&lt;iframe width="786" height="442" src="https://www.youtube.com/embed/eLr5oit_UUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</t>
<t tx="leo.20200624160321.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624160321.2">## CoppeliaSim補充資料
[BubbleRob教程](https://s40723133.github.io/cd2020/content/BubbleRob%E6%95%99%E7%A8%8B.html)

[建構純模型](https://s40723133.github.io/cd2020/content/Building%20a%20clean%20model%20tutorial%E5%BB%BA%E6%A7%8B%E7%B4%94%E6%A8%A1%E5%9E%8B.html)
</t>
</tnodes>
</leo_file>
