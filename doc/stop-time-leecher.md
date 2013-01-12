# 防手贱GM脚本

直接适用于Firefox的人人用户。
貌似Chrome也支持GM，没试过，请自行探索安装。

## 安装

   * 安装[GreaseMonkey插件](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
   * 安装[防手贱用户脚本](https://github.com/hupili/userscripts/raw/master/no_renren_at_working_time.user.js)，
   点击链接之后GM会自动识别并提示安装。
   可以在提示界面中先查看代码。
   * 修改工作时间判断逻辑以及提示信息
   （非必须步骤）：
   FF菜单--GreaseMonkey--管理用户脚本--找到`no_renren_at_working_time`--编辑用户脚本。

默认设定：

   * 工作时间：`[8, 12)`， `[14, 18)`， `[19, 21)`。
   * 惩罚方式：如果在工作时间访问人人网，
   则在本地弹出一个消息框进行提示。
   （无任何副作用）

可以将`is_working_time()`修改为自定义的工作时间。
可以将`punish()`修改得狠一点
（如发布一条“我要当学霸”之类的状态，见"sample 1"函数）。
脚本中自带样例，不用学JS也能看懂。

Have fun!
