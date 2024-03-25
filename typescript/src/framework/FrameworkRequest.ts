export enum Method {
  GET = "GET",
  POST = "POST",
}
export class FrameworkRequest {

  constructor(
    readonly method: Method,
    readonly path: string,
    readonly body: any
  ) { }

}
