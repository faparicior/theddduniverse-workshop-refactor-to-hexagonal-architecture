import { FrameworkResponse } from "../../framework/FrameworkResponse";
import SqliteConnection from "../../framework/database/SqliteConnection";
import { FrameworkRequest } from '../../framework/FrameworkRequest';
import { createHash } from "node:crypto";
import { SqliteConnectionFactory } from "../../framework/database/SqliteConnectionFactory";

type AddAdvertisementRequest = FrameworkRequest & {
	body: {
		id: string;
		description: string;
		password: string;
	};
};
export default class AdvertisementController {


	public async addAdvertisement(req: AddAdvertisementRequest): Promise<FrameworkResponse> {

		const connection = await SqliteConnectionFactory.createClient();

		const advertisement = {
			id: req.body.id,
			description: req.body.description,
			password: req.body.password
		};

		await connection.execute(
			'INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?)',
			[advertisement.id, advertisement.description, createHash('md5').update(advertisement.password).digest('hex')]);

		return new FrameworkResponse(201)

	}

}
