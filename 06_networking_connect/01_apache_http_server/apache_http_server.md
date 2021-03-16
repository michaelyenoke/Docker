> 1.尋找官方版的ubuntu的image: </br>
$ docker search ubuntu -f is-official=true </br>

> 2.將官方版的ubuntu的image給pull到本機來: </br> 
$ docker pull ubuntu </br>

> 3.查看本機下載的image檔: </br>
$ docker images </br>

> 4.查看正在運作中的 container </br>
$ docker ps -a </br>

> 5.進入並開啟 ubuntu 的 container 的終端介面: </br>
$ docker run -it ubuntu /bin/bash  </br>

> 6.更新元件 </br>
root@a52350de4ffa:/# apt-get update </br>

> 7.安裝 apache2 web server: </br>
root@a52350de4ffa:/# apt-get install -y apache2 </br>

> 8.啟動 Apache Web Server: </br>
root@a52350de4ffa:/# service apache2 start </br>

> 9.處理網路伺服器報錯-Ubuntu下載時沒有預先載入ServerName檔: </br>
root@a52350de4ffa:/# echo "ServerName ubuntu.mydomain.com" >> /etc/apache2/httpd.conf </br>

> 10.重新啟動apache ： </br>
root@a52350de4ffa:/# service apache2 restart </br>

> 11.簡單寫一個 hellowolrd.html檔案放在 /var/www/html 的路徑下，指令如下： </br>
echo "HelloWorld" > /var/www/html/helloworld.html </br>

> 12.使用cat /etc/hosts指令查看 docker container 的 IP 如下圖： </br>
cat /etc/hosts </br>

> 13.如果想要使用 ifconfig指令，需要安裝 net-tools工具指令如下 ： </br>
apt-get install -y net-tools </br>

> 14.check with network </br>
ifconfig </br>

> 15.安裝vim </br>
apt-get install vim-gtk </br>

![photo](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/apache_server.png)


> 整理上述的 Docker 指令如下： </br>
    docker search 搜尋 Docker Image 有哪些的指令 </br>
    docker pull 指 Docker Image 下載回 local  </br>
    docker images 顯示出在 local 下載了哪些 Docker Image </br>
    docker run 使用 Docker Image 啟動執行 Docker Container </br>
    docker ps 顯示了啟動了哪些的 Docker Container </br>

![photo2](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/apache_server02.png)
</br>

![photo3](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/apache_server03.png)
</br>

![photo4](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/apache_server04.png)
</br>

____

> 1.apache2.conf is the main configuration file. It puts the pieces together by including all remaining configuration files when starting up the web server. (說明欄中)
</br>

> 2.ports.conf is always included from the main configuration file. It is used to determine the listening ports for incoming connections, and this file can be customized anytime.
</br>

> 3.Configuration files in the mods-enabled/, conf-enabled/ and sites-enabled/ directories contain particular configuration snippets which manage modules, global configuration fragments, or virtual host configurations, respectively.
</br>

> 4.They are activated by symlinking available configuration files from their respective *-available/ counterparts. These should be managed by using our helpers a2enmod, a2dismod, a2ensite, a2dissite, and a2enconf, a2disconf . See their respective man pages for detailed information.
</br>

> 5.The binary is called apache2. Due to the use of environment variables, in the default configuration, apache2 needs to be started/stopped with /etc/init.d/apache2 or apache2ctl. Calling /usr/bin/apache2 directly will not work with the default configuration.
</br>
</br>

> DOCUMENT ROOT
</br>
By default, Ubuntu does not allow access through the web browser to any file apart of those located in /var/www, public_html directories (when enabled) and /usr/share (for web applications). If your site is using a web document root located elsewhere (such as in /srv) you may need to whitelist your document root directory in /etc/apache2/apache2.conf.
The default Ubuntu document root is /var/www/html. You can make your own virtual hosts under /var/www. This is different to previous releases which provides better security out of the box.
</br>
> REPORTING PROBLEMS
</br>
Please use the ubuntu-bug tool to report bugs in the Apache2 package with Ubuntu. However, check existing bug reports before reporting a new bug.
Please report bugs specific to modules (such as PHP and others) to respective packages, not to the web server itself.
</br>
</br>

[apache2.conf](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/apache2.conf)
____


1.Day4：用簡單的例子來說明如何使用 Docker 指令 https://ithelp.ithome.com.tw/articles/10190921
2.ubuntu安裝VIM教程與命令詳解 :  https://www.itread01.com/content/1547355843.html

____

problem shooting (unsolved):

root@ceb326b281c1:/# service apache2 start
 * Starting Apache httpd web server apache2
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.7. Set the 'ServerName' directive globally to suppress this message

---

> 1.變數的取用echo : http://linux.vbird.org/linux_basic/0320bash.php

說的口沫橫飛的，也不知道『變數』與『變數代表的內容』有啥關係？ 那我們就將『變數』的『內容』拿出來給您瞧瞧好了。你可以利用 echo 這個指令來取用變數， 但是，變數在被取用時，前面必須要加上錢字號『 $ 』才行，舉例來說，要知道 PATH 的內容，該如何是好？變數的取用就如同上面的範例，利用 echo 就能夠讀出，只是需要在變數名稱前面加上 $ ， 或者是以 ${變數} 的方式來取用都可以！當然啦，那個 echo 的功能可是很多的， 我們這裡單純是拿 echo 來讀出變數的內容而已，更多的 echo 使用，請自行給他 man echo 吧！ ^_^

> 2.解決啟動 Apache 網站伺服器時找不到 ServerName 的問題  → 未完全解決
https://blog.miniasp.com/post/2012/06/23/apache2-Could-not-reliably-determine-the-server-fully-qualified-domain-name-using-for-ServerName
	
	解決方法:
	a.Step One:手動加入 ServerName 的 config 檔: echo "ServerName ubuntu.mydomain.com" >> /etc/apache2/httpd.conf </br>
    b.Step Two:問題要解決，就必須要設定正確的 /etc/hosts 內容，才能讓 IP 反查 hostname 的時候正確執行，也就是需要對外服務的</br>   
    hostname 不能設定為 127.0.0.1，必須設定成可以讓其他主機連接的 IP 地址！
    - 我們先利用 hostname 指令幫我們查出幾個資訊，以下指令分別說明如下：
        #hostname      取得目前本機設定好的 Hostname
        #hostname –i 	取得目前本機 Hostname 對應的 IP
        #hostname –I 	取得目前本機設定好的所有 IP 位址（會排除 loopback 介面） → 把這個對上主機


