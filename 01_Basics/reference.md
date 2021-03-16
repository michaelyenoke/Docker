# docker run hello-world

> step one: *docker pull hello-world*
> step two: *docker run hello-world*
> step three: *docker images hello-world*

---

$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:

    1. The Docker client contacted the Docker daemon.
    步驟一：Docker Client 聯繫 Docker Daemon 
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
       (amd64)
    步驟二：Docker Daemon 從 DockerHub 上 Pull 下來 image 
    3. The Docker daemon created a new container from that image which runs 
       the executable that produces the output you are currently reading.
    步驟三：Docker Daemon 從 下載下來的 image 去產生一個 Container
    4. The Docker daemon streamed that output to the Docker client, which   
       sent it to your terminal.
    步驟四：Docker Daemon 再將這個生成的 Container 透過 Client 送到你的面前

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/


----


$ docker images hello-world
REPOSITORY   TAG     IMAGE ID      SIZE
hello-world  latest  bf756fb1ae65  13336
