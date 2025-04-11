import { Logger } from '@aws-lambda-powertools/logger';

export const logger = new Logger({
  logBufferOptions: {
    enabled: true,
    maxBytes: 175,
  },
});

export const handler = async () => {
  logger.debug('ok');
  logger.debug('processing');
};
