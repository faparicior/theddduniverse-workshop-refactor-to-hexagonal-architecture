import {Database} from "sqlite";

export interface DatabaseConnection {

    connect(): Promise<Database>;

}
