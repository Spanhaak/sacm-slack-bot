# sacm-slack-bot
A slack bot to use in combination with, for instance BMC Atrium CMDB solutions, automated health checks. 

This bot connects to an API gateway that will do the communication with the CMDB database backend. You need to take care of the ability to connect (network and authentication) to the database from the location this bot and api gateway will be running.

## Purpose
The bot intends to supply the users of the bot with automated health check related information about the data quality in their CMDB environment. 
- list of duplicates
- update ratio of CI's
- list of wrongly configured CI's
- etc etc.

## DEMO
[![Watch the video](https://github.com/Spanhaak/sacm-slack-bot/blob/master/ss_demo.PNG)](https://www.youtube.com/watch?v=1-7VI-2i4uE&feature=youtu.be)


The bot can basically be extended with whatever you would like or measure upon.

Initial bot to assist the SACM team in SLACK
- Created in Node.js

## Pre-requisites
- You own a SLACK channel
- Create an APP and connect it to your workspace
- You have created a 'bot user' in the SLACK channel for the bot
https://api.slack.com/bot-users
- You have an OAuth token to validate the bot to the workspace/channel
https://api.slack.com/docs/oauth

## Installation
- Pull the files
- run NPM i slackbots axios
- (make sure your bot auth is updated)
- run NPM start
