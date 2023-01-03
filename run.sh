docker stop Lizana-front;
docker rm Lizana-front;
docker rmi lizana-front;
docker build -t lizana-front . ;
docker run --name=Lizana-front -d -p 95:80 lizana-front;

