// getting-started.js
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`app listen on port ${config.port}`);
    });
  } catch (err) {
    console.log(`port error ${err}`);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
