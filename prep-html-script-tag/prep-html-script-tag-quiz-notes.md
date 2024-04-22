# prep-html-script-tag-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What tag is needed to load JavaScript scripts into an HTML document?
  We use the script tag to load JS scripts, internal or external.

- How do you use a script tag to write JavaScript directly in the HTML document?
  You use script tag as internal script with opening and closing tag:

  ```html
  <script>
    console.log('Direct Script');
  </script>
  ```

- How do you use a script tag to load an external JavaScript file?
  You use the src attribute of the script tag to specify the URL of an external JS fil:
  ```html
  <script src="path/to/external/script.js"></script>
  ```

## Notes

Two common ways to run JS in the browser:

- How to use <script> to add JS directly to the index.html file.
- How to use the <script> tag and the src attribute to load JS from an external file into the index.html.

What is <script> used for?

- the 'script' tag is used in HTML to embed a client-side script (ex: JS).
  --> can contain direct script statements or point to external script file through 'src' attribute
- Internal Script: Placed directly between 'script' and '/script'.
- External Script: 'src' attribute specifies the URL of the external script file.

What is 'src'?

- 'src' attribute of 'script' tag specifies the URL of external JS file.
  --> Browser requests this file and execute the script found in it.
  This is very COMMON.

Internal Script Example:

```html
<script>
  console.log('Hello, world!');
</script>
```

External Script Example:

```html
<script src="path/to/external/script.js"></script>
```

Placement:

- Can be placed between the <head> and <body> of HTML doc.
  -> Placing it just before the closing </body> tag allows for the HTML to be displayed before the script is loaded.

Execution:

- Scripts executed in the order they appear in doc.
  -> Advanced:
  --> If 'async' or 'defer' attributes are used with external scripts, this behavior can
  be altered to improve page load performance.

Outputting Text to Console:

- Console.log() used to output text to the web console.
  ->
  console.log('Hello, world!');
