import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BufferStack } from '../lib/buffer-stack.js';
import { test } from 'vitest';

test('Stack has a function', () => {
  const app = new App();

  const stack = new BufferStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Runtime: 'nodejs20.x',
  });
});