import browsee from '../src';

const testApiKey = "XXXX";

beforeEach(() => {
  delete window._browsee;
});

describe('init', () => {
  it('should throw error if initialized with no options', () => {
    expect(() => { browsee.init(); }).to.throw();
  });

  it('should throw error if initialized without api key', () => {
    expect(() => { browsee.init({}); }).to.throw();
  });

  it('should initialize browsee ', () => {
    browsee.init({ apiKey: testApiKey });
    assert.isDefined(window._browsee, '_browsee is defined');
  });
});

describe('API', () => {
  it('should throw error if API is called before init', () => {
    expect(() => { browsee.logEvent(); }).to.throw();
  });
});
