// @ts-check
import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";

const nextConfig = /** @satisfies {import('next').NextConfig} */ ({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
});

const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
