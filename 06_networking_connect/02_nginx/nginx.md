> Nginx 是一個反向代理伺服器，就像是餐廳的櫃檯，接收所有客戶的需求後，分配給廚師處理。這樣的好處可以保護後方的  Web Server 被攻擊。同時，還可以提供負載平衡 (Load Balance)、快取以及 HTTPS 憑證等功能。

</br>
</br>

> 使用 Nginx 好處如下：
</br>
<ul>
    <li>01.隱藏伺服器真實 IP</li>
    <li>02.負載均衡</li>
    <li>03.提高訪問速度：提供靜態內容和緩存服務</li>
    <li>04.提供安全保障：更容易排查惡意軟體等</li>
</ul>

</br>

![nginx01](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx01.png)

</br>

> 正向代理(ex. VPN)

</br>
<p>正向代理（forward proxy）：是一個位於客戶端和目標伺服器之間的伺服器(代理伺服器)，為了從目標伺服器取得內容，客戶端向代理伺服器發送一個請求並指定目標，然後代理伺服器向目標伺服器轉交請求並將獲得的內容返回給客戶端。
</br>

</br>
<p>這種代理其實在生活中是比較常見的，比如科學上網技術，其用到的就是代理技術。</br>
有時候，用戶想要訪問某國外網站，該網站無法在國內直接訪問，但是我們可以訪問到一個代理伺服器，這個代理伺服器可以訪問到這個國外網站。這樣呢，用戶對該國外網站的訪問就需要通過代理伺服器來轉發請求，並且該代理伺服器也會將請求的響應再返回給用戶。這個上網的過程就是用到了正向代理。
</br>



> 反向代理(ex.load balancer)

</br>
<p>反向代理（reverse proxy）：是指以代理伺服器來接受internet上的連接請求，然後將請求轉發給內部網絡上的伺服器，並將從伺服器上得到的結果返回給internet上請求連接的客戶端，此時代理伺服器對外就表現為一個反向代理伺服器。
</br>

</br>
<p>對於常用的場景，就是我們在Web開發中用到的負載均衡伺服器（二房東），客戶端（租客）發送請求到負載均衡伺服器（二房東）上，負載均衡伺服器（二房東）再把請求轉發給一台真正的伺服器（房東）來執行，再把執行結果返回給客戶端（租客）。
</br>


![nginx02](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx02.png)

</br>

> 1、Nginx是靜態HTTP伺服器

</br>
<p>首先，Nginx是一個HTTP伺服器，可以將伺服器上的靜態文件（如HTML、圖片）通過HTTP協議展現給客戶端
</br>

> 2、反向代理伺服器

</br>
<p>客戶端本來可以直接通過HTTP協議訪問某網站應用伺服器，如果網站管理員在中間加上一個Nginx，客戶端請求Nginx，Nginx請求應用伺服器，然後將結果返回給客戶端，此時Nginx就是反向代理伺服器。
</br>

> 3、負載均衡

</br>
<p>當網站訪問量非常大，網站站長開心賺錢的同時，也攤上事兒了。因為網站越來越慢，一台伺服器已經不夠用了。於是將相同的應用部署在多台伺服器上，將大量用戶的請求分配給多台機器處理。同時帶來的好處是，其中一台伺服器萬一掛了，只要還有其他伺服器正常運行，就不會影響用戶使用。
</br>

> 4、虛擬主機

</br>
<p>有些網站訪問量大，需要負載均衡。然而並不是所有網站都深受用戶愛好，有的網站，由於訪問量太小，需要節省成本，將多個網站部署在同一台伺服器上。
</br>
<p>例如將www.asd.com和www.zxc.com兩個網站部署在同一台伺服器上，兩個域名解析到同一個IP位址，但是用戶通過兩個域名卻可以打開兩個完全不同的網站，互相不影響，就像訪問兩個伺服器一樣，所以叫兩個虛擬主機。
</br>
</br>
<p>在伺服器8080和8090分別開了一個應用，客戶端通過不同的域名訪問，根據server_name可以反向代理到對應的應用伺服器。

<p>虛擬主機的原理是通過HTTP請求頭中的Host是否匹配server_name來實現的，另外，server_name配置還可以過濾有人惡意將某些域名指向你的主機伺服器。

</br>
</br>

![nginx03](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx03.png)
</br>

![nginx04](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx04.png)
</br>
</br>
_____
1.Day 26 - 三周目 - Docker 基本使用：看完就會架 docker 化的服務 - https://ithelp.ithome.com.tw/articles/10205481
</br>
2.淺談 Nginx 基本配置、負載均衡、緩存和反向代理 - https://www.maxlist.xyz/2020/06/18/flask-nginx/
</br>
3.深入淺出Nginx - https://kknews.cc/code/qq5aav8.html
</br>
4.終於有人把正向代理和反向代理解釋的明明白白了 ：https://kknews.cc/tech/k66p2gb.html
</br>
5.AWS 配置反向代理：https://docs.aws.amazon.com/zh_cn/elasticbeanstalk/latest/dg/java-se-nginx.html
</br>
6.Nginx 的基本功能介紹:https://kknews.cc/zh-tw/code/eaxn2zq.html.
</br>
