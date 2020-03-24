var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK2', 'text': '在這周將python版本更新至3.8.2，並且於直播開會中分出了各個任務的成員 \n', 'tags': '', 'url': 'WEEK2.html'}, {'title': '解釋亂數分組之程序', 'text': '', 'tags': '', 'url': '解釋亂數分組之程序.html'}, {'title': '1.random模組的應用', 'text': '\n 參考資料: https://www.runoob.com/python/func-number-random.html \n \n \n', 'tags': '', 'url': '1.random模組的應用.html'}, {'title': 'WEEK3', 'text': '', 'tags': '', 'url': 'WEEK3.html'}, {'title': '1.嘗試利用random.sample的方式抽出組別', 'text': "但是由於對python的不熟悉無法如願的打出有效的指令。 \n import random\n\n\nteam = ('1', '2', '3', '4', '5', '6', '7')\n\n\ndef f1():\n    # 方法一：（假設沒有重複元素）編立集合，將尚未選擇的元素组成新集合。\n    r1 = random.sample(team, 3)\n    r2 = []\n    for item in team:\n        if item not in r1:\n            r2.append(item)\n    print('result1: %s' % random.sample(r2, 2))\n\n\ndef f2():\n    # 方法二：（假設沒有重複元素）使用集合 set，計算差集。\n    r1 = random.sample(team, 3)\n    r2 = tuple(set(team) - set(r1))\n    print('result2: %s' % random.sample(r2, 2))\n\n\ndef f3():\n    # 方法三：（假設沒有重複元素）隨機選擇集合元素的下標，而不是元素值。\n    index_r1 = random.sample(range(len(team)), 3)\n    # r1 = [team[i] for i in index_r1]\n    remain_index = tuple(set(range(len(team))) - set(index_r1))\n    index_r2 = random.sample(remain_index, 2)\n    r2 = [team[i] for i in index_r2]\n    print('result3: %s' % r2) \n \n 參考 https://segmentfault.com/q/1010000014061245 \n", 'tags': '', 'url': '1.嘗試利用random.sample的方式抽出組別.html'}, {'title': '2.利用random.shffle的方式洗出組別', 'text': "import random\n#這邊我們從http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0767 抓取資料\ngroupList=[['40723104', '40723107', '40723114', '40723115', '40723118', '40723122', '40723123', '40723140', '40723149', '40723151', '40723153', '40723154', '40723155', '40623143', '40723108', '40723127', '40723132', '40723133', '40723137', '40723141', '40723143', '40723144', '40723147', '40723148', '40723150', '40723103', '40723110', '40723112', '40723120', '40723125', '40723126', '40723128', '40723130', '40723139', '40723142', '40723145', '40723146', '40423155', '40723101', '40723102', '40723106', '40723111', '40723119', '40723121', '40723124', '40723134', '40723135', '40723136', '40723138']]\n #設定變數0\ngroup=groupList[0]\n#將group數列隨機排列\nrandom.shuffle(group)\n#列印數列\nprint(group)\n#列印數列(1~12)\nprint(group[0:12])\n#列印數列(13~24)\nprint(group[12:24])\n#列印數列(25~36)\nprint(group[24:36])\n#列印數列(37~49)\nprint(group[36:49]) \n 詳見第二組組員 https://s40723147.github.io/cd2020/content/%E4%BA%82%E6%95%B8%E5%88%86%E7%B5%84.html \n 補充說明 \n", 'tags': '', 'url': '2.利用random.shffle的方式洗出組別.html'}, {'title': 'shuffle(洗牌)', 'text': 'import random\n\nnumber_list = [7,14,21,28,35,42,49,56,63,70]\n\nprint("原始列表：",number_list)\n\nrandom.shuffle(number_list) #shuffle方法\n\nprint("第一次洗牌之後的列表：",number_list)\n\nrandom.shuffle(number_list)\n\nprint("第二次洗牌之後列出：",number_list)\n\n原始列表： [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]\n\nfirst shuffle：之後的列表： [35, 28, 70, 14, 21, 63, 7, 49, 42, 56]\n\n第二次洗牌之後列出： [21, 7, 70, 28, 56, 14, 63, 42, 35, 49]\n\n\n\n原文網址：https://kknews.cc/code/z9vx6zg.html \n 我們可以從這了解到shuffle是一個將數列重新排列的方式 \n 接著我們利用 \n #列印數列\nprint(group)\n#列印數列(1~12)\nprint(group[0:12])\n#列印數列(13~24)\nprint(group[12:24])\n#列印數列(25~36)\nprint(group[24:36])\n#列印數列(37~49)\nprint(group[36:49]) \n 的方式可以以不重複的方法分出4組組員 \n', 'tags': '', 'url': 'shuffle(洗牌).html'}, {'title': '變數', 'text': '「變數」在處理資料上是非常重要的元素，它可以用來儲存我們要處理的資料，也可以用來儲存處理之後的資料，等到資料都處理完畢之後，可以隨時取出使用。 \n 其實，變數就是在電腦記憶體裡面的一個位置空間，早期的電腦是以記憶體的位置編號（如：00A0:FFEC這樣子的型式）來表示，但是這些數字對人來說沒有意義，所以在程式語言中才會以一些英文字元、數字元以及一些符號來代替某些位置，以方便我們在程式中使用。 \n', 'tags': '', 'url': '變數.html'}]};