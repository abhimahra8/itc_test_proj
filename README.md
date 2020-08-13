# Project Title

Project to get tv series detail and evaluate top ranked series and episodes

---
## Requirements

For development, you will only need docker.

### Node

    $ node --version used
    v12.8.2

###

## Project directory and run docker

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    

    Add .env file at root directory check env.sample file

## Build and run project

    $ Run build_and_deploy_stack.sh shell script file

    Above command will install all the dependecies and run the docker image which is published at port 3000 (configurable in docker-compose.yml file)


## Running migration file to create tables in db

    $ used mongo atlas cloud

## Application End-points 

    $ 1. GET /tv/:tvId  - to get the tv series details. Required param = tvId
    $ 2. GET /topEpisodes/:tvId/season/:season_no - to get the top 20 episodes in particular tv series season. Required param = tvId & season_no
    $ 3. GET /topTvSeries - to get top tv series based on user access.

#### Email: abhimahra08@gmail.com