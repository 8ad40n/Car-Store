import app from "./app";
import config from "./app/config/config";

const port = config.port;

async function bootstrap() {
  try {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
bootstrap();