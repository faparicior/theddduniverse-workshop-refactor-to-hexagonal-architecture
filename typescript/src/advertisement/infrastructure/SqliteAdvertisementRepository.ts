import { AdvertisementRepository } from '../domain/AdvertisementRepository';
import { Advertisement } from '../domain/model/Advertisement';
import { createHash } from "node:crypto";
import { DatabaseConnection } from '../../framework/database/DatabaseConnection';

export class SqliteAdvertisementRepository implements AdvertisementRepository {

  constructor(
    private connection: DatabaseConnection) {
  }

  async save(advertisement: Advertisement): Promise<void> {

    await this.connection.execute(
      `INSERT INTO advertisements (id, description, password) 
      VALUES (?, ?, ?) 
      ON CONFLICT(id) DO UPDATE 
      SET description = excluded.description, password = excluded.password`, [advertisement.id(), advertisement.description(), createHash('md5').update(advertisement.password()).digest('hex')]);

  }
}
