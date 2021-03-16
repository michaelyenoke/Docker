## 建立並執行容器: nginx_1
</br>
建立並執行容器指令: docker run
</br>
<p>我們已經下載了 nginx:1.15 映像檔(image)，接下來要建立容器並執行它。只要 docker run nginx:1.15 即可，但建立起來的容器名稱是 docker 亂數取名的，所以我們要加入 --name 參數(參數值用 "=" 或空白區隔),建議容器要取名字，讓自己辨別：docker run --name nginx_1 nginx:1.15，指令是指：用 nginx:1.15 映像檔建立名為 nginx_1 的容器 
</br>
<p>但我們還是沒辨法訪問它，因為目前網路結構：
  
![nginx05](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx05.png)

</br>

</br>
<p>我們沒連入容器的方法，就像是沒辨法訪問監聽某個 port 的 process，因此要指定 port 號 (建立一個連通的 EndPoint)。因此，docker run --name nginx_1 -p 8080:80  nginx:1.15
</br>

</br>
<p>8080:80 就好像把 8080 port 放到 network(host) 中，當外部流量來的時後就從 8080 port 流到容器內的 80 port，所以外界不會察覺 容器 80 port 的存在。
</br>

![nginx06](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx06.png)

</br>

</br>
<p>接下來，打開瀏覽器，訪問 http://localhost:8080/，就會看到以下畫面：
</br>

![nginx07](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx07.png)

</br>
</br>
<p>Nginx shows welcome page, its picking up from: /usr/share/nginx/html
</br>
<p>訪問後，會看到 terminal 出現, 這是 nginx 的 console log。：
</br>

![nginx08](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_networking_connect/02_nginx/nginx08.png)

</br>
<p>先等等，我怎麼會知道 nginx_1 容器內是開 80 port，每個映像檔的實現方法 (Dockerfile 內會寫 EXPOSE <port>)不一樣，使用方法也不一樣，要看映像檔的 docker hub repository 說明。

<p>到目前為止，我們建立了一個 nginx container，並執行它啟動網頁伺服器。
</br>
</br>

> 移除容器

</br>

<p> - 只需要把 ternimal 關掉(ctrl + c)後，http://localhost:8080/ 就訪問不到了。
<p> - 當你不要 nginx_1 時，輸入 docker rm nginx_1  就可以刪除 (它要先停止它才能移除)。

> 讓容器在背景執行

<p> 建立好容器後，再次執行容器 docker start <id or container_name>。
<p> 建立並執行容器時立刻脫離。


<p> [方法一]
<p> 若你已經建立好容器且假設它已經停止，如：STATUS 欄位中說他已經 exited 了。
<p> 若你要讓容器再次執行 docker start <id or container_name>，docker start nginx_1，之後再 docker ps，就會看到它 Up (running)。

<p> [方法二]
<p> 第二個方法在建立並執行容器時脫離(detach) console log，加入 -d (--detach) 參數：docker run --name nginx_1 -d -p 8080:80 -d nginx:1.15
<p> 讓停止容器後自動刪除容器
<p> 若你希望在停止容器後自動刪除容器要加入 --rm 參數，如：docker run --name nginx_1 -d --rm -p 8080:80 nginx:1.15，就會在停止後自己刪除。




