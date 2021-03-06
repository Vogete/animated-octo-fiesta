var globalPath = {
    dist : "dist/",
    src: "src/",
    npm : "node_modules/"
};

module.exports = {
    libs:{
        css:[
            globalPath.src + "libs/font-awesome/css/font-awesome.min.css",
            globalPath.src + "libs/foundation/css/foundation.min.css",
        ],
        js: [
            // Order matters
            // globalPath.npm+"vue/dist/vue.js",

            globalPath.src + "libs/jquery.min.js",
            globalPath.src + "libs/what-input.min.js",
            globalPath.src + "libs/foundation/vendor/foundation.min.js",
            globalPath.src + "libs/foundation/app.js"
        ],
        
        // Typescript definition types
        types: [
            globalPath.npm+"/vue/types/index.d.ts"
        ],

        copy_fonts: [
            globalPath.src + "libs/font-awesome/fonts/**/*"
        ]
    },  

    src:{
        root: globalPath.src,
        indexPage: globalPath.src + "index.html",
        importedComponents: globalPath.src + "components/other/",        
        ts: [
            //TS files to compile, order matters
            globalPath.src + "components/utilities.ts",
            globalPath.src + "components/models.ts",

            globalPath.src + "components/app.ts"
        ],

        sass: [
            globalPath.src + "scss/**/*.scss"
        ]
    },

    dist:{
        root: globalPath.dist,
        js: globalPath.dist + "js/",
        css: globalPath.dist + "css/",
        assets: globalPath.dist + "assets/",
        fonts: globalPath.dist + "fonts/"
    }
};
