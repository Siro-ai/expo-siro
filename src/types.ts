export interface Address {
	street?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
}

export interface Contact {
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
}

export interface Coordinates {
	lat: number;
	long: number;
}

export interface Stage {
	id: string;
	name?: string;
	color?: string;
	icon?: string;
	won?: boolean;
	interacted?: boolean;
}

export interface Interaction {
	id: string;

	// Optional fields
	userId?: string; // External User ID
	note?: string;
	leadCreatedAt?: Date; // Optional Lead creation date
	dateCreated?: Date; // Interaction creation date
	contacts?: Contact[];
	owner?: string;
	leadId?: string;
	coordinates?: Coordinates;
	stage?: Stage;
	address?: Address;
	metadata?: { [key: string]: any }; // Used for any additional data
}

export enum SiroEnv {
	staging = 'staging',
	production = 'production',
}