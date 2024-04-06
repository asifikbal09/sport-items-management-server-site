import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import seedSuperAdmin from './app/DB';

// main().catch((err) => console.log(err));

async function server() {
  try {
    await mongoose.connect(config.database_url as string);

    seedSuperAdmin();

    app.listen(config.port, () =>
      console.log(`Example app listening on port ${config.port}!`),
    );
  } catch (err) {
    console.log(err);
  }
}

server();
