
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';
const User = () => {
    const id = faker.string.uuid();
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
        firstName,
        lastName
    });

    return {
        id, sex, firstName, lastName, email,
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
    };
};

export function GET() {

    const Users = [];
    for (let i = 0; i < 1000; i++) {
        const user = User();
        user.index = i;
        Users.push(user);
    }
    return NextResponse.json({ Users });

}