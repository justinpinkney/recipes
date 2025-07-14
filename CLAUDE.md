# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple recipe website built with Eleventy (11ty), a static site generator. The site displays recipes with tag-based filtering functionality.

## Style

Recipes are written in very terse minimal style. Generally they should have an Ingredients and Method section, each second level headers. They are written in markdown with topmatter specifying the title and the tags (the title should not be repeated in the body). There should be no typical recipe "guff" just the simplest shortest description. Ingredient prep instructions (e.g. finely chopped) should be listed with the ingredients. I am familiar with all these recipes, they simply serve as a minimal reminder.

## Development Commands

### Using Make (recommended)
- **Development server**: `make dev` - Builds the site and starts a local server with live reload
- **Build**: `make build` - Generates the static site in the `_site` directory
- **Clean**: `make clean` - Remove build artifacts
- **Install**: `make install` - Install dependencies
- **Help**: `make help` - Show available commands

### Direct commands
- **Development server**: `npx @11ty/eleventy --serve`
- **Build**: `npx @11ty/eleventy`

## Architecture

### Directory Structure
- `content/` - Source content and templates
  - `index.njk` - Homepage template with recipe listing and tag filtering
  - `recipes/` - Individual recipe markdown files with frontmatter
- `public/` - Static assets (CSS, images) copied to build output
- `_site/` - Generated static site output (build artifact)
- `eleventy.config.js` - 11ty configuration

### Key Components

**Recipe Collection**: Configured in `eleventy.config.js:5-7`, collects all markdown files from `content/recipes/*.md` into a "post" collection for rendering.

**Tag System**: 
- Tags are defined in recipe frontmatter (e.g., `tags: [side]`)
- `tagList` collection auto-generates from all recipe tags
- Client-side filtering implemented in `content/index.njk:22-51`

**Content Structure**: Recipes are markdown files with YAML frontmatter containing `title` and `tags` fields. Content follows standard markdown format.

### Templating
Uses Nunjucks templating (`.njk` files). The homepage template includes embedded JavaScript for interactive tag filtering without page reloads.
