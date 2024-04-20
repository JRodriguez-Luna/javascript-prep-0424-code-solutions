# prep-html-skeleton-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What tags are necessary for a complete HTML Skeleton?
  The necessary for a complete HTML Skeleton is:
    <!DOCTYPE html> declaration

  Elements:
    <html>
    <head>
    <title>
    <body>

- What type of content belongs within the `<head>` of an HTML document?
  The content that belongs within the <head> element are metadata such as:
  character set, <title>, styles (CSS), scripts, and other meta-info

- What type of content belongs within the `<body>` of an HTML document?
  The content that belongs within the <body> element are:
  Structured content: - heading <h1> -> <h6> - paragraphs <p> - lists [<ol> ordered, <ul> unordered] & more

      Embedded content:
        - <img>, <video>, <audio>, <iframe>

      Forms iterative control <form>, input elements <input><textarea> --> collects data from user

- Where must the `DOCTYPE` declaration appear in a valid HTML document?
  The 'DOCTYPE' must be the very first thing declared at the very top of the page before the <html> tag.

## Notes

HTML = HyperText Markup Language

- The standard markup language used to create webpages
  --> markup language is a way of adding structure or formatting information to a text document.

(Required)Basic Structure of an HTML Document:

  <!DOCTYPE html>
  <html>: Root element of HTML Page
  <head>: Meta-info about the doc; title & link to CSS file
  <title>: Specifies a title for doc; Shown in browser's title bar or tab
  <body>: Contains the visible page content; text, img, lists, tables & links

head element contains MetaData: - character set - title, style(CSS), scripts & other meta-info
--> Used by browser & search engine.

body element contains all the content of HTML Doc: - <h1> -> <h6> heading - <p> paragraph - <ol> ordered & <ul> unordered lists
Embedded: <img>, <video>, <audio>, <iframe>
Form for Interactive Control: <form>, Input: <input><textarea>, etc.
--> this collects user data.

Start tag, End tag:
<tagname>Starting ... Ending </tagname>
--> <img><br> & <input> don't require end tag because they inherently don't contain any content.
