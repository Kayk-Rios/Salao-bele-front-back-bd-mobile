Projeto front-end, back-end com banco da dados junto a aplicaçao mobile, aplicaçao Web em Next.js e Ts, aplicaçao backend em Nest.js, aplicaçao mobile em React.native 

Tecnologiaasprincipais usadas:  Next.j,Nest.js,PostgreSQL,Prisma,React.native e Ts
Aplicaçao roda ao iniciar o comando "yarn run dev" no diretorio: salao-bele
Web
Acesse: https://salao-bele.netlify.app/

![5](https://github.com/user-attachments/assets/dc5fcd9c-808c-46a8-a1c5-cdf505d8e042)

![6](https://github.com/user-attachments/assets/3813dfde-76d7-4c25-b3c2-26489dcf52c0)

![7](https://github.com/user-attachments/assets/cd88c2e7-e889-4b03-b7d5-279680ac6f07)

![8](https://github.com/user-attachments/assets/14540175-da51-469d-8b58-0c96e277aeac)

Mobile

![1](https://github.com/user-attachments/assets/cc2a4f3b-9e45-4765-b1d9-135198d32ef5)

![2](https://github.com/user-attachments/assets/2cea9a5a-3167-4a50-9df4-7cf9841c5afd)

![3](https://github.com/user-attachments/assets/5aa5be83-dc66-44df-a524-ee5564eb3bcb)

![4](https://github.com/user-attachments/assets/404543a4-1488-4b60-a6cc-1dfb6b82c906)



# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
