const db = require('../db');

module.exports = async function seed() {
  await db.role.createMany({
    data: [{ name: 'Product Owner' }, { name: 'Worker' }],
  });
  await db.user.createMany({
    data: [
      {
        email: 'brandon.monge@outlook.fr',
        firstname: 'Brandon',
        lastname: 'Monge',
        avatarUrl:
          'https://media-exp1.licdn.com/dms/image/C4E03AQEiSS-qlGWWBg/profile-displayphoto-shrink_800_800/0/1621526642330?e=1630540800&v=beta&t=zZD9KJhych4JyOo_R56WjgTGQ0O-wJwzpfE91Nq4orQ',
        roleId: 2,
      },
      {
        email: 'berdalado@gmail.com',
        firstname: 'Doriane',
        lastname: 'Berdala',
        avatarUrl:
          'https://media-exp1.licdn.com/dms/image/D4E35AQGy6lzwNq6KGQ/profile-framedphoto-shrink_800_800/0/1621518664362?e=1624978800&v=beta&t=U74-v1nfy6plwnuMM4voTVnTWkjpqK0RAhi1xBXacuM',
        roleId: 2,
      },
      {
        email: 'solene.gerard@gmail.com',
        firstname: 'Solène',
        lastname: 'Gerard',
        avatarUrl:
          'https://media-exp1.licdn.com/dms/image/D4D35AQHuh-7n-xo3Cg/profile-framedphoto-shrink_800_800/0/1622061231871?e=1624978800&v=beta&t=7GSWhErbf4lyBVWmT55lGkAfqAWcEikVZc-0WMuzQHo',
        roleId: 2,
      },
      {
        email: 'florian.jaimond@gmail.com',
        firstname: 'Florian',
        lastname: 'Jaimond',
        avatarUrl:
          'https://media-exp1.licdn.com/dms/image/D4D35AQGnORW96ketXQ/profile-framedphoto-shrink_800_800/0/1622759171119?e=1624978800&v=beta&t=4w6ZOw_H5uhLmt4a4maoYXFmOekL2jrtLizEqG55i8o',
        roleId: 2,
      },
      {
        email: 'contact.pro@hkamalo.com',
        firstname: 'Herança',
        lastname: 'Kamalo',
        avatarUrl:
          'https://media-exp1.licdn.com/dms/image/C5603AQFFMK0Xzx-knQ/profile-displayphoto-shrink_800_800/0/1622061615539?e=1630540800&v=beta&t=mHnccCAQ8rE8zpiLqI7UHYxdfXYK0DAXv5nOW3vhAck',
        roleId: 2,
      },
      {
        email: 'fiverr@contact.com',
        firstname: 'Fiverr',
        lastname: 'Pro',
        avatarUrl:
          'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png?auto=format&q=60&fit=max&w=930',
        roleId: 1,
      },
    ],
  });
  await db.project.createMany({
    data: [
      { name: 'HD Rain', budget: '0$' },
      { name: 'Gamelle', budget: '0$' },
      {
        name: "Repair'Auto",
        budget: '0$',
      },
    ],
  });
  await db.tag.createMany({
    data: [
      // Graphics & Design
      { name: 'Logo Design' },
      { name: 'Brand Style Guides' },
      { name: 'Game Art' },
      { name: 'Business Cards & Stationery' },
      { name: 'Illustration' },
      { name: 'Brochure Design' },
      { name: 'Poster Design' },
      { name: 'Flyer Design' },
      { name: 'Book Design' },
      { name: 'Album Cover Design' },
      { name: 'Packaging Design' },
      { name: 'Web & Mobile Design' },
      { name: 'Social Media Design' },
      { name: 'Catalog Design' },
      { name: 'Portraits & Caricatures' },
      { name: 'Cartoons & Comics' },
      { name: 'Photoshop Editing' },
      { name: 'Architecture & Interior Design' },
      { name: 'Building Information Modeling' },
      { name: 'Character Modeling' },
      { name: 'Industrial & Product Design' },
      { name: 'T-Shirts & Merchandise' },
      { name: 'Presentation Design' },
      { name: 'Infographic Design' },
      // Digital Marketing
      { name: 'Social Media Marketing' },
      { name: 'Social Media Advertising' },
      { name: 'SEO' },
      { name: 'Public Relations' },
      { name: 'Email Marketing' },
      { name: 'SEM' },
      { name: 'Marketing Strategy' },
      { name: 'Web Analytics' },
      { name: 'Mobile App Marketing' },
      // Writing & Translation
      { name: 'Articles & Blog Posts' },
      { name: 'Proofreading & Editing' },
      { name: 'Translation' },
      { name: 'Website Content' },
      { name: 'Product Descriptions' },
      { name: 'Book & eBook Writing' },
      { name: 'Resume Writing' },
      { name: 'Brand Voice & Tone' },
      { name: 'Email Copy' },
      { name: 'Technical Writing' },
      { name: 'Sales Copy' },
      { name: 'Press Releases' },
      { name: 'Scriptwriting' },
      // Video & Animation
      { name: 'Whiteboard & Animated Explainers' },
      { name: 'Video Editing' },
      { name: 'Short Video Ads' },
      { name: 'Animated GIFs' },
      { name: 'Logo Animation' },
      { name: 'Intros & Outros' },
      { name: 'Character Animation' },
      { name: '3D Product Animation' },
      { name: 'Lyric & Music Videos' },
      { name: 'Live Action Explainers' },
      { name: 'Visual Effects' },
      { name: 'Product Photography' },
      { name: 'Local Photography' },
      // Music & Audio'
      { name: 'Voice Over' },
      { name: 'Mixing & Mastering' },
      { name: 'Producers & Composers' },
      { name: 'Singers & Vocalists' },
      { name: 'Session Musicians' },
      // Programming & Tech
      { name: 'WordPress' },
      { name: 'Website Builders & CMS' },
      { name: 'Game Development' },
      { name: 'Web Programming' },
      { name: 'E-Commerce Development' },
      { name: 'Mobile Apps' },
      { name: 'Cybersecurity & Data Protection' },
      { name: 'Chatbots' },
      { name: 'Data Analysis & Reports' },
      // Business
      { name: 'Market Research' },
      { name: 'Business Plan' },
      { name: 'Presentation' },
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
