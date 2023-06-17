function removeDuplicate( str , n) {
	var s = new Set();
		
	for (var i = 0;i<n;i++)
		s.add(str[i]);
	for (const v of s) {
	document.write(v);
	}
}

	var str = "geeksforgeeks";
	var n = str.length;

	removeDuplicate(str, n);