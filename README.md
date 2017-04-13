# lnG
HTML if else for grammar in language

To include lnG plugin
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.lnG.js"></script>
```

Sample code
```html
<lng v:0="no message" v:1="message" v="0">messages</lng>     // no message
<lng v:0="no message" v:1="message" v="1">messages</lng>     // message
<lng v:0="no message" v:1="message" v="2">messages</lng>     // messages
<lng v:0="no message" v:1="message" v="3">messages</lng>     // messages

<lng v:boy="his" v:girl="her" v="girl">their</lng>           // her
```

To update pBar-items after new items are added to document
```javascript
$("lng").lng(); // run for new elements
$("lng.gender").lng('boy'); // to update gender in text
```
