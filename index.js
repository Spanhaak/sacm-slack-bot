// 
// Slack bot to steer an API gateway to handle daily health-check automation
// M. Spanhaak - 2019
//

// Bring in the required components
const Slackbot = require('slackbots');
const axios = require('axios');

// Initializing the bot with token and name of the bot. CAUTION: Token is a secret, do not use your tokens on Github
const bot = new Slackbot({
 token: 'secret',
 name: 'E-KnowIT' 

});

// Start Handling messages by bot
bot.on('start', () => {
  const params = {
      icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel(
      'sacm', 
      'SACM Bot is now active and looking for a relationship :-)',
      params
      );
});

// Error Handling to console if any
bot.on('error', (err) => console.log(err));

// Message Handling to SLACK 
bot.on('message', data => {
    if(data.type !== 'message'){
        return;
    }
    handleMessage(data.text);
})

// Respond to messages in the SLACK channels
function handleMessage(message) {
    if(message.includes(' countComputerSystemsTotal')) {
        countComputerSystems();
    } else if (message.includes(' listDuplicates')) {
        listDuplicates();
    } else if (message.includes(' countComputerSystemsNSG')) {
        countComputerSystemsNSG();
    } else if (message.includes(' countCSNSG')) {
        countCSNSG();
    } else if (message.includes(' countApplicationNSG')) {
        countApplicationNSG();
    } else if (message.includes(' updateRatio')) {
        updateRatio();  
    } else if (message.includes(' listComputerSystemsNSG')) {
        listComputerSystemsNSG();   
    } else if (message.includes(' listApplicationCIS')) {
        listApplicationCIS();  
    } else if (message.includes(' listPCIDSS')) {
        listPCIDSS();  
    } else if (message.includes(' countPCIDSS')) {
        countPCIDSS();   
    } else if (message.includes(' countComputerSystemsMAD')) {
        countComputerSystemsMAD(); 
    } else if (message.includes(' listComputerSystemsMonitoredNS')) {
        listComputerSystemsMonitoredNS();
    } else if (message.includes(' listComputerSystemsNoRegion')) {
        listComputerSystemsNoRegion();  
    } else if (message.includes(' countComputerSystemsNoRegion')) {
        countComputerSystemsNoRegion();      
    } else if (message.includes(' listComputerSystemsNoSite')) {
        listComputerSystemsNoSite();  
    } else if (message.includes(' countComputerSystemsNoSite')) {
        countComputerSystemsNoSite();               
    } else if (message.includes(' help')) {
        help();
    }
}


//
// Next are all the commands, that will be requested from the API gateway. Assuming bot runs on same host as the API Gateway. Otherwise
// one needs to specify the correct URL. Created one function per call.
//

// Show countComputerSystems
function countComputerSystems() {
    axios.get('http://localhost:5002/countComputerSystems')
        .then(res => {
            const countComputerSystems = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The number of Computer Systems CI's in the CMDB is: ${countComputerSystems}`,
                params);
        });
}

// Show listDuplicates
function listDuplicates() {
    axios.get('http://localhost:5002/listDuplicates')
        .then(res => {
            const listDuplicates = res.data;
            const params = {
                icon_emoji: ':crying:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The list of Duplicates Computer Systems CI's in the CMDB is: \n ${listDuplicates}`,
                params);
        });
}

// Show countComputerSystemsNSG
function countCSNSG() {
    axios.get('http://localhost:5002/countComputerSystemsNSG')
        .then(res => {
            const countCSNSG = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The number of Computer Systems CI's in the CMDB is without Support Group: ${countCSNSG}`,
                params);
        });
}

// Show listComputerSystemsNSG
function listComputerSystemsNSG() {
    axios.get('http://localhost:5002/listComputerSystemsNSG')
        .then(res => {
            const listComputerSystemsNSG = res.data;
            const params = {
                icon_emoji: ':crying:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The list of Computer Systems without support group in the CMDB is: \n ${listComputerSystemsNSG}`,
                params);
        });
}

