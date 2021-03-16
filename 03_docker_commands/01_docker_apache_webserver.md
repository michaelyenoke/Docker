Docker Apache建一個hello world的Web
https://zhuanlan.zhihu.com/p/106587011

docker search httpd </br>

docker pull httpd</br> 
https://hub.docker.com/_/httpd </br>

docker images httpd

sudo docker run -itd \
--name test_web_server \
-p 8085:80 \
-v /home/mchen57/website/:/usr/local/apache2/htdocs/ \
docker.io/httpd:latest

docker ps

sudo cd /home/user/website
sudo vim helloworld.html

# 將自己要的網頁複製過去 
sudo cp /mnt/c/Users/MichaelCHEN/Desktop/analysis.html /home/mchen57/website


# port 映射
-p 8085:80，意思是端口號的映射，<host_port>:<容器内apache的port>   http://<YOUR_IP>：8085
-應該就可以到達一個web page.這之後你就可以在apache的folder裏面放你編寫的簡單的hello world的網頁。之後就可以通過這個端口8085來訪問。
# volume 映射
-v /home/user/website/:/usr/local/apache2/htdocs/， 這是docker重要的volume的概念。<host_路徑>：<容器内的路徑>。
-在你的host，到/home/user/website/文件夾下，建立一個helloworld.html網頁，這個文件會自動映射到容器内的/usr/local/apache2/htdocs/下，被apache發佈出來。
