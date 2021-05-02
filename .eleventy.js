module.exports = function (eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);
	const htmlmin = require("html-minifier");
	// Watch our compiled assets for changes
	eleventyConfig.addWatchTarget("./src/compiled-assets/main.css");
	eleventyConfig.addWatchTarget("./src/compiled-assets/main.js");
	eleventyConfig.addWatchTarget("./src/compiled-assets/vendor.js");

	// Copy src/compiled-assets to /assets
	eleventyConfig.addPassthroughCopy({"src/compiled-assets": "assets"});
	// Copy all images
	eleventyConfig.addPassthroughCopy("src/images");

	if (process.env.ELEVENTY_ENV === "production") {
		eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
			if (outputPath.endsWith(".html")) {
				const minified = htmlmin.minify(content, {
					collapseInlineTagWhitespace: false,
					collapseWhitespace: true,
					removeComments: true,
					sortClassName: true,
					useShortDoctype: true,
				});
				return minified;
			}
			return content;
		});
	}

	// Changed the below to includes: "layouts" - it was includes: "_components", layouts: "_layouts",

	return {
		dir: {
			includes: "_includes",
			// layouts: "_layouts",
			input: "src",
			output: "dist",
		},
		// Allows using markup and EJS features in markdown
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md", "ejs"],
	};
};
