export interface RssResponse<T = string> {
	success: boolean;
	data?: T;
	error?: string;
}
