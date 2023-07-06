import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as secrets_manager from 'aws-cdk-lib/aws-secretsmanager'



export class AwsInfraStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const accessTokenSecret = secrets_manager.Secret.fromSecretAttributes(this, 'AWS-Amplify-Github', {
      secretCompleteArn: "arn:aws:secretsmanager:ap-southeast-2:760383528016:secret:AWS-Amplify-Github-WuALmu"
    });
    const accessToken = accessTokenSecret.secretValueFromJson('GithubKey').unsafeUnwrap().toString()
    console.log(accessToken)

    const amplifyApp = new amplify.CfnApp(this, 'sample-react-app', {
      name: "AWS-REACT-APP",
      repository: "https://github.com/Recelis/AWS-Amplify-FullStackApp",
      accessToken,
    }

    // {
    //   sourceCodeProvider: new aws_amplify({
    //     owner: "Recelis",
    //     repository: "https://github.com/Recelis/AWS-Amplify-FullStackApp",
    //     oauthToken: cdk.aws_secretsmanager
    //       ("AWS-Amplify-Github", {
    //       jsonField: "GithubKey"
    //     })
    //   })
    // })
    )
    // const mainBranch = amplifyApp("main");
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsInfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
