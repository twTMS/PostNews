# 活動訊息發布中心網

利用 [Trello](https://trello.com) 進行 Export Json API

## 資料來源

我們新建立了一個 [Trello Board](https://trello.com/b/y3bYmx6f/postnews) 此看板主要為訊息發布控管

## 目的

- 使用 **[Trello][1]** 來建立想要發布的消息，網站呈現發布訊息的資料， **[Trello][1]** 為控管中心
- 練習 [**git**][2] 與 [**gitflow**][3]
- 練習 **npm** 操作
- 練習 **unit test**
  1. 使用 **[cucumber][4]** 來建立測試
  1. 使用 [**nightmare**][6] 進行瀏覽器自動化測試
  1. 使用 [**istanbul**][5] 計算覆蓋率

## 套件簡易介紹

### [**Git Flow**][3]

![git flow](http://nvie.com/img/git-model@2x.png)

這是一個 [Git][2] branch 流程模型，建立自 2010 年，其操作語法簡易。簡單介紹
其模型架構為

- 主要分支 ( amin branches )
  這是永久存在的分支
  - master
    處在最新的正式版本的分支
  - develop
    處在開發階段的分支
- 支援分支 ( Supporting branches )
  - Feature branches
    開發新功能都從 develop 分支出來，完成後 merge 回 develop
  - Release branches
    準備要 release 的版本，只修 bugs 。從 develop 分支出來，完成後 merge 回 master 和 develop
  - Hotfix branches
    等不及 release 版本就必須馬上修 master 趕上線的情況。會從 master 分支出來，完成後 merge 回 master 和 develop

### [**cucumber**][4]

BDD 撰寫框架，支持[多種平台](https://cucumber.io/docs)，其使用 **[gherkin][7]** 語言撰寫；

JavaScript 安裝
安裝至全域

``` bash
npm install -g cucumber
```

安裝至專案開發依賴

``` bash
npm install --save-dev cucumber
```

Feature 撰寫的說明請參考 [Github 上的 Wiki](https://github.com/cucumber/cucumber/wiki/A-Table-Of-Content)

## 參考資料

- [Trell][1]
- [git][2]
- [git flow][3]
- [cucumber][4]
- [istanbul][5]
- [Nightmare][6]

[1]: https://trello.com/
[2]: https://git-scm.com/
[3]: http://nvie.com/posts/a-successful-git-branching-model/
[4]: https://cucumber.io/
[5]: https://istanbul.js.org/
[6]: https://github.com/segmentio/nightmare
[7]: https://github.com/cucumber-attic/gherkin