export default function removeRepetitive(string) {
    return string.split('')
	    .filter(function(item, pos, self)
	    {
	        return self.indexOf(item) == pos;
	    }
        ).join('');
        
}


