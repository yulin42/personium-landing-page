# Personium · Sigmood

Next.js static site for personium.com. The root introduces Personium and links to its iPhone app, Sigmood.

| Page | Path |
| --- | --- |
| Product / marketing URL | /sigmood/ |
| Introduction | /sigmood/introduction/ |
| Support | /sigmood/support/ |
| Privacy | /sigmood/privacy/ |

The earlier /support/ and /privacy/ addresses still work and identify the product-scoped URLs as canonical. The landing page's reading sample is a local, illustrative sequence; it doesn't send prompts to an AI service.

Run `npm ci` and `npm run dev` for development. Run `npm run build` to generate the static site in `out/`. Directory indexes support direct navigation on static hosting. The existing GitHub Actions workflow deploys the export on pushes to main. For production, configure personium.com as the Pages custom domain and point its DNS to the correct Pages origin; the CNAME file alone does not change account settings or DNS.
