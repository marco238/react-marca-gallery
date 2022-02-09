import { create } from "./BaseService";

const http = create();

export function getImages() {
	return http.get(process.env.REACT_APP_JSON_PATH);
}
