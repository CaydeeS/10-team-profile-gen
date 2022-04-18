const Engineer = require('../lib/Engineer');
const engineer = new Engineer('caydee', '132013', 'chstokrp@gmail.com', 'github');

test('manager object', () => {
    expect(engineer.name).toBe('caydee');
    expect(engineer.id).toBe('132013');
    expect(engineer.email).toBe('chstokrp@gmail.com');
    expect(engineer.github).toBe('CaydeeS');
});

test('getName', () => {
    expect(engineer.getName()).toBe('caydee');
});

test('getId', () => {
    expect(engineer.getID()).toBe('132013');
});

test('getEmail', () => {
    expect(engineer.getEmail()).toBe('chstokrp@gmail.com');
});

test('getGithub', () => {
    expect(engineer.getGithub()).toBe('CaydeeS');
})

test('getRole', () => {
    expect(engineer.getRole()).toBe('Engineer');
});