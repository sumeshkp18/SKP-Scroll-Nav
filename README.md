SKP Scroll Nav
-------

[1]: <https://github.com/sumeshkp18/SKP-Scroll-Nav>

#### Download Assets

To start working with SKP Scroll Nav right away, there's a couple of files need to be downloaded:

- [skpscrollnav.css](https://github.com/sumeshkp18/SKP-Scroll-Nav)
- [skpscrollnav.js](https://github.com/sumeshkp18/SKP-Scroll-Nav)

#### Implementation of SkpScrollNav

Just add a link to the css file in your `<head>`:

```html
<link rel="stylesheet" type="text/css" href="/css/skpscrollnav.css"/>
```

Next, place the html structure inside your ```<body>``` tag:

```html
<div class="skp-slider">
    <ul class="skp-items">
        <li><a href="#item1">Item 1</a></li>
        <li><a href="#item2">Item 2</a></li>
        <li><a href="#item3">Item 3</a></li>
        <li><a href="#item4">Item 4</a></li>
        <li><a href="#item5">Item 5</a></li>
    </ul>
</div>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="/js/skpscrollnav.min.js"></script>
```

Initialize with:

```javascript
$(element).skpscrollnav(); 

// $('.skp-slider').skpscrollnav();
```


#### Contributing

PLEASE review CONTRIBUTING.md prior to requesting a feature, filing a pull request or filing an issue.

#### Browser support

SkpScrollNav works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

#### Dependencies

jQuery 3.4

#### License

Copyright (c) 2019 Sumesh KP

Licensed under the MIT license.