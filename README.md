# Overview

It's a base framework which can be used to create bots using [Microsoft Botframework](https://botframework.com). If you need create your bot using this base skeleton, fork it and change everything you need. Also I would like you send me notices or asks. 

There are some information how to launch your bot and deploy its to [Heroku](https://heroku.com) (or you can use other hosting and deploy bots yourself).

## Configuration
I used Heroku as a target platform to deploy bots. Heroku gets settings from environment variables which sets automatically from `.env` file. If you want to host bots on another platform, you can use something like [dotenv](https://github.com/motdotla/dotenv).

There are three option to configure:
- APP_ID - Microsoft Application Id. You can get it when register new app at [Microsoft Botframework](https://botframework.com)
- APP_PASSWORD - Microsoft Application Password. You can get it when register new app at [Microsoft Botframework](https://botframework.com)
- APP_ENVIRONMENT - You can use various environments to play with your bots. Some of them can work with ConsoleBot, others with UniversalBot and [Microsoft Botframework Emulator](https://github.com/microsoft/botframework-emulator/wiki/Getting-Started)

## How to start

The manual below contains instructions how to deploy your bot on Heroku. Why should I prefer Heroku? It has got:

* Free instances (dynos) to play with
* HTTPS of your host (in other case you can use [LetsEncrypt](https://letsencrypt.org) or something else)
* It's really easy to start with Heroku

#### Steps to start with Heroku

- Register on [Heroku](https://heroku.com)
- Download and install Heroku CLI tools
- Create directory for your bot on your computer
- Get repository `git clone [this repository url] .`
- Login to heroku `heroku login`
- Create new instance `heroku create [name of your app]`
- Deploy it to Heroku `git push heroku master`
- Enjoy it =)