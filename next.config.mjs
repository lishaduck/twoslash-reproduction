// @ts-check
import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerTwoslash } from "@shikijs/twoslash";

const nextConfig = /** @satisfies {import('next').NextConfig} */ ({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
});

const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
            }),
          ],
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
