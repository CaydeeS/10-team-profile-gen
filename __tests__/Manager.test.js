const Manager = require('../lib/Manager');
const manager = new Manager('caydee', '132013', 'chstokrp@gmail.com', '9513109999');

test('manager object', () => {
    expect(manager.name).toBe('caydee');
    expect(manager.id).toBe('132013');
    expect(manager.email).toBe('chstokrp@gmail.com');
    expect(manager.officeNumber).toBe('9513109999');
});

test('getName', () => {
    expect(manager.getName()).toBe('caydee');
});

test('getId', () => {
    expect(manager.getID()).toBe('132013');
});

test('getEmail', () => {
    expect(manager.getEmail()).toBe('chstokrp@gmail.com');
});

test('getOfficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('9513109999');
})

test('getRole', () => {
    expect(manager.getRole()).toBe('Manager');
});