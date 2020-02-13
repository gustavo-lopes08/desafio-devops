Para rodar a aplicação basta executar o comando:
docker-compose up -d

Aplicação Backend:

- A aplicação foi hospedada em um servidor NGINX servindo uma api PHP (pasta app) que é responsavel por performar uma query no mariaDB e então devolver os dados armazenados em forma de JSON.

- Para retornar os dados é preciso fazer um get request para o endereço localhost:8000

- O container do php não será executado se o banco de dados estiver indisponível, para isso foi usado o "depends_on" no docker compose

Obs: É possível acessar a pagina phpinfo() acessando o endereço localhost:8000/info.php

Aplicação Frontend:

- O frontend foi desenvolvido utilizando nodejs com o framework express, que foi usado para servir o index.html.

- Optei pelo express para que pudesse hospedar o frontend independente do backend

- O frontend roda no endereço localhost:3000 que disponibiliza uma paǵina com um botão que irá performar o get request para a aplicação backend


O docker compose também realizará o deploy de um container redis, porém o mesmo não foi utilizado na aplicação.
