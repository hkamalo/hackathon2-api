const db = require('../db');

module.exports = async function seed() {
  await db.user.createMany({
    data: [
      {
        email: 'brandon.monge@outlook.fr',
        firstname: 'Brandon',
        lastname: 'Monge',
      },
      {
        email: 'berdalado@gmail.com',
        firstname: 'Doriane',
        lastname: 'Berdala',
      },
      {
        email: 'solene.gerard@gmail.com',
        firstname: 'Solène',
        lastname: 'Gerard',
      },
      {
        email: 'florian.jaimond@gmail.com',
        firstname: 'Florian',
        lastname: 'Jaimond',
      },
      {
        email: 'contact.pro@hkamalo.com',
        firstname: 'Herança',
        lastname: 'Kamalo',
      },
    ],
  });
  await db.project.createMany({
    data: [{ name: 'HD Rain' }, { name: 'Gamelle' }, { name: "Repair'Auto" }],
  });
  await db.job.createMany({
    data: [
      { name: 'Graphics & Design' },
      { name: 'Digital Marketing' },
      { name: 'Writing & Translation' },
      { name: 'Video & Animation' },
      { name: 'Music & Audio' },
      { name: 'Programming & Tech' },
      { name: 'Business' },
    ],
  });
  await db.skill.createMany({
    data: [
      // Graphics & Design
      { name: 'Logo Design', jobId: 1 },
      { name: 'Brand Style Guides', jobId: 1 },
      { name: 'Game Art', jobId: 1 },
      { name: 'Business Cards & Stationery', jobId: 1 },
      { name: 'Illustration', jobId: 1 },
      { name: 'Brochure Design', jobId: 1 },
      { name: 'Poster Design', jobId: 1 },
      { name: 'Flyer Design', jobId: 1 },
      { name: 'Book Design', jobId: 1 },
      { name: 'Album Cover Design', jobId: 1 },
      { name: 'Packaging Design', jobId: 1 },
      { name: 'Web & Mobile Design', jobId: 1 },
      { name: 'Social Media Design', jobId: 1 },
      { name: 'Catalog Design', jobId: 1 },
      { name: 'Portraits & Caricatures', jobId: 1 },
      { name: 'Cartoons & Comics', jobId: 1 },
      { name: 'Photoshop Editing', jobId: 1 },
      { name: 'Architecture & Interior Design', jobId: 1 },
      { name: 'Building Information Modeling', jobId: 1 },
      { name: 'Character Modeling', jobId: 1 },
      { name: 'Industrial & Product Design', jobId: 1 },
      { name: 'T-Shirts & Merchandise', jobId: 1 },
      { name: 'Presentation Design', jobId: 1 },
      { name: 'Infographic Design', jobId: 1 },
      // Digital Marketing
      { name: 'Social Media Marketing', jobId: 2 },
      { name: 'Social Media Advertising', jobId: 2 },
      { name: 'SEO', jobId: 2 },
      { name: 'Public Relations', jobId: 2 },
      { name: 'Email Marketing', jobId: 2 },
      { name: 'SEM', jobId: 2 },
      { name: 'Marketing Strategy', jobId: 2 },
      { name: 'Web Analytics', jobId: 2 },
      { name: 'Mobile App Marketing', jobId: 2 },
      // Writing & Translation
      { name: 'Articles & Blog Posts', jobId: 3 },
      { name: 'Proofreading & Editing', jobId: 3 },
      { name: 'Translation', jobId: 3 },
      { name: 'Website Content', jobId: 3 },
      { name: 'Product Descriptions', jobId: 3 },
      { name: 'Book & eBook Writing', jobId: 3 },
      { name: 'Resume Writing', jobId: 3 },
      { name: 'Brand Voice & Tone', jobId: 3 },
      { name: 'Email Copy', jobId: 3 },
      { name: 'Technical Writing', jobId: 3 },
      { name: 'Sales Copy', jobId: 3 },
      { name: 'Press Releases', jobId: 3 },
      { name: 'Scriptwriting', jobId: 3 },
      // Video & Animation
      {
        name: 'Whiteboard & Animated Explainers',
        jobId: 4,
      },
      { name: 'Video Editing', jobId: 4 },
      { name: 'Short Video Ads', jobId: 4 },
      { name: 'Animated GIFs', jobId: 4 },
      { name: 'Logo Animation', jobId: 4 },
      { name: 'Intros & Outros', jobId: 4 },
      { name: 'Character Animation', jobId: 4 },
      { name: '3D Product Animation', jobId: 4 },
      { name: 'Lyric & Music Videos', jobId: 4 },
      { name: 'Live Action Explainers', jobId: 4 },
      { name: 'Visual Effects', jobId: 4 },
      { name: 'Product Photography', jobId: 4 },
      { name: 'Local Photography', jobId: 4 },
      // Music & Audio'
      { name: 'Voice Over', jobId: 5 },
      { name: 'Mixing & Mastering', jobId: 5 },
      { name: 'Producers & Composers', jobId: 5 },
      { name: 'Singers & Vocalists', jobId: 5 },
      { name: 'Session Musicians', jobId: 5 },
      // Programming & Tech
      { name: 'WordPress', jobId: 6 },
      { name: 'Website Builders & CMS', jobId: 6 },
      { name: 'Game Development', jobId: 6 },
      { name: 'Web Programming', jobId: 6 },
      { name: 'E-Commerce Development', jobId: 6 },
      { name: 'Mobile Apps', jobId: 6 },
      {
        name: 'Cybersecurity & Data Protection',
        jobId: 6,
      },
      { name: 'Chatbots', jobId: 6 },
      { name: 'Data Analysis & Reports', jobId: 6 },
      // Business
      { name: 'Market Research', jobId: 7 },
      { name: 'Business Plan', jobId: 7 },
      { name: 'Presentation', jobId: 7 },
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
