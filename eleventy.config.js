module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"./public/":"/"});

    // Add recipes
    eleventyConfig.addCollection("post", function(collection) {
        return collection.getFilteredByGlob("content/recipes/*.md");
    });

    // Add collection for tags
    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(function(item) {
            if ("tags" in item.data) {
                let tags = item.data.tags;
                tags = tags.filter(item => !["post"].includes(item));
                for (const tag of tags) {
                    tagSet.add(tag);
                }
            }
        });
        return [...tagSet].sort();
    });

    // Set input and output directories
    return {
        dir: {
            input: "content",
            output: "_site"
        }
    };
};
