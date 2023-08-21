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
	latitude: number;
	longitude: number;
}

export interface Stage {
	id: string;
	name?: string;
	color?: string;
	icon?: string;
	// won indicates whether or not this stage represents a successful outcome.
	won?: boolean;
	// interacted indicates whether or not this stage represents an interaction. For example, a "no show" stage would not be considered an interaction.
	interacted?: boolean;
}


export interface Interaction {
	// id is the unique ID of the interaction in your database.
	id: string;

	// Optional fields	
	// leadId is the unique id of this lead in your database.
	leadId?: string;

	// userId is the ID of the currently logged in user.
	userId?: string;
	note?: string;

	// stage is the current stage of the lead. If this interaction involved a stage change, use the stage that the lead was changed to.
	stage?: Stage;
	coordinates?: Coordinates;
	address?: Address;
	// dateCreated is the date of the interaction. This is most likely the current date.
	dateCreated?: Date;
	// leadDateCreated is the date that this lead was created.
	leadDateCreated?: Date;
	contacts?: Contact[];
	// metadata is used for any additional data
	metadata?: { [key: string]: any };
}

export enum Environment {
	staging = 'staging',
	production = 'production',
}