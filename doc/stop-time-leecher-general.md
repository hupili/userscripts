# 防手贱GM脚本 (通用）

适用于Firefox或Chrome的用户。

## 安装

   * Firefox安装[GreaseMonkey插件](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)；
   Chrome安装[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)。
   * 安装[防手贱通用用户脚本](https://github.com/hupili/userscripts/raw/master/no_those_sites_at_working_time.user.js)，
   点击链接之后GM（TM）会自动识别并提示安装。
   可以在提示界面中先查看代码。
   * 修改工作时间判断逻辑以及提示信息
   （非必须步骤）：
   FF菜单--GreaseMonkey--管理用户脚本--找到`no_those_sites_at_working_time`--编辑用户脚本；
   Chrome工具栏上的TM图标--Options--单击`no_those_sites_at_working_time`--在编辑器中修改代码。

默认设定：

   * 工作时间：`[8, 12)`， `[14, 18)`， `[19, 21)`。
   * 惩罚方式：如果在工作时间访问某些网站，
   则会重定向到[这个页面](http://hupili.github.com/pages/stop-time-leecher.html)

配置：

   * 将`is_working_time()`修改为自定义的工作时间。
   * 在文件顶部添加更多的网站，格式如：`// @include        http://www.renren.com/*`。
   * 将`REDIR_URL`配置为你想重定向到的页面。

Have fun!

## 相关资源

   * [人人GM脚本](https://github.com/hupili/userscripts/blob/master/doc/stop-time-leecher.md)，
   在工作时间访问人人网，会发一条状态。
