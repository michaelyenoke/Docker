## Superset Docker 安装
### Docker安装superset (要整個跑完)
</br>

> 1：docker search superset 
</br></br>
> 2：docker pull amancevice/superset:0.28.1 
</br></br>

> 3：docker run -d -p 8088:8088  -v  /dockersuperset:/home/superset  amancevice/superset:0.28.1 
     這個換port會失敗,程式一開始就會寫好要去讀取哪個port來的資料,所以不能亂換port  
</br>

> 4：docker ps 
> </br>

> 5：創建管理員帳號 -  docker exec -it  bb4dc038d1a3   fabmanager  create-admin  --app superset  帳戶名：---- 密码：------

</br>

> 6：初始化資料庫 - docker exec -it  bb4dc038d1a3  superset db upgrade

</br>

> 7： 載入模板數據 - docker exec -it  bb4dc038d1a3  superset load_examples

</br>

> 8：初始化角色和權限- docker exec -it  bb4dc038d1a3  superset init

</br>

> 9：啟動服務 - docker exec -it bb4dc038d1a3  superset runserver

</br>
</br>
</br>
</br>
______
</br>
</br>
1.Supperset Doc : https://superset.apache.org/docs/intro*
</br>
2.DockerHub : https://hub.docker.com/r/amancevice/superset/?ref=login
</br>
3.Superset Docker安装: https://blog.csdn.net/l_lushuang/article/details/100773118
</br>
4.-v  /dockersuperset:/home/superset  → 掛上 volume 
</br>
5.Druid簡介
https://www.alibabacloud.com/help/tc/doc-detail/72987.htm
Druid是Metamarkets公司（一家為線上媒體或廣告公司提供資料分析服務的公司）推出的一個分布式記憶體即時分析系統，用於解決如何在大規模資料集下進行快速的、互動查詢和分析。

</br></br></br>
______
</br>
1.https://superset.apache.org/docs/databases/bigquery
</br>
2.https://cloud.google.com/docs/authentication/getting-started
</br>
3.Following the steps mentioned at the official Google Cloud page here, you need to do the following </br>
-- Install pybigquery : * pip install pybigquery *  </br>
-- Download your Google Cloud authorization json key file </br> 
-- From your terminal instance, set GOOGLE_APPLICATION_CREDENTIALS env. var to the path of your json key file: * export GOOGLE_APPLICATION_CREDENTIALS="/path/to/[json_file].json" *</br>

