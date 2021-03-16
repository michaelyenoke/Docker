## Run Hello.py by Docker
</br>
</br>

> 01.sudo docker pull python (*狀況:無法跑本地沒有pull下來的image*) </br>
> 02.會先從本地的Dockerfile資料夾中複製 hello.py 到 Docker中的 /home

</br>
</br>

*FROM python </br>
RUN pip3 install pandas </br>
RUN mkdir /home/report </br>
RUN mkdir /home/add </br>
</br>
COPY . /home </br>
WORKDIR /home </br>
CMD python /home/hello.py </br>*

</br>
</br>

>> When you build an image use RUN to execute commands. Then, use CMD only once to declare the command that will start the container after the build (so there is only  one CMD).

>> docker run *image-id*

![photo1](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/07_dockerfile_build_image/03_dockerfile_python/python01.png)
