# MARKDOWN LANG
## Headings
<!-- Heading -->
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading 5
###### Heading 6
<!-- Only u~ H6 -->
<!-- Ruler -->
___
---

## TextStyle
<!-- Italic -->
*This Is Italic* \"*This Is Italic*"

_This Is Italic_ \"_This Is Italic_"

<!-- Strong -->
**This Is Bold** \"**This Is Bold***"

__This Is Bold__ \"__This Is Bold___"

<!-- Strikethrough -->
~~This Is Strikethrough~~ \"~~This Is Strikethrough~~"

---

## Quotes
<!-- Blockuote -->
> This Is Quote \"> This Is Quote"
___

## Links
<!-- Links -->
<!-- without title --> 
[Profile](http://github.com/prasojowahyu)

<!-- With title -->
[Profile](http://github.com/prasojowahyu "Github Profile /Prasojowahyu")

___
___

## LISTS

<!-- UL -->
* Item 1 \"* Item 1"
* Item 2
* Item 3 
    * Nested Item 1 \"(tab)* Nested Item 1"
    * Nested Item 2
        * Nested Item 1

<!-- OL -->
1. Item 1
1. Item 2
    1. Nested Item 1
    1. Nested Item 2
        1. Nested Item 1
___

## Inlines
<!-- Inline Code Block -->
`<?phpp i=1; ?>`

## Images
<!-- Linked img -->
![Github PP](https://avatars2.githubusercontent.com/u/64030808?s=400&u=234e9da1e9cb53dff4ed2442280e01020d545c5e&v=4)
___
---

## GitHub Markdown
<!-- Code Blocks -->
```bash
    npm install
    npm start
```
<!-- Js -->
```javascript
    function add(num1, num2) {
        return num1 + num2;
    }
```
<!-- Py -->
```python
    def add(num1, num2):
        return num1 + num2
```
<!-- PHP -->
```php
    <?php
        //event forward
	$bot->on('channel_forward', function( $fwd ) {
		//ketika ada channel respon forward dari twitter, ambil pesan
		$msg	= Bot::message(); //ambil dari respon bot
		$isi	= $msg['text']; //ambil isi teks respon(json)

		//kirim ulang isi teks
		Bot::sendMessage($isi);
	});
    ?>
```
___

## Tables
<!-- Manual -->
| Name  | Num       |
| ---   | ---       |
| Wah   | 0811  |
| Yu    | 0822  |
| Pras  | 08515 |
___

## Task Lists
* [x] Task 1
* [x] Task 2
* [ ] Task 3

---
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi laudantium, recusandae qui eaque reprehenderit quae rerum tempora omnis harum, corrupti delectus nihil asperiores iure saepe nulla eius velit explicabo deserunt?