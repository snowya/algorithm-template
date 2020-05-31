let wordBreak = function (s, wordDict) {
    let map = new Map();
    return helper(map, s, wordDict);
}

let helper = function (map, s, wordDict) {
    if(map.has(s)) return map.get(s);
    else if (s==="") return [""];
    let res = [];
    for(let i=0; i<wordDict.length; i++) {
        if(wordDict[i]!==s.substr(0, wordDict[i].length)) continue;
        let temp = helper(map, s.substr(wordDict[i].length), wordDict);
        for(let t of temp) {
            res.push(wordDict[i] + (t ? (" " + t) : t));
        }
    }
    map.set(s, res);
    return res;
}

let result = wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
document.write(result);