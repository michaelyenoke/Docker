## 建立一個自帶sshd的ubuntu然後取出它的sshd_config


> $ docker search ubuntu | grep ssh </br>
> $ docker pull rastasheep/ubuntu-sshd </br>
> $ docker run -it  49533628fb37 bash </br>
> root@3a742a84c780:cd /etc/ssh/sshd_config </br>
> root@3a742a84c780:cat [sshd_config](https://github.com/michaelyenoke/docker_notebook_slider_examples/blob/main/06_volume_(storage)/02_ubuntu_sshd_config/sshd_config) </br> 
> 
