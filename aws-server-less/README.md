
npm install -g serverless

# To run locally
serverless invoke local -f graphql -p query.json
query.json is the input required to the lambda function

# To deploy to AWS
serverless deploy