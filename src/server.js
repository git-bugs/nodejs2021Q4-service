const { PORT } = require('./common/config');
const fastify = require('./app');

(async () => {
  try {
    await fastify.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error)
  }
})();
