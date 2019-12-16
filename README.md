## Serverless framework

I've used serverless on several occassions as a way to quickly boostrap projects that have required some sort of lambda logic. It also allows you to easily bundle a cloudformation spec along with your lambda functions so that you can quickly spin up both your required AWS resources and lambda logic.

 This project makes uses of a couple plugins:

- serverless-finch
- serverless-plugin-cloudfront-lambda-edge

#### serverless-plugin-cloudfront-lambda-edge
 
The lambda-edge plugin allowed me to quickly create put together an authentication check on each cloudfront hit. The authentication isn't true security (it uses basic auth), but it will keep the demo out of the hands of crawlers. I didn't know if you would feel comfortable with a bootleg datastax look alike being accessible on the internet.

#### serverless-finch

The severless finch plugin is one that I've really enjoyed using, and one that I've also contributed a bit too. It provides a great set of commands to publish assets to an s3 bucket. 
