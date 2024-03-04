import { v4 as uuid } from 'uuid';
import { FrameworkResponse } from "../../framework/FrameworkResponse";
import SqliteConnection from "../../framework/SqliteConnection";
import { FrameworkRequest } from '../../framework/FrameworkRequest';
import { request } from 'http';

export default class AdvertisementController {

	public async addAdvertisement(req: FrameworkRequest): Promise<FrameworkResponse> {

		const id = uuid();

		const connection = await new SqliteConnection().connect();


		const result = await connection.run('INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?)',
			id, req.description, req.password);


		return new FrameworkResponse(id)

	}

	// public static async getAdvertisement(req: Request, res: Response) {
	// 	const advertisement = await Advertisement.findById(req.params.id);
	// 	res.json(advertisement);
	// }
	//
	// public static async createAdvertisement(req: Request, res: Response) {
	// 	const newAdvertisement = new Advertisement(req.body);
	// 	await newAdvertisement.save();
	// 	res.json(newAdvertisement);
	// }
	//
	// public static async updateAdvertisement(req: Request, res: Response) {
	// 	const updatedAdvertisement = await Advertisement.findByIdAndUpdate(req.params.id, req.body, { new: true });
	// 	res.json(updatedAdvertisement);
	// }
	//
	// public static async deleteAdvertisement(req: Request, res: Response) {
	// 	await Advertisement.findByIdAndDelete(req.params.id);
	// 	res.json({ message: 'Advertisement deleted'
}
