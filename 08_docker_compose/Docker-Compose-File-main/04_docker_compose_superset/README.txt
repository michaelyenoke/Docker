01.Installing Superset Locally Using Docker Compose
https://superset.apache.org/docs/installation/installing-superset-using-docker-compose

02.Docker basics for Amazon ECS
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html

03.Amazon Linux 2 - install docker & docker-compose using 'sudo amazon-linux-extras' command
https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9

04.AWS 教您手把手玩转 Apache Superset 可视化 Amazon S3 里的数据
https://aws.amazon.com/cn/blogs/china/aws-teaches-you-to-play-with-apache-superset-to-visualize-the-data-in-amazon-s3/

05.GITHUB - apache/superset
https://github.com/apache/superset/blob/master/CONTRIBUTING.md


06.安装docker版本的superset[完整过程]
https://segmentfault.com/a/1190000037738332


07.Linux下运行bash脚本显示“: /usr/bin/env: "bash\r": 没有那个文件或目录 
https://blog.csdn.net/xiongchun11/article/details/78832947
 >  找到docker檔下面的.sh檔進入修改成unix檔
 >  vi  /app/docker/docker-bootstrap.sh
 > :set ff
 > :set ff=unix
 > :wq!

08.(1)Installing Superset via Docker-compose Up #9880
   https://github.com/apache/superset/issues/9880

   >Solution: Isntalling node.js and vpm.
   >Action item: in the installation guide page, it needs to be added to install these packages. Specially    
   >because it doesn't directly get displayed in logs when trying to follow the current version of 
   >documentation here: https://superset.incubator.apache.org/installation.html#start-with-docker

   (2)Docker image serves no CSS #7408
   https://github.com/apache/superset/issues/7408
 
   (3)404 for some assets after installing from git repo
   https://github.com/apache/superset/issues/657
   
   (4)Could not build npm on Mac
   https://github.com/apache/superset/issues/2752





