FROM python
ENV PYTHONUNBUFFERED 1
RUN mkdir /django-files
WORKDIR /django-files
RUN pip install Django
RUN django-admin startproject mysite
ENTRYPOINT python mysite/manage.py runserver 0.0.0.0:7777

