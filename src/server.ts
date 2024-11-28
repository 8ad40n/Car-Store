import app from "./app";

const port = 5000;

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