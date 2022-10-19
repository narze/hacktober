## Quick guide to add your project

> Add your new entry to [entries constant in `src/pages/index.astro`](src/pages/index.astro#13),
> <br /> follow structure defined in [src/types/card.interface.ts](src/types/card.interface.ts)

# Out-of-the-box contributing

### Features-in-wait

- **Project's topics** which may contain multiples, currently singular.
- **Detailed page** to give founder an area of great, motivational, inspirational, and curiousfulness in detail that may convince visitors to make PR to make project better.
  - `inspiredBy?: string;` The link to the website or github repository that the project has been inspired by
  - `keywords: string[];` keywords assisting visitors with further googling
  - `descriptionMarkdown: string;` project's description the founder would like to illustrate (w/ markdown functionallity)
  - `contributingMarkdown?: string;` contributing guideline, typically `CONTRIBUTING.MD` linkout, or you can state it in markdown format.
- **Filtering** since projects listed in the website might be rapidly growth in number, filtering at top of Gallery page will help visitors to focus on technology subject they interested more conveniently
  - `founderName` enumerated in [src/enums/founders.enum.ts](src/enums/founders.enum.ts)
  - `topic` enumerated in [src/enums/topics.enum.ts](src/enums/topics.enum.ts)
  - `title` full text search, regex supported as dev nerd? sound great!
- `/* Anything wanna add here? go ahead! */`

# Project Structure

TBA
