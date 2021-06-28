const db = require('../db');

module.exports = async function seed() {
  await db.user.create({
    data: {
      email: 'breaking.code@contact.com',
      firstname: 'Breaking',
      lastname: 'Code',
    },
  });
  await db.job.createMany({
    data: [
      { name: 'Pompier' },
      { name: 'Voleur' },
      { name: 'Dévelopeur' },
      { name: 'Formateur' },
    ],
  });
  await db.skill.createMany({
    data: [
      { name: 'Communication' },
      { name: 'Créativité' },
      { name: 'Autonomie' },
      { name: 'Curiosité' },
    ],
  });
};

module
  .exports()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

// npx prisma migrate dev
// npx prisma db seed -preview-feature
// npx prisma migrate reset
