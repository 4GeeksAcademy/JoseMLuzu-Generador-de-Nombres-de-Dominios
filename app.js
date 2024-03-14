let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        let domainName = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
        console.log(domainName);
      }
    }
  }
}
