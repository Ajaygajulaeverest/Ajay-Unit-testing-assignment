// eslint-disable-next-line no-console
import jackpot from './jackpot';
import { Logger } from './logger';
import { RandomNumberGenerator } from './RandomNumberGenerator';

const stubs = new RandomNumberGenerator();
const loggerMo = new Logger();
const enco = new jackpot(stubs, loggerMo);

enco.spin();
