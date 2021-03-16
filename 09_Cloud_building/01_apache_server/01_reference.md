[apache server on aws ec2]

sudo yum update -y

## install docker
sudo yum -y install docker
sudo usermod -a -G docker ec2-user
sudo systemctl start docker
sudo systemctl status docker
sudo systemctl enable docker
sudo chmod 666 /var/run/docker.sock
docker ps

## run docker
docker pull httpd
docker images httpd 

sudo docker run -itd \
--name test_web_server \
-p 8085:80 \
-v /home/ec2-user/website/:/usr/local/apache2/htdocs/ \
docker.io/httpd:latest

docker ps

## check website

cd /home/ec2-user/website 
vim helloworld.html  (貼上網頁內容)

https:// 34.239.157.46/helloworld.html

---

### support from ecloud

了解您在嘗試透過看到的 docker 文章建置您的 apache server 時，遇到了網頁無法訪問的問題。

根據您文章中的指令：

sudo docker run -itd \
--name test_web_server \
-p 8085:80 \
-v /home/ec2-user/website/:/usr/local/apache2/htdocs/ \
docker.io/httpd:latest

其中，-p 表示的是對外公開的對應 port。
冒號前面的 8085 表示 EC2 host 的 port，冒號後面的 80 表示您 docker container 的 service port。
透過上面的指令，您在 container 80 port 上的 apache service，將可以透過 EC2 的 8085 port 訪問。

然而，在查看了您的 EC2 設定後，發現您的 EC2 security group 8085 port 並未對外開放。
您可將 security group 理解成為 "網卡上的防火牆"，如果您的 security group 並未開放該 port，就無法從網卡上訪問該 port。
建議您先將您 docker host 的 8085 port 開放給您訪問的 IP，以測試 apache 服務是否可以透過以下您的網址訪問:
http://34.239.157.46:8085/helloworld.html

---

修改 security group 規則的方法，您可以參考此篇官方文件 [1]。
請您將 EC2 的 8085 port，開放至貴司及其他需要訪問的 IP，或是開放至公開的網路存取 (開放公開存取會使您的機器較不安全)。

另外提醒您，我們目前有看到您 80 及 443 port 的 security group 開放給 "0.0.0.0/16" 網段。
"0.0.0.0/16" 表示的有效範圍為 "0.0.0.0 ~ 0.0.255.255"，而並非是對外全部開放。
如果您 80 及 443 port 上也有服務運行，建議您也調整 80 及 443 port 的 security group 設置，以免 80 及 443 port 服務無法被訪問。
(若需完全公開給外部訪問，需設置為 0.0.0.0/0)


參考文件：
[1] https://docs.aws.amazon.com/zh_tw/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule

---

WinScp 連上ec2
https://www.youtube.com/watch?v=asHj7ANyzm4

---

[not install]
# install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version

