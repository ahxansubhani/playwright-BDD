import { faker } from "@faker-js/faker";

export interface UserData {
    email: string;
    firstName: string;
    lastName: string;
}

export function generateRandomUserData(): UserData {
	return {
		email: faker.internet.email(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName()
	};
}
