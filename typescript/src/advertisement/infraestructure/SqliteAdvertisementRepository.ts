import { Database } from 'sqlite';
import { AdvertisementRepository } from '../domain/AdvertisementRepository';
import { Advertisement } from '../domain/model/Advertisement';



export class SqliteAdvertisementRepository implements AdvertisementRepository {


  constructor(
    private connection: Database) {
  }

  async save(advertisement: Advertisement): Promise<void> {

    await this.connection.run(
      "INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?) ON CONFLICT(id) DO UPDATE SET description = excluded.description, password = excluded.password",
      advertisement.toPrimitives().id, advertisement.toPrimitives().description, advertisement.toPrimitives().password);
  }

}
