// @/requirements (imports)
const mustache = require("mustache");           // import "mustache" engine here
const fileSystem = require("fs");               // import "fs" (file-system) for reading files
const mustacheTemplateDir = "./main.mustache";  // fetch "./main.mustache" & assign to "mustacheTemplateDir"
const mustacheDataDir = "./data.json";          // fetch "./data.json" & assign to "mustacheDataDir"
const readmeFile = "./README.md";               // fetch "./README.md" & assign to "readmeFile"

// ............................. Methods (handlers) ................................ // 

// handler function(s)
// 1.) generate "Readme.md" from "mustache.main" dynamically
async function handleGenerateReadme () : Promise<void> {
 
 // @/s1: read "mustache-template" (string & html based layout) 
 const mustacheTemplate = await fileSystem.readFileSync(mustacheTemplateDir, "utf8");

 // @/s2: read "mustache-data" (json-data for dynamic fillup)
 const mustacheData = JSON.parse(fileSystem.readFileSync(mustacheDataDir, "utf8"));

 // @/s3: render "mustache-template + mustache.data" to a constant "output"
 const mustacheOutput = mustache.render(mustacheTemplate, mustacheData);

 // @/s4: await writing "mustacheOutput" to "ReadMe.md" (straight)
 await fileSystem.writeFileSync(readmeFile, mustacheOutput);

 // @/test1: console.log(method-data)
 console.log("✅ README.md generated from mustache.main - Himanshu Sharma (Sr. Front-End Developer)");
};

// ......................... Main (Action Object Method) ............................ //

// 2.) generate (async function-object) to hold "async functions"
async function mainAction () : Promise<void> {

  // @/s1: call "handleGenerateReadme()" method
  await handleGenerateReadme();
};

// final-run: method
mainAction(); 