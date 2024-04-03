import { FrameworkResponse } from "../../framework/FrameworkResponse";
import SqliteConnection from "../../framework/database/SqliteConnection";
import { FrameworkRequest } from '../../framework/FrameworkRequest';
import {createHash} from "node:crypto";

type AddAdvertisementRequest = FrameworkRequest & {
	body: {
		id: string;
		description: string;
		password: string;
	};
};
export default class AdvertisementController {

	public async addAdvertisement(req: AddAdvertisementRequest): Promise<FrameworkResponse> {

		const connection = await new SqliteConnection().connect();

		const { id, description, password } = req.body;

		const result = await connection.run('INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?)',
			id, description, createHash('md5').update(password).digest('hex'));


		return new FrameworkResponse(201)

	}

}
