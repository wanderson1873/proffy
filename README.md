<div align="center">

# Proffy

[![Learning project](https://img.shields.io/badge/📚_learning_project-Rocketseat_NLW_%232_%C2%B7_2020-2563EB?style=for-the-badge)](https://rocketseat.com.br/)

**A web and mobile app that connects students with teachers offering private classes.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Knex](https://img.shields.io/badge/Knex.js-D26B38?style=flat-square&logo=knexdotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

</div>

---

## 📌 About

Teachers register their classes with subject, hourly rate and available times. Students search by subject, weekday and time, and contact the teacher on WhatsApp. Built during Rocketseat's **Next Level Week #2**, a one-week hands-on bootcamp.

<div align="center">
  <img src=".github/mockup.png" alt="Proffy screenshot" width="85%">
</div>

## 🧠 What I practiced

- **One API, two clients:** a Node.js + TypeScript API consumed by a React web app and a React Native (Expo) mobile app.
- **SQL with Knex:** migrations, relations between users, classes and schedules, and filtering classes by time ranges.
- **Mobile navigation** with React Navigation (stack and bottom tabs) and favorites saved with AsyncStorage.

## 🚀 Run locally

You need Node.js and Yarn (or npm).

```bash
git clone https://github.com/wanderson1873/proffy.git
```

**Server** (runs on `http://localhost:3333`):

```bash
cd proffy/server
yarn install
yarn knex:migrate
yarn start
```

**Web** (runs on `http://localhost:3000`):

```bash
cd proffy/web
yarn install
yarn start
```

**Mobile** (opens Expo; scan the QR code with the Expo Go app):

```bash
cd proffy/mobile
yarn install
yarn start
```

---

<div align="center">

**Wanderson Oliveira** · Websites & AI solutions that bring businesses more customers

[![derson.cloud](https://img.shields.io/badge/derson.cloud-2563EB?style=flat-square&logo=googlechrome&logoColor=white)](https://derson.cloud)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:wanderson1873@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson1873/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/17816664150)

<sub>Released under the [MIT License](LICENSE).</sub>

</div>
