# Introduction

This is a simple repository to demo how a SaaS connector could be implemented to be triggered from a workflow

## Getting started

First download dependencies

```
npm install
```

create a dummy config file named config.json with contents = `{}`

now build and deploy the app

```
sail conn create
npm run pack-zip
sail conn upload -c <connectorId> -f .\dist\workflow-compute-0.1.0.zip
sail conn invoke test-connection -c <connectorId> -p config.json
```

Now invoke the connector from an API call:

```
curl --location 'https://devrel.api.identitynow.com/beta/platform-connectors/<connectorId>/invoke' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>' \
--data '{
	"tag": "latest",
	"type": "std:account:list",
	"config": {},
	"input": {}
}'
```