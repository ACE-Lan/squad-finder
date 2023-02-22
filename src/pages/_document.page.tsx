import { getCssText } from "@/styles/styles";
import { Main, NextScript, Head, Html } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* TO DO - import font */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
