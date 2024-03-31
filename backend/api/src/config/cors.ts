import corsFn from 'cors';
const allowedOrigins = ['http://localhost:3005', 'http://localhost:4002'];
export const cors = corsFn({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
});
