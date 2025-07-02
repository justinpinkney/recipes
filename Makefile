.PHONY: dev build clean serve help

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev    - Start development server with live reload"
	@echo "  make build  - Build the static site"
	@echo "  make clean  - Clean build artifacts"
	@echo "  make serve  - Serve the built site locally"
	@echo "  make help   - Show this help message"

# Start development server
dev:
	npx @11ty/eleventy --serve

# Build the site
build:
	npx @11ty/eleventy

# Clean build artifacts
clean:
	rm -rf _site

# Serve built site (useful for testing production build)
serve: build
	npx @11ty/eleventy --serve --dir=_site

# Install dependencies
install:
	npm install