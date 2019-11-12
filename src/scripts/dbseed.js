const commander = require("commander");
const admin = require("firebase-admin");
const serviceAccount = require("../firebase-adminsdk.json");
const tasks = require("../mocks/tasks.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const uploadSeed = async collection => {
  const ref = db.collection(collection);

  switch (collection) {
    case 'tasks': {
      const docs =
        tasks.map(task => ({
          ...task,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        })) || [];

      for await (const doc of docs) {
        await ref.add(doc);
      }

      return;
    }

    default: {
      throw new Error('specify target collection');
    }
  }
};

commander.version('0.1.0').arguments('<collection>').action(uploadSeed);

commander.parse(process.argv);
