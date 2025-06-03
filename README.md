## Introduction

Built with Next.js, TypeScript, and Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.

## Tech Stack

- Next.js
- PostgreSQL
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## Using the project

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node
- npm

#### Cloning the repository

```bash
git clone https://github.com/FelipeTacara/BookApp
cd BookApp
```
#### Instalation
Install the project dependencies
```bash
npm install
```
#### Set Up Environment Variables
Create a new file named `.env` in the root of your project and add the following content:

```bash
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
```
Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on the [ImageKit](https://imagekit.io), [NeonDB](https://neon.com), [Upstash](https://upstash.com/), and [Resend](https://resend.com/).

#### Running the project
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the project.