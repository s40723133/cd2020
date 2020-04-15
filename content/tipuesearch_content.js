var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK2', 'text': '在這周將python版本更新至3.8.2，並且於直播開會中分出了各個任務的成員 \n \n', 'tags': '', 'url': 'WEEK2.html'}, {'title': 'WEEK3', 'text': '\n \n', 'tags': '', 'url': 'WEEK3.html'}, {'title': '解釋亂數分組之程序', 'text': '1.random模組的應用 \n \n 參考資料: https://www.runoob.com/python/func-number-random.html \n \n \n', 'tags': '', 'url': '解釋亂數分組之程序.html'}, {'title': 'WEEK4', 'text': '1.嘗試利用random.sample的方式抽出組別 \n 但是由於對python的不熟悉無法如願的打出有效的指令。 \n import random\n\n\nteam = (\'1\', \'2\', \'3\', \'4\', \'5\', \'6\', \'7\')\n\n\ndef f1():\n    # 方法一：（假設沒有重複元素）編立集合，將尚未選擇的元素组成新集合。\n    r1 = random.sample(team, 3)\n    r2 = []\n    for item in team:\n        if item not in r1:\n            r2.append(item)\n    print(\'result1: %s\' % random.sample(r2, 2))\n\n\ndef f2():\n    # 方法二：（假設沒有重複元素）使用集合 set，計算差集。\n    r1 = random.sample(team, 3)\n    r2 = tuple(set(team) - set(r1))\n    print(\'result2: %s\' % random.sample(r2, 2))\n\n\ndef f3():\n    # 方法三：（假設沒有重複元素）隨機選擇集合元素的下標，而不是元素值。\n    index_r1 = random.sample(range(len(team)), 3)\n    # r1 = [team[i] for i in index_r1]\n    remain_index = tuple(set(range(len(team))) - set(index_r1))\n    index_r2 = random.sample(remain_index, 2)\n    r2 = [team[i] for i in index_r2]\n    print(\'result3: %s\' % r2) \n \n 參考 https://segmentfault.com/q/1010000014061245 \n 2.利用random.shffle的方式洗出組別 \n import random\n#這邊我們從http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0767 抓取資料\ngroupList=[[\'40723104\', \'40723107\', \'40723114\', \'40723115\', \'40723118\', \'40723122\', \'40723123\', \'40723140\', \'40723149\', \'40723151\', \'40723153\', \'40723154\', \'40723155\', \'40623143\', \'40723108\', \'40723127\', \'40723132\', \'40723133\', \'40723137\', \'40723141\', \'40723143\', \'40723144\', \'40723147\', \'40723148\', \'40723150\', \'40723103\', \'40723110\', \'40723112\', \'40723120\', \'40723125\', \'40723126\', \'40723128\', \'40723130\', \'40723139\', \'40723142\', \'40723145\', \'40723146\', \'40423155\', \'40723101\', \'40723102\', \'40723106\', \'40723111\', \'40723119\', \'40723121\', \'40723124\', \'40723134\', \'40723135\', \'40723136\', \'40723138\']]\n #設定變數0\ngroup=groupList[0]\n#將group數列隨機排列\nrandom.shuffle(group)\n#列印數列\nprint(group)\n#列印數列(1~12)\nprint(group[0:12])\n#列印數列(13~24)\nprint(group[12:24])\n#列印數列(25~36)\nprint(group[24:36])\n#列印數列(37~49)\nprint(group[36:49]) \n 詳見第二組組員 https://s40723147.github.io/cd2020/content/%E4%BA%82%E6%95%B8%E5%88%86%E7%B5%84.html \n 補充說明 \n shuffle(洗牌) \n import random\n\nnumber_list = [7,14,21,28,35,42,49,56,63,70]\n\nprint("原始列表：",number_list)\n\nrandom.shuffle(number_list) #shuffle方法\n\nprint("第一次洗牌之後的列表：",number_list)\n\nrandom.shuffle(number_list)\n\nprint("第二次洗牌之後列出：",number_list)\n\n原始列表： [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]\n\nfirst shuffle：之後的列表： [35, 28, 70, 14, 21, 63, 7, 49, 42, 56]\n\n第二次洗牌之後列出： [21, 7, 70, 28, 56, 14, 63, 42, 35, 49]\n\n\n\n原文網址：https://kknews.cc/code/z9vx6zg.html \n 我們可以從這了解到shuffle是一個將數列重新排列的方式 \n 接著我們利用 \n #列印數列\nprint(group)\n#列印數列(1~12)\nprint(group[0:12])\n#列印數列(13~24)\nprint(group[12:24])\n#列印數列(25~36)\nprint(group[24:36])\n#列印數列(37~49)\nprint(group[36:49]) \n 的方式可以以不重複的方法分出4組組員 \n 變數 \n 「變數」在處理資料上是非常重要的元素，它可以用來儲存我們要處理的資料，也可以用來儲存處理之後的資料，等到資料都處理完畢之後，可以隨時取出使用。 \n 其實，變數就是在電腦記憶體裡面的一個位置空間，早期的電腦是以記憶體的位置編號（如：00A0:FFEC這樣子的型式）來表示，但是這些數字對人來說沒有意義，所以在程式語言中才會以一些英文字元、數字元以及一些符號來代替某些位置，以方便我們在程式中使用。 \n \n \n', 'tags': '', 'url': 'WEEK4.html'}, {'title': 'WEEK5', 'text': '\n 這周我們分配了翻譯工作 \n 我是負責翻譯機械設計過程 MechanicalDesignProcess 的一員 \n', 'tags': '', 'url': 'WEEK5.html'}, {'title': 'WEEK6', 'text': '直播討論內容 \n 翻譯過程 \n 因為影片太長，所以只擷取一小段 \n \n', 'tags': '', 'url': 'WEEK6.html'}, {'title': '機械設計過程', 'text': '來自 MechanicalDesignProcess.pdf \n', 'tags': '', 'url': '機械設計過程.html'}, {'title': '序章', 'text': '\xa0 本章介紹了設計如何用於電子產品，並定義了何謂“成功的設計”。 \n \xa0 我們將討論設計師在設置產品時扮演的角色，其中設計師需要思考整個產品開發圖、溝通、以及開始設計時要考慮的初始因素。 \n \xa0 在開始之前，我們先簡單地定義當我們談論一個“電子產品”時，它代表的是其中裝有電路板的產品，通常具有一些輸入/輸出設備，例如LCD。電子產品的例子包括手機、數位相機、超聲波牙刷。 \n \xa0 電子產品外殼是包圍並支撐電路的物件。外殼能讓消費者使用這個產品。外殼 的樣子來自各種原因，但是最必要的是保護電子設備（電路板和LCD），防止電子設備板從環境或物理顛簸（例如掉落產品）損毀。 \n \xa0 機盒可通過按鍵或按鈕訪問設備的輸入信息也許，並允許從設備傳輸信息。外殼提供結構，以便支持和保護電路板邏輯。近年來出現的是Apple iPhone 7或HP Spectre筆記本電腦（兩者都是在2016年的產品）都是已開發出一些非常有效的產品外殼的案例。    從本質上講，一種成功的外殼設計將是設計已符合產品的書面規格（spec），並且能在設定的成本和時間參數內完成。 \n 現在讓我們開始探索-設計這些機箱的過程。 \n \n', 'tags': '', 'url': '序章.html'}, {'title': '1-1設計指南', 'text': '\xa0 本章節在作為成功的設計指南時，以單一參考文獻的形式提供電子產品外殼的機械設計。 \n © Springer International Publishing AG, part of Springer Nature 2019 1 T. Serksnis, Designing Electronic Product Enclosures, https://doi.org/10.1007/978-3-319-69395-8_1 \n \xa0 讓我們分解上面句子中的一些詞以進一步定義何謂成功 \n 設計指南 \n \xa0 本文是一個起點、一個參考點。 \n \xa0 設計師將使用許多工作指導；此文本旨在提供一般幫助，並有助於擴大設計師的經驗以及組織的建立流程。 \n 電子產品外殼（EPE =電子產品外殼） \n \xa0 電子產品外殼是由內部和外部結構所組成的要素。它包括用於使用者使用的的任何硬件，以及用於連接電纜的連接器以及用戶所有接觸與看到的物件。 \xa0 許多電子機箱包含一個或多個PCBA（印刷電路板組件），外殼也必須保護它們使它們正常運作。 \n \xa0 外殼可以非常簡單，也可以非常複雜，也可以由數千個外殼組成。設計人員的首要任務之一是定義“系統”，這將在下一章中介紹。 \n \xa0 術語“enclosure”（在該文中）將處於較為簡單的範圍內，其方法是可以解釋到更複雜的設計情況。 \n EPE設計師 \n \xa0 負責設計電子產品外殼的人員，在很多情況下，它是機械工程師，但也可以是有知識背景的人或是具有機械工程專業或具有該學科經驗的人。 \n 一個優秀的EPE設計師將具有以下特徵： \n \n 理解並按照產品規格的能力 \n 能夠添加或創建新的產品規格 \n 為產品提出的問題創造新的解決方案 \n \n 因此，EPE設計人員必須既有創造力，又要遵循 項目的主要目標。 \n', 'tags': '', 'url': '1-1設計指南.html'}, {'title': '1-2定位整體團隊', 'text': '\xa0 本章節的目的是為了表達工程學（特別是機械工程學） 絕對不會是一個人設計產品；他們肯定是一組團隊。 團隊可以是由下列特徵定位； \n \n 團隊的規模 \n 位於一個位置或分佈在不同區域 \n 資源有限或可以使用近乎無限的資源 \n 是否擁有最新工具 \n 實現目標的動機 \n 是否擁有豐富的經驗 \n \n \xa0 整個工程工作包括多個設計項目。 這些項目包括： \n \n 電機工程 \n 軟件與固件工程 \n 機械工程（包括結構學和熱學） \n 工業工程 \n 系統工程 \n \n \xa0 因此，我們認識到機械工程只是整個設計其中的一部分。電子產品的所有工程設計，許多決策是與其他學科合作制定的。現代的產品設計應該要平衡並且在所有因素之間進行各種權衡。 \n \xa0 事實上，整個工程工作（第1.2節中的所有學科）只是產品發布（銷售）內的一部分工作。 \n \xa0 除了工程上的努力外，貢獻還來自以下幾組： \n \n \xa0\xa0市場行銷（包括來自銷售的投入）該組織負責產品的定位，即從客戶的角度定義客戶想要什麼以及產品是什麼。此“產品定義”通常以文檔型式讓工程組接收。 營銷還負責監督特定產品如何適應公司的整個產品線（或公司的部門）。 \n \n \xa0 EPE設計人員與市場營銷部門需要進行互動，以定義產品如何運作，該功能如何向客戶展示（用戶界面）以及對客戶呈現的產品外觀（工業設計）。 \n \n \xa0 製造組(營運組)該組負責整個製造流程，以及如何獲得材料與製造這些組件，組裝並交付給客戶。工程組產出的文檔，操作人員應該要能夠照著文檔製造符合產品規格的產品。 \n \n \xa0EPE設計人員需通過對製造零件的技術，向供應商在(質量/成本/外觀)之間做取捨來交給製造組製造。 \n \n \xa0測試組負責測試初始設計和最終設計。這部分可以直接通過機械設計組原有的的資源或為此設立特定測試功能的獨立組來完成。 \n \n \xa0\xa0EPE設計師通過執行或查看測試結果來檢測功能。在產品上進行的測試實際上是產品需求文檔（PRD）的一部分，並且必須證明該產品通過了該文檔中定義的測試。例如，如果PRD聲明產品必須承受一米高的跌落，則必須定義一項說明注意事項的測試如： \n \n 每一個物品多少滴 \n 該物品的撞擊面或角 \n 進行測試的環境（例如環境溫度) \n 統計問題（例如必須通過測試的單個項目數量) \n 測試順序（單元將進行的各種測試的順序） \n “測試通過”的定義（測試後功能或外觀的程度） \n \n \n \xa0 保證組確定單個零件是否在可接受最大公差，在單個產品規格（附圖）和已建立的總體公司標準中是否符合標準，品質控制是否與銷售戰術有關，而（公司）品質保證將與銷售戰術有關。 \n \n 大多數公司都有控制和監視產品品質的方法，並且肯定會涉及到客戶滿意度和服務問題。 \n \xa0\xa0EPE設計人員通過文檔指定的每個零件的可接受性限制來與該組互動，並且將所有零件包括在內。 通常可接受性限制採取以下形式： \n \n \n 圖紙指定的尺寸公差 \n \n \n 圖紙上註明的材料和鍍層規格 \n \n 圖紙上說明的外觀缺陷報廢標準 \n 如圖所示的功能規格 \n 確定零件文檔某些方面的“關鍵”性質 \n \n \n \xa0 服務組負責產品功能的維修，保修和退貨。它們有助於確任現場設備問題的解決方案。 \n \n EPE設計師通過合理設計的過程來拆卸和維修產品，從而與此組織互動。 當然，可靠的設計將減少維修的理由。也可以\n找到濫用產品的問題。 \n \n \xa0項目管理組負責追蹤以下項目： \n \n \n \n 時間分配–遵守約定的最後期限 \n \n \n 資源分配 \n \n \n 優先管理（針對單個項目以及與之競爭的項目相同的資源） \n \n \n 符合產品規格 \n \n 達到目標成本 \n 項目報告情況 \n \n EPE設計師通過報告對EPE的估計與該組織互動， 負責機械零件的所有單獨行項目的時間和資源。 這來自於於產品的概念化，設計，原型設計和測試，以及後續的最終版本文檔。 隨著里程碑的實現，時間和資源也會更新。 \n \n \n   高層管理組負責所有項目並需要了解該項目的所有人。 \n 項目更新將在項目期間的特定時間提供給該小組。 \n 高層管理人員將提供 對項目的領導力和遠見。 \n \n \n EPE設計師通常以間接方式與高層管理人員互動。\n項目狀態的報告通常在任何時候都是通過專案經理。 \n \xa0 \n', 'tags': '', 'url': '1-2定位整體團隊.html'}, {'title': '1-3產品需求', 'text': '成功是能滿足或超過項目需求題。 這是一個簡單 的陳述，但在協同設計的方面實際上卻非常複雜。 \n 如果項目達到了目標，則可以確定為成功。 這些目標可以通過以下一份或多項書面文件解決。 \n 產品需求文檔（PRD）該文檔可以有多種形式 名稱（因公司而異）。 基本上，“合約” 用來指定產品的基本功能。 它可以像幾個段落一樣簡單，也可以極其複雜。 它可以包含： (a) 產品將為客戶完成的描述–通常不會確切說明產品的工作方式。也就是說，關於“如何從這裡到達那裡”的細節並不明確。 該描述使用的是產品“最終外觀”上的形容文字，而不是“內部工作原理”的細節。後續文檔（或規格）也可以指定產品的詳細信息。 同樣，RPD會在市場營銷和工程師之間達成協議，關於產品將是什麼。 PRD的內容詳細信息可能有所不同。 在項目過程中，隨著元素的修訂或更新，（應該）進行更新並添加。在每次整體產品審查時，都應該在設計與PRD的符合程度上進行比較。 (b) 產品如何與客戶互動的說明。其中包括: \n \n 如何向客戶顯示信息或如何從客戶向產品獲取信息。這可能是視覺，聽覺或觸覺。 \n \n 產品的各種接口，例如連接器，開關或按鈕。 \n \n \n 用於向客戶提供信息的標籤或圖標 \n \n \n (c) 產品各種組 件的描述。也就是說，如果產品 （正在設計的產品）需要與其他設備連結才能在較大的系統中運行， 則需要對“系統”的各個部分進行描述 。因此，人們將需要圍繞著正在設計的產品的確切內容“劃界”。給客戶的“交付物”到底是什麼？ \n (d) 指示產品外觀部分的最終美學。顏色、紋理和工業設計通常都非常詳細。 \n (e) 產品將在其中運行和存儲的環境的清單，包括溫度，衝擊，跌落，振動，濕度，出水保護，運輸條件，海拔高度和特定的腐蝕性環境。 \n (f) 產品需要通過的所有測試的清單。這包括安全和監管標準，例如安全性保險性實驗室（UL），電磁干擾（EMI）的聯邦通信合規性（FCC）以及數百種其他合規性標準 這是當今設計界的重要組成部分。其中一些標準是針對特定國家/地區的，而另一些則在全球範圍內被接受。顯然，任何與醫療、食品或兒童玩具相關的，都必須通過自己的嚴格測試標準。 \n 內部測試報告這些表示測試結果的報告。這些是\n進行測試以表明已通過PRD中規定的要求。如果未通過測試，則將啟動行動計劃以改進\n產品並進行進一步測試。 \n 初始客戶的報告這是“alpha”或“ beta”測試，其中客戶反饋為正面或負面。希望客戶能衡量\n產品的價值。並且可以對產品進行合理的改進建議\n此反饋是可行的。“Alpha”測試通常使用內部人員在模擬實際客戶，而“ beta”測試是\n通常在發貨到實際（付款）之前與現有客戶進行測試。 項目管理報告 \n (a)支出（預期與實際）。這包括薪金，資本設備，工具等的支出。 對支出的監控可以便於\\對項目的真實“投資回報期”進行分析，並更好地預測未來項目的支出。 \n \xa0 \n (b) 里程碑日期的狀態（預期與實際的日期）：與支出一樣，監視項目完成其時間承諾的程度會指示出項目的真正“投資回報期”。 \n 分析未達到里程碑的位置可以為將來的項目提供更好的預測 \n 可以通過以下方法來衡量“成功”的持續分析（隨著產品的成熟度）： \n \xa0 \n 質量保證報告包含有關客戶滿意度和保修退貨的信息：必須迅速解決產品的任何問題或問題，以保護公司在行業中的聲譽。 如果需要進行修訂，則必須立即執行。因此，如果客戶滿意度達到一定的可靠性水平，產品設計團隊才算是成功。 \n 從項目的所有學科中分析“經驗教訓”：每個項目都將包含本可以做得更好的項目。應努力不斷改進。 應該要有一種方法可以收集產品設計過程中每個人有關需要改進哪些項目的反饋。這將提高未來項目的成功率。 \n \xa0 \n 預期銷售額與實際銷售額。 銷售數字可以表明該項目的成功–從某種意義上說，市場營銷已經預測了對產品的需求， 工程/運營已將產品交付給客戶，而客戶確實（確實）對產品進行了估價。 在相反的情況下，銷售額可能會低於預期（預測）。發生這種情況可能有多種原因（例如）： \n \n 產品並沒有確切地滿足客戶的需求可能價格太高或是性能太低。 \n 產品太晚進入市場了，也就是說，將產品投入市場花費的時間太長，客戶已經有了更好的選擇。 \n \n 產品進入市場太早（“參考者”不足）。 當產品的技術與當時（當時）客戶的價值觀不合或其他輔助技術不可用時， \n 就會發生這種情況，這將使該特定產品無法完全使用。 \n \n 可靠性低。 \n \n 以上所有原因都應放在“競爭舞台”上。也就是說，大多數產品在其市場中都有競爭。客戶將根據對性能，價格和質量的需求選擇購買。 新技術解決方案必須與舊解決方案競爭。 \n 產品發佈時很難獲得所有數據來確定產品設計工作的“成功”程度。 在以下情況下，產品設計通常會增加成功的風險： \n \n 里程碑完成日期被不合理地縮短了。 \n \n 該設計包含大量的全新組件。 \n \n 對項目的更改（添加）以難以控制的速度發生。 \n \n 成功的設計簡單描述為： \n \n 功能規格 \n 準時按計劃進度交付 \n 以預計的成本交貨 \n \n 當然，項目可能會超出功能，可能會提前交付，甚至成本更低。 這將是值得慶祝的原因（儘管需要進行一些檢查，以了解“實際情況”與“可預測因素”為何不匹配的原因）。 \n 然而，在上述“成功設計的簡單陳述”的背後有一些\n影響很大，而且不是那麼“簡單”。讓我對以上三個變量進行一些分解。 這三個方面在幾個層面上相互關聯。 \n 1-3-1功能規格 \n \xa0 \n', 'tags': '', 'url': '1-3產品需求.html'}]};