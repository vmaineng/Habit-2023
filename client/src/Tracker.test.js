const tracker = require('./components/Tracker');

test('adds 1 + 2 to equal 3', () => {
    expect(tracker(1,2)).toBe(3);
})