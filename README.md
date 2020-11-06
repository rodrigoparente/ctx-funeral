# ctx-funeral

Esse *software* foi desenvolvido para catalogar enterramentos arqueológicos (i.e. informações sobre os sítios, restos mortais e etc.). O Intuito desse projeto é oferecer uma ferramenta que possa ajudar os arqueólogos a criar uma base de dados com informações de suas escavações.

## Requisitos

Para utilização desse projeto é necessário que usuário tenha instalado em sua máquina o [python](https://www.python.org/) na versão 3.0 ou superior.

## Instalação

O processo de instalação é bastante simples. O usuário deve abrir uma janela do terminal e executar os seguintes comandos dentro da página raiz:

 - ``pip install -r requeriments.txt``: para instalar todas as dependências do projeto
 - ``python manage.py migrate``: para criar a base de dados
 - ``python manage.py createsuperuser``: para criar um super usuário que tera acesso ao painel de administração do sistema
   - O painel pode ser acessado através da url [http://127.0.0.1:8000/admin]()
 - ``python manage.py runserver``: para rodar o servidor

## Utilização

Para utilizar, basta abrir o arquivo ``index.html`` que se encontra dentro da pasta ``front`` em seu navegador favorito e começar a cadastrar as informações dos enterramentos.

**OBS:** é necessário que o servidor fique ligado durante a utilização
