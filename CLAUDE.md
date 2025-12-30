# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple recipe website built with Eleventy (11ty), a static site generator. The site displays recipes with tag-based filtering functionality.

## Style

Recipes are written in very terse minimal style. Follow these specific formatting rules:

### Structure
- Use YAML frontmatter with `title` and `tags` fields
- Never repeat the title in the body
- Use exactly two sections: "## Ingredients" and "## Method"
- No introduction, conclusion, or additional text

### Ingredients
- Use bullet points with dashes (-)
- Include quantities and prep instructions with the ingredient (e.g. "0.5 red onion, finely chopped")
- Use precise measurements (e.g. "75g", "0.75 litres", "¼ lemon")
- No separate prep steps

### Method
- Use bullet points with dashes (-)
- Write in imperative mood without capitals (e.g. "fry pancetta", "add orzo")
- Keep steps extremely concise
- No unnecessary words or explanations
- Basic timing included where essential (e.g. "5 mins")

No typical recipe "guff" - just the absolute minimum needed as a reminder for someone familiar with cooking.

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
