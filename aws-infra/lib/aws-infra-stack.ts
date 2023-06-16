import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as aws_amplify from '@aws-cdk/aws-amplify';

export class AwsInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const amplifyApp = new aws_amplify.App(this, 'sample-react-app', {
    //   sourceCodeProvider: new aws_amplify.GitHubSourceCodeProvider({
    //     owner: ,
    //     respository: ,
    //     oauthToken: cdk.aws_secretsmanager("Secret-Name", {
    //       jsonField: "SecretKey"
    //     })
    //   })
    // })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsInfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
