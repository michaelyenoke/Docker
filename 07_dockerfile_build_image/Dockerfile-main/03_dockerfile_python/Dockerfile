FROM python
RUN pip3 install pandas
RUN mkdir /home/report
RUN mkdir /home/add

COPY . /home
WORKDIR /home
CMD python /home/hello.py