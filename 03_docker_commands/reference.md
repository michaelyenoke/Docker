# [12招成為 Docker 大師](https://www.youtube.com/watch?v=k5iwKUZY9tk)</br>

![photo](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/03_docker_commands/12dockercommands.png)

## 第01招：取得映像檔(pull) </br> 
docker pull [OPTIONS] NAME[:TAG|@DIGEST] </br>
docker pull chusiang/takaojs1607 </br>

## 第02招：列出本機映像檔(images) </br>
docker pull [OPTIONS]  NAME[:TAG|@DIGEST] </br>
docker images </br>

## 第03招：新建並啟動容器(run)</br>
3.1. 建立容器並啟動,並綁定標準輸入上： </br>
3.1. 建立容器並啟動,並綁定標準輸入上： </br>
docker run -it  chusiang/takaojs1607 bash  </br>

3.2. 使用 daemon 模式建立容器並啟動 </br>
docker run -it -d chusiang/takaojs1607 tail -f /dev/null  </br>

3.3. 建立容器並啟動,且掛載本機目錄(local 在前 container在後) </br>
docker run  -it -v -/Downloads:/data chusiang/takaojs1607 bash </br>


## 第04招：查看容器行程(ps) </br>
docker ps [OPTIONS] </br>
</br>
4.1. 查看已啟動的 containers: </br>
docker ps </br>
</br>
4.2. 查看所有的 containers: </br>
</br>
 -a   --all  Show all containers (default shows just running) </br>
docker ps -a </br>


## 第05招：終止容器（stop)  </br>
docker stop [OPTIONS] CONTAINER [CONTAINER...] </br>
docker stop  XXXXXXXX </br>
docker ps </br>


## 第06招：啟用容器(start) </br>
docker start [OPTIONS] CONTAINER [CONTAINER...] </br>
docker start  XXXXXXXX </br>
docker ps </br>


## 第07招：進入容器(exec) </br>
docker exec [OPTIONS] CONTAINER COMMAND [ARG...] </br>

查看已啟動的 containers </br>
docker ps </br>

進入container </br> 
docker  exec  -it  XXXXXXXX  bash </br>

於 container 內進行操作： </br>
root@XXXXXXXX:/tmp# lsb_release -a > hello_world.txt </br>

離開container </br>
root@XXXXXXXX:/tmp# exit </br>


## 第08招：提交image(commit) </br>
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]] </br>

docker ps </br>

docker  commit  XXXXXX  takaojs1607 </br>

docker ps </br>

-a,   --author string            Author  </br>
-m, --message string        Commit message </br>
 

docker commit -m “提交訊息” -a “作者名稱” XXXXXX takaojs1607 </br>


## 第09招：修改標籤(tag) </br>
docker tag IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG] </br>

列出現有的 image: </br>
docker images </br>

透過 IMAGE ID 修改 tag: </br>
docker tag XXXXXX takaojs1607:1.0 </br>
docker images </br>

透過REPOSITORY 名稱修改 tag: </br>
docker tag takaojs1607 takaojs1607:1.1 </br>
docker images </br>
 
docker tag takaojs1607:latest takaojs1607:1.2 </br>
docker images </br>


## 第10招: 移除image和tag(rmi) </br>
docker rmi [OPTIONS] IMAGE [IMAGE...] </br>

藉由 IMAGE ID 移除 image </br>
docker images </br>
docker rmi XXXXXX </br>

移除tag </br>
docker images </br>
docker rmi takaojs1607:1.2 </br>
docker image </br>

強制(-f : force)移除（包含有容器正在執行） </br>
docker run hello-world </br>
docker rmi -f hello-world </br>


## 第11招：移除容器(rm) </br>
docker rm [OPTIONS] CONTAINER [CONTAINER....] </br>

docker ps -a </br>

只移除已停止的容器 </br>
docker rm XXXXX </br>
root@XXXXXX:/tmp# </br>

強制移除 </br>
docker rm -f XXXXXX </br>


## 第12招：上傳image(push) </br>
docker push NAME[:TAG] [OPTIONS] </br>

- 需登入 Docker Registry 才可使用 </br>
- Docker Hub: <USERNAME>/<REPO_NAME>  </br>
- Private Docker Registry: <SERVER_NAME>/foo </br>

docker images </br>

docker tag XXXXX  <USERNAME>/foo </br>
docker tag XXXXX  <SERVER_NAME>/foo </br>

上傳 image </br>
docker push <USERNAME>foo </br>
docker push <SERVER_NAME>/foo </br>

---

1.清空文件內容命令之echo和/dev/null區別？https://www.itread01.com/content/1494168128.html  </br>
2.linux查看日誌文件內容命令tail、cat、tac、head、echo : https://www.itread01.com/content/1510641629.html
