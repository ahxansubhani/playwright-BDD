import { setWorldConstructor, IWorld } from "@cucumber/cucumber";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export class CustomWorld implements IWorld {
	[key: string]: unknown;
	attach: ICreateAttachment;
	log: ICreateLog;
	parameters: unknown;
	// Define properties or methods here
	scenarioName: string = "";
	stepName: string = "";
	startTime: Date;
}

setWorldConstructor(CustomWorld);
