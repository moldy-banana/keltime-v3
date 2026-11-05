const { DateTime } = require("luxon");



module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/");

    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/posts/");

    eleventyConfig.addCollection('posts', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/posts/**/*.md');
    })
eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});
    eleventyConfig.setServerOptions({
            indexFileName: "blog.html",
        });
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'], 
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        
    };
}
