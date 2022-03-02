const Employee = require('../lib/Employee');
const employee = new Employee('caydee', '132013', 'chstokrp@gmail.com');

test('employee object', () => {
    expect(employee.name).toBe('caydee');
    expect(employee.id).toBe('132013');
    expect(employee.email).toBe('chstokrp@gmail.com');
});

test('getName', () => {
    expect(employee.getName()).toBe('caydee');
});

test('getId', () => {
    expect(employee.getID()).toBe('132013');
});

test('getEmail', () => {
    expect(employee.getEmail()).toBe('chstokrp@gmail.com');
});

test('getRole', () => {
    expect(employee.getRole()).toBe('Employee');
});

