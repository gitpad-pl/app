# [git.plainedit.com](https://git.plainedit.com/)
Frontend application with vue, node.js

## Zasada działania
Przygotowanie aplikacji na tablet telefon, do wygodnego przeglądania i edytowania repozytoriów GIT
a także do zmian w strukturze i zarządzania plikami


## Pobieranie danych z repo
https://vuejs.org/v2/examples/commits.html


## Edytor md, do edycji danych i ich wyswietlania
https://vuejs.org/v2/examples/index.html


## Widok drzewa plików


## Widok GRID, mediów

## Lista plików wraz z nazwą i pierwszą linijką

## + Widok punktów w pliku

## Widok pliku oraz głównych punktów

    # + ##
w widoku plików możliwe pokazanie również punktów i przenoszenie ich bezpośrednio w drzewie widoku pliku,
niepotrzebne jest otwieranie pliku

## Widok managera plików




# api-git
api for github, bitbucket, git

libraries for github
https://developer.github.com/v3/libraries/


https://github.com/pksunkara/octonode


https://github.com/k33g/gh3
- read only, frontend

https://github.com/github-tools/github



## How to start

    a-install.bat
    a-build.bat
    a-run.bat

http://localhost:8080/




## API github

### source
+ git
+ github
+ bitbucket
+ ...

### organisation
+ username
+ company
+ project

### repository

### file
lista lub drzewo plików

### folder
lista lub drzewo katalogów

### section
struktura paragrafów/akapitów
rozwiązanie do zarządzania punktami w plikach, zamiast całą treścią,
możliwe jest łatwiejsze przenoszenie małych częsci plików pomiedzy nimi.
Ułatwia podgląd zawartości

## query tree

+ source: list
    + organisation: list
        + repository: list
            + section
                + all: tree
                + id: content
                + move
                + copy
                + duplicate
                + update
                + delete

            + file
                + all: tree

                + name
                    + read
                        + section
                            + all: list
                            + id: content
                    + update
                    + delete

                + create

            + folder
                + all: tree
                + id: CRUD


            + info
            + description
            + name
            + url
            + user
                + list
            + stars
            + fork




### examples


source/*/organisation/*/repository/*/section/*/all

source/*/organisation/*/repository/*/folder/*/all

source/*/organisation/*/repository/*/file/all

source/*/organisation/*/repository/*/file/*/section/all

source/*/organisation/*/repository/*/file/*/content

source/*/organisation/*/repository/*/file/*/point/all


## API Wordpress

    + domain
