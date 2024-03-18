import { v4 as uuid } from 'uuid';
import { FrameworkResponse } from "../../framework/FrameworkResponse";
import SqliteConnection from "../../framework/SqliteConnection";
import { FrameworkRequest } from '../../framework/FrameworkRequest';

const connection = new SqliteConnection().connect();

export default class AdvertisementController {

	public async addAdvertisement(req: FrameworkRequest): Promise<FrameworkResponse> {

		const id = uuid();

		const connection = await new SqliteConnection().connect();


		const result = await connection.run('INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?)',
			id, req.description, req.password);


		return new FrameworkResponse(id)

	}

}
