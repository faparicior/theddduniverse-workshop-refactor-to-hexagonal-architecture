import { v4 as uuid } from 'uuid';
import { FrameworkResponse } from "../../framework/FrameworkResponse";
import SqliteConnection from "../../framework/SqliteConnection";
import { FrameworkRequest } from '../../framework/FrameworkRequest';
import { request } from 'http';

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
			id, description, password);


		return new FrameworkResponse(201)

	}

}
