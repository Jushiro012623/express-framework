export class Response {
    // 2-way mapping: code -> text
    static readonly codes: Readonly<Record<number, string>> = {
        100: 'Continue',
        101: 'Switching Protocols',
        102: 'Processing',
        200: 'OK',
        201: 'Created',
        202: 'Accepted',
        203: 'Non-Authoritative Information',
        204: 'No Content',
        205: 'Reset Content',
        206: 'Partial Content',
        207: 'Multi-Status',
        208: 'Already Reported',
        226: 'IM Used',
        300: 'Multiple Choices',
        301: 'Moved Permanently',
        302: 'Found',
        303: 'See Other',
        304: 'Not Modified',
        305: 'Use Proxy',
        307: 'Temporary Redirect',
        308: 'Permanent Redirect',
        400: 'Bad Request',
        401: 'Unauthorized',
        402: 'Payment Required',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed',
        406: 'Not Acceptable',
        407: 'Proxy Authentication Required',
        408: 'Request Timeout',
        409: 'Conflict',
        410: 'Gone',
        411: 'Length Required',
        412: 'Precondition Failed',
        413: 'Payload Too Large',
        414: 'URI Too Long',
        415: 'Unsupported Media Type',
        416: 'Range Not Satisfiable',
        417: 'Expectation Failed',
        418: "I'm a teapot",
        422: 'Unprocessable Entity',
        425: 'Too Early',
        426: 'Upgrade Required',
        428: 'Precondition Required',
        429: 'Too Many Requests',
        431: 'Request Header Fields Too Large',
        451: 'Unavailable For Legal Reasons',
        500: 'Internal Server Error',
        501: 'Not Implemented',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: 'Gateway Timeout',
        505: 'HTTP Version Not Supported',
        506: 'Variant Also Negotiates',
        507: 'Insufficient Storage',
        508: 'Loop Detected',
        510: 'Not Extended',
        511: 'Network Authentication Required',
    };

    // Reverse mapping: text -> code
    static readonly names: Readonly<Record<string, number>> = Object.fromEntries(
        Object.entries(Response.codes).map(([code, text]) => [text.replace(/\s+/g, '_').toUpperCase(), Number(code)])
    );

    // Example constants for convenience
    // 1xx Informational
    static readonly CONTINUE = 100;
    static readonly SWITCHING_PROTOCOLS = 101;
    static readonly PROCESSING = 102;

    // 2xx Success
    static readonly OK = 200;
    static readonly CREATED = 201;
    static readonly ACCEPTED = 202;
    static readonly NON_AUTHORITATIVE_INFORMATION = 203;
    static readonly NO_CONTENT = 204;
    static readonly RESET_CONTENT = 205;
    static readonly PARTIAL_CONTENT = 206;
    static readonly MULTI_STATUS = 207;
    static readonly ALREADY_REPORTED = 208;
    static readonly IM_USED = 226;

    // 3xx Redirection
    static readonly MULTIPLE_CHOICES = 300;
    static readonly MOVED_PERMANENTLY = 301;
    static readonly FOUND = 302;
    static readonly SEE_OTHER = 303;
    static readonly NOT_MODIFIED = 304;
    static readonly USE_PROXY = 305;
    static readonly TEMPORARY_REDIRECT = 307;
    static readonly PERMANENT_REDIRECT = 308;

    // 4xx Client Errors
    static readonly BAD_REQUEST = 400;
    static readonly UNAUTHORIZED = 401;
    static readonly PAYMENT_REQUIRED = 402;
    static readonly FORBIDDEN = 403;
    static readonly NOT_FOUND = 404;
    static readonly METHOD_NOT_ALLOWED = 405;
    static readonly NOT_ACCEPTABLE = 406;
    static readonly PROXY_AUTHENTICATION_REQUIRED = 407;
    static readonly REQUEST_TIMEOUT = 408;
    static readonly CONFLICT = 409;
    static readonly GONE = 410;
    static readonly LENGTH_REQUIRED = 411;
    static readonly PRECONDITION_FAILED = 412;
    static readonly PAYLOAD_TOO_LARGE = 413;
    static readonly URI_TOO_LONG = 414;
    static readonly UNSUPPORTED_MEDIA_TYPE = 415;
    static readonly RANGE_NOT_SATISFIABLE = 416;
    static readonly EXPECTATION_FAILED = 417;
    static readonly IM_A_TEAPOT = 418;
    static readonly UNPROCESSABLE_ENTITY = 422;
    static readonly TOO_EARLY = 425;
    static readonly UPGRADE_REQUIRED = 426;
    static readonly PRECONDITION_REQUIRED = 428;
    static readonly TOO_MANY_REQUESTS = 429;
    static readonly REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    static readonly UNAVAILABLE_FOR_LEGAL_REASONS = 451;

    // 5xx Server Errors
    static readonly INTERNAL_SERVER_ERROR = 500;
    static readonly NOT_IMPLEMENTED = 501;
    static readonly BAD_GATEWAY = 502;
    static readonly SERVICE_UNAVAILABLE = 503;
    static readonly GATEWAY_TIMEOUT = 504;
    static readonly HTTP_VERSION_NOT_SUPPORTED = 505;
    static readonly VARIANT_ALSO_NEGOTIATES = 506;
    static readonly INSUFFICIENT_STORAGE = 507;
    static readonly LOOP_DETECTED = 508;
    static readonly NOT_EXTENDED = 510;
    static readonly NETWORK_AUTHENTICATION_REQUIRED = 511;

}
