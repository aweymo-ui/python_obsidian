---
title: Annotation Extraction Tool
nav: Annotation Extraction Tool
gallery: true
---

{% include gallery-figure.html img="py_ob_15.jpeg" alt="Visualization of two book pages with highlights being extracted and categorized" caption="Identifying and Categorizing Highlighted Text" width="100%" %}

[This Python tool](https://github.com/Scholarly-Projects/annotation_extraction){:target="_blank" rel="noopener"} detects a series of **six highlight colors** which all have designations and then extracting the text with those highlights into two different markdown files where these excerpts are displayed either categorically or chronologically, from the beginning to the end of the document you annotated. 

<br>
<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>

Here are the colors and their corresponding categories as they are currently set up in the tool. The numbers after each of the color names is the percent of red, green and blue in the RGB color value.

```
   light_blue = (0.659, 0.929, 1.000)    
    yellow = (1.0, 1.0, 0.039)            
    orange = (0.992, 0.502, 0.031)        
    red = (1.0, 0.255, 0.494)             
    purple = (0.902, 0.522, 1.0)          
    gray = (0.902, 0.902, 0.902)          

color_map = 
        "General Notes": light_blue,
        "Definitions, Locations, People, Organizations": yellow,
        "Author Thesis and Methodology": orange,
        "Important": red,
        "Stats": purple,
        "Quotes": gray
```

**Both the colors and the designations can be customized to your research** but note that the colors need to be distinct enough that the tool can differentiate between a light blue and a light green, for instance. 

<br>
<div class="symbol-container">
    <p class="symbol">&#9682;</p>
</div>
<br>

This tool works by importing the `fitz` module of PyMuPDF, a library used for working with PDF files, including extracting text and handling annotations. The header material also includes importing Python’s `os` module, which allows you to interact with the operating system and reading directories and file paths and the `re` module, which provides regular expression operations and searching and modifying the text we will be extracting. 

**Here are all of the steps of the Python code:** 

- Cleaning text:
    - Removing hyphenated line breaks
    - Removing line breaks within text and replacing them with a space (with varying degrees of success… see the [Future Refinement](./8_appendix.html#future-refinement) section)
    - Removing non-ASCII characters and extra whitespace as it occurs in the text
- Extracting highlighted text, mapping colors to their respective categories and using a tolerance to determine if the detected color is close enough to the reference color
- exporting these extracted passages into two different folders in the B folder of the Python tool
    - One arranged categorically (important, definitions, quotes, etc.)
    - One arranged chronologically (page 1, page 2, page 3, etc.)
