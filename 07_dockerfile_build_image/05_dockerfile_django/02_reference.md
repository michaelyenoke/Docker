## 建立 Django 網頁

> 用vim將檔案設為 Dockerfile (Dockerfile名字不能改也不能加副檔名extension)  
</br>

> vim Dockerfile 
</br>

*FROM python:3*  

</br>

> 指定最基礎container建立在python3

</br>

*ENV PYTHONUNBUFFERED 1* 
</br>

> 設定Dockerfile的環境變數,我們最常會設成1 → 為了不讓output不被阻塞所以設為1
</br>

*RUN mkdir/django-files* 
> 設定資料夾
</br>

*WORKDIR /django-files* 
</br>

> 指定工作目錄
</br>

*RUN pip install Django* 
</br>

> 下載library
</br>

*RUN django-admin startporject mysite*  
</br>

> starproject 建立專案的指令
</br>

*ENTRYPOINT python mysite/manage.py runserver 0.0.0.0:7777*  
</br>

> container 建立後的指令,在這裡是把網頁伺服器建立起來
</br>

> $ docker build <Dockerfile 位置>  -t  <image 名稱>  → -t 參數 - tag
</br>

> Sudo docker build  .  -t  django-demo
</br>

> sudo docker run  django-demo → 將image建立成container
</br>

> sudo docker run -p 80:7777 my-django  →  -p 參數 - 將container 7777 的 port 去 maping 到 Host OS 80 的port
</br>

> 驗證服務 ：對 Host OS的80 port去進行 crul → curl 127.0.0.1 → 有顯示出網頁表 Django網頁建立完成
</br>
