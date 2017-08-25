# slangbrain.com

## Misc

- Get the leo.org exporter ready to use as bookmarklet with:

```
npm i -g uglify
uglify -s leoToCSV.js -o leoToCSV.min.js && echo "javascript:$(sed 's/"/\&quot;/g' leoToCSV.min.js)" | copy
```