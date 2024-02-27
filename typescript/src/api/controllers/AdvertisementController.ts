import SqliteConnection from "../../framework/SqliteConnection";
import {sprintf} from "sprintf-js";

export default class AdvertisementController {

	public static async addAdvertisement(req: Request, res: Response) {
		const connection = new SqliteConnection().connect();

        const advertisement = await connection.exec(
            sprintf("INSERT INTO advertisements (id, description, password) VALUES ('%s', '%s', '%s');",
                )
        )
        // const advertisements = await Advertisement.find();
		// res.json(advertisements);

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