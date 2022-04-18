const Intern = require('../lib/Intern');
const intern = new Intern('caydee', '132013', 'chstokrp@gmail.com', 'UCR');

test('intern object', () => {
    expect(intern.name).toBe('caydee');
    expect(intern.id).toBe('132013');
    expect(intern.email).toBe('chstokrp@gmail.com');
    expect(intern.school).toBe('UCR');
});

test('getName', () => {
    expect(intern.getName()).toBe('caydee');
});

test('getId', () => {
    expect(intern.getID()).toBe('132013');
});

test('getEmail', () => {
    expect(intern.getEmail()).toBe('chstokrp@gmail.com');
});

test('getschool', () => {
    expect(intern.getOfficeNumber()).toBe('UCR');
})

test('getRole', () => {
    expect(intern.getRole()).toBe('Intern');
});