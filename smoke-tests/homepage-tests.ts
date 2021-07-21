import Current from 'tools/current';
import { config } from 'tools/env.config';
import Home from '../features/homepage/home.helper';

const hubURL = config.env.ENVIRONMENTS.test.url;

describe('ENSEK: Home page navigation', () => {
  beforeAll(async () => {
    await Current.startContext(hubURL);
  });

  afterEach(async () => {
    //    const [testType, testStorage, testCaseId, testName] = expect
    //      .getState()
    //      .currentTestName.split(':')
    //      .map(x => x.trim());
    //    await Report.testCoverage(testType, testStorage, testCaseId, testName);
  });

  afterAll(async () => {
    await Current.closeContext();
  });

  it('Home page loads', async () => {
    await Home.loads();
  });
});
