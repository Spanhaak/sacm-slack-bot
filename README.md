# sacm-slack-bot
A slack bot to use in combination with, for instance BMC Atrium CMDB solutions, automated health checks. 

This bot connects to an API gateway that will do the communication with the CMDB database backend. You need to take care of the ability to connect (network and authentication) to the database from the location this bot and api gateway will be running.

Initial bot to assist the SACM team in SLACK
- Created in Node.js

## Pre-requisites
- You own a SLACK channel
- You have created a 'bot user' in the SLACK channel for the bot
https://api.slack.com/bot-users
- You have an OAuth token to validate the bot to the workspace/channel
https://api.slack.com/docs/oauth

## Installation
- Pull the files
- run NPM i slackbots axios
- (make sure your bot auth is updated)
- run NPM start
