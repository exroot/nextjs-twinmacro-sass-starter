import Head from "next/head";
import tw, { css } from "twin.macro";
export default function Home() {
  const classicCenter = css`
    ${tw`absolute top-1/2 left-1/2`}
    transform: translate(-50%, -50%);
  `;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div css={classicCenter}>
          <div tw="text-center">
            <h1 tw="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  font-extrabold tracking-tight">
              Starter Build
            </h1>
            <p tw="text-gray-200 text-xl font-light">
              Next.js + twin.macro + Sass
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
