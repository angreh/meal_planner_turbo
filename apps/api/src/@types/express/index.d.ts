declare namespace Express {
	import { type ReplyFnType } from "shared-types";

	interface Response {
		reply: ReplyFnType;
	}
}
