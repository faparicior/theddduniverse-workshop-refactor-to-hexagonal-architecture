export class Advertisement {

  constructor(
    private readonly _id: string,
    private _description: string,
    private _password: string
  ) {
  }

  public id(): string {
    return this._id
  }

  public description(): string {
    return this._description
  }

  public password(): string {
    return this._password
  }
}
