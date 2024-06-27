export type Sample = {
  text: string;
}

export type ReplyFnType<T> = (
	httpStatus: number,
	response?: T,
	error?: T,
) => void;

export type ReplyResponseType<T> = {
	response: T;
	url: string;
	date: Date;
};