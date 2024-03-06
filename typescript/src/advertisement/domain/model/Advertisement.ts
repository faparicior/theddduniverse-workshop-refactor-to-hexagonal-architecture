export class Advertisement {

  constructor(
    private readonly _id: string,
    private _description: string,
    private _password: string
  ) {
  }

  public id(): string { // TODO: check with fernando: use getter or to primitives
    return this._id
  }

  public description(): string {
    return this._description
  }

  public password(): string {
    return this._password
  }

  toPrimitives() {
    return {
      id: this._id,
      description: this._description,
      password: this._password
    };
  }
}

