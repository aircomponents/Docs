import lunr from "/home/zos/documents/GitHub/MyFork/Docs/AirCom-Docs/node_modules/lunr/lunr.js";
require("/home/zos/documents/GitHub/MyFork/Docs/AirCom-Docs/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/home/zos/documents/GitHub/MyFork/Docs/AirCom-Docs/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/home/zos/documents/GitHub/MyFork/Docs/AirCom-Docs/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = false;
export const language = ["en","zh"];
export const searchIndexUrl = "search-index{dir}.json?_=83c2f434";
export const searchResultLimits = 8;