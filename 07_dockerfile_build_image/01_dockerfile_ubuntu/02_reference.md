

## 撰寫 Dockerfile YAML檔並生成容器
[參考資料](https://www.youtube.com/watch?v=LQjaJINkQXY)

Step 1 : Create a file nameed Dockerfile </br>
Step 2: Add instructions in Dockerfile </br>
Step3: Build dockerfile to create image </br>
Step4: Run image to create container </br>

>> cd /mnt/c/Users/MichaelCHEN/Desktop/
>> mkdir Dockerfiles
>> cd DockerFiles/
>> touch Dockerfile     # no extentions #file name is fix 

>> vim Dockerfile

*FROM ubuntu  </br>
MAINTAINER michael chen <michaeyenoke@gmail.com>  </br>
RUN apt-get update </br>
CMD [“echo”,”Hello World…! From my first docker image”] </br>* 

>> :wq!

>> cat Dockerfile


>> cd /mnt/c/Users/MichaelCHEN/Desktop/Dockerfiles
>> docker  build  -t  myimage1:1.0   .   (增加tag) /    或不加tag   docker build .
>> docker images
>> docker run 272e297748db 

![photo01](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/07_dockerfile_build_image/01_ubuntu/ubuntu01.png)
![photo02](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/07_dockerfile_build_image/01_ubuntu/ubuntu02.png)
