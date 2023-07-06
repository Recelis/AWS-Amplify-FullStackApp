import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as secrets_manager from 'aws-cdk-lib/aws-secretsmanager'



export class AwsInfraStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const accessTokenSecret = secrets_manager.Secret.fromSecretAttributes(this, 'AWS-Amplify-Github', {
      secretCompleteArn: "arn:aws:secretsmanager:ap-southeast-2:760383528016:secret:AWS-Amplify-Github-WuALmu"
    });
    const accessToken = accessTokenSecret.secretValueFromJson('GithubKey').unsafeUnwrap().toString()

    const amplifyApp = new amplify.App(this, 'sample-react-app', {
      appName: "AWS-REACT-APP",
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'Recelis',
        repository: "https://github.com/Recelis/AWS-Amplify-FullStackApp",
        oauthToken: accessToken,
      })
    })
    amplifyApp.addBranch('main')
  }
}
