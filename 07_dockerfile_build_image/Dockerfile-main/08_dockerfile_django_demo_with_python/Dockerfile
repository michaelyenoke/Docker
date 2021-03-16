FROM python
ENV PYTHONUNBUFFERED 1
RUN mkdir /django-files
WORKDIR /django-files
# 從git下載
# RUN git clone https://github.com/snoopy831002/Django-demo.git
# 改跑本地資料夾（先clone）
COPY . /django-files
RUN pip install Django
RUN django-admin startproject mysite
ENTRYPOINT python mysite/manage.py runserver 0.0.0.0:7777
