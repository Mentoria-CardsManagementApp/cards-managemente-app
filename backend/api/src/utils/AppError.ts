enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  SERVER_ERROR = 500,
}

interface AppErrorParams {
  message: string;
  statusCode: HTTPStatusCode;
  tags?: { [key: string]: string };
  isCritical?: boolean;
  trace?: string;
}

export class AppError extends Error {
  statusCode: number;
  isCritical: boolean;
  tags?: { [key: string]: string };
  trace?: string;

  constructor({
    message,
    statusCode,
    isCritical,
    tags,
    trace,
  }: AppErrorParams) {
    super(message);
    this.statusCode = statusCode;
    this.isCritical = isCritical ?? false;
    this.tags = tags;
    this.trace = trace;
    Object.setPrototypeOf(this, AppError.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
