/**
 * modual loaders are used to do some preprocessing on files before they are added to our
 * bundle.js file.
 *
 * babel
 * turning es2015 code into es5 code
 *
 * babel-loader - teaches babel how to work with webpack
 * babel-core - knows how to take in code, parse it, and generate some output files
 * babel-preset-env - ruleset for telling babel exactly what pieces of es2015/6/7 syntax to look for and how to turn
 * it into es5 code
 *
 * webpack doesn't automatically include all js files. for a file to be imported into the bundle, you have to include
 * the file
 *
 * css-loader - knows how to deal with css imports
 * style-loader - takes css and imports and adds them to the html document
 *              - the style loader loads the css into the head tag of the document
 *
 * LOADERS ARE APPLIED FROM RIGHT TO LEFT!
 * 
 * css files load faster than if the css is part of the document.
 */
