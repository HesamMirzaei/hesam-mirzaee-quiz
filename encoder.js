export default function encoder(line) {  
    let tmp = line[0];  
    let str = line.replace(new RegExp('^' + line[0]), line[line.length-1]);  
    let str2 = str.replace(new RegExp(str[str.length-1] + '$'), tmp);  
    return str2.toLowerCase().replace(/[a-z]/g, function(c){
        return String.fromCharCode(c.charCodeAt(0)+1);
    }).replace(/[aeiou]/g, function(c){
        return c;
    });
}


