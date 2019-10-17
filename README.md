# Jira Panel for the Azure DevOps Jira Integration
## Overview
This is a plugin which adds another panel into Jira. This allows a user to see linked pull requests and repositories for a particular issue.
## Setup
Your ```attlassian-connect.json``` is used to upload your plugin to jira.
These 4 section of the JSON are particularly important
- baseUrl - This is the URL that your plugin can be accessed by
- lifecycle method - You must have an installed lifecycle method
- authentication type - This must be set jwt
- modules section - This should contain one of the web panels(the example below uses left panel)

The JSON should look something like this after configuration
```json 
{
    "name": "<NAME>",
    "description": "<DESCRIPTION>",
    "key": "<KEY>",
    "baseUrl": "<BASEURL IMPORTANT>",
    "scopes" : [
        "read", "write"
    ],
    "vendor": {
        "name": "<COMPANY>",
        "url": "<URL>"
    },
"authentication": {
    "type": "jwt"
},
"lifecycle": {
    "installed": "/Installed"
  },
"apiVersion": 1,
"modules": {
    "webPanels": [ 
        {
            "key": "left-panel",
            "location": "atl.jira.view.issue.left.context",
            "name": {
                "value": "<TITLE OF THE PANEL>"
            },
            "url": "/index.html"            
        }
    ]   
 }
}
```
run `npm start` in terminal to start the application
