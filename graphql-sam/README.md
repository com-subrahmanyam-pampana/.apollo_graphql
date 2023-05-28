sam build
sam deploy --guided
sam local start-api
sam local invoke "graphQLSAMfunc" -e query.json
sam local start-api --warm-containers  EAGER --skip-pull-image -p 3000



access-control-allow-origin: "https://studio.apollographql.com",
access-control-allow-credentials: true
npx diagnose-endpoint@1.1.0 --endpoint=http://127.0.0.1:3000/graphql

To test:

{{your URL}}/graphql
Body:
{"operationName": null, "variables": null, "query": "{ hello }"}
Headers
content-type:application/json
