import { Logger } from '@aws-lambda-powertools/logger';
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware';
import middy from '@middy/core';
import type { Context } from 'aws-lambda';

export const logger = new Logger({
  logBufferOptions: {
    enabled: true,
    maxBytes: 3000000,
    flushOnErrorLog: true,
  },
});

export const handler = middy()
  .use(injectLambdaContext(logger, { flushBufferOnUncaughtError: true }))
  .handler(async (event: { shouldFail: boolean }, context: Context) => {
    logger.debug('processing', { requestId: context.awsRequestId });

    if (event.shouldFail) {
      try {
        throw new Error('Simulated error');
      } catch (error) {
        logger.error('Error occurred', { error });
        throw error;
      }
    }
  });