// Show countApplicationNSG
function countApplicationNSG() {
    axios.get('http://localhost:5002/countApplicationNSG')
        .then(res => {
            const countApplicationNSG = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The number of Application CI's in the CMDB is without Support Group: ${countApplicationNSG}`,
                params);
        });
}


// Show updateRatio
function updateRatio() {
    axios.get('http://localhost:5002/updateRatio')
        .then(res => {
            const updateRatio = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The current update Ratio of the CI's in ComputerSystem is: ${updateRatio}`,
                params);
        });
}

// Show listApplicationCIS
function listApplicationCIS() {
    axios.get('http://localhost:5002/listApplicationCIS')
        .then(res => {
            const listApplicationCIS = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The list of Application CI's in the CMDB is: ${listApplicationCIS}`,
                params);
        });
}

// Show listPCIDSS
function listPCIDSS() {
    axios.get('http://localhost:5002/listPCIDSS')
        .then(res => {
            const listPCIDSS = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The list of PCIDSS CI's in the CMDB is: ${listPCIDSS}`,
                params);
        });
}

// Show countPCIDSS
function countPCIDSS() {
    axios.get('http://localhost:5002/countPCIDSS')
        .then(res => {
            const countPCIDSS = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The count of PCIDSS CI's in the CMDB is: ${countPCIDSS}`,
                params);
        });
}

// Show countPCIDSS
function countComputerSystemsMAD() {
    axios.get('http://localhost:5002/countComputerSystemsMAD')
        .then(res => {
            const countComputerSystemsMAD = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The count MAD's in ComputerSystems is: ${countComputerSystemsMAD}`,
                params);
        });
}

// listComputerSystemsMonitoredNS
function listComputerSystemsMonitoredNS() {
    axios.get('http://localhost:5002/listComputerSystemsMonitoredNS')
        .then(res => {
            const listComputerSystemsMonitoredNS = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The production servers with invalid Monitored Values: ${listComputerSystemsMonitoredNS}`,
                params);
        });
}
// listComputerSystemNoRegion
function listComputerSystemsNoRegion() {
    axios.get('http://localhost:5002/listComputerSystemsNoRegion')
        .then(res => {
            const listComputerSystemsNoRegion = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The servers with missing Region Values: ${listComputerSystemsNoRegion}`,
                params);
        });
}

// countComputerSystemsNoRegion
function countComputerSystemsNoRegion() {
    axios.get('http://localhost:5002/countComputerSystemsNoRegion')
        .then(res => {
            const countComputerSystemsNoRegion = res.data;
            const params = {
                icon_emoji: ':laughing:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The count of servers with missing Region Values: ${countComputerSystemsNoRegion}`,
                params);
        });
}
// listComputerSystemsNoSite
function listComputerSystemsNoSite() {
    axios.get('http://localhost:5002/listComputerSystemsNoSite')
        .then(res => {
            const listComputerSystemsNoSite = res.data;
            const params = {
                icon_emoji: ':cry:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The list of servers with missing Site Values: ${listComputerSystemsNoSite}`,
                params);
        });
}
// countComputerSystemsNoRegion
function countComputerSystemsNoSite() {
    axios.get('http://localhost:5002/countComputerSystemsNoSite')
        .then(res => {
            const countComputerSystemsNoSite = res.data;
            const params = {
                icon_emoji: ':cry:'
            };
          
            bot.postMessageToChannel(
                'sacm', 
                `The count of servers with missing Site Values: ${countComputerSystemsNoSite}`,
                params);
        });
}


// Help of the Robot
function help() {
            const params = {
                icon_emoji: ':smiley:'
            };

            bot.postMessageToChannel(
                'sacm', 
                `ask Niles a list of things to do like: '@niles CMDB commands'`, params);

}