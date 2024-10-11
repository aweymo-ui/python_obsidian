---
title: Annotation Extraction Tool
nav: Annotation Extraction Tool
gallery: true
---

{% include gallery-figure.html img="py_ob_15.jpeg" alt="Visualization of two book pages with highlights being extracted and categorized" caption="Identifying and Categorizing Highlighted Text" width="100%" %}

[This Python tool](https://github.com/Scholarly-Projects/annotation_extraction){:target="_blank" rel="noopener"} seeks out a series of **six highlight colors** which all have designations and then extracting the text with those highlights into two different markdown files where these excerpts are displayed either categorically or chronologically, from the beginning to the end of the document you annotated. Here are the colors (in RGB) and their corresponding categories as they are currently set up in the tool:

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

{% include gallery-figure.html img="py_ob_18.gif" alt="Demo of Annotation Extraction Tool" caption="Demo of Annotation Extraction Tool" width="100%" %}

This tool works by importing the `fitz` module of PyMuPDF, a library used for working with PDF files, including extracting text and handling annotations. The header material also includes importing Python’s `os` module, which allows you to interact with the operating system and reading directories and file paths and the `re` module, which provides regular expression operations and searching and modifying the text we will be extracting. 

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

**Functionally**, the tool begins by: 

- Cleaning text
- Removing hyphenated line breaks
- Removing line breaks within text and replacing them with a space (with varying degrees of success… see the [Future Refinement](./8_appendix.html#future-refinement) section)
- Removing non-ASCII characters and extra whitespace as it occurs in the text
- Extracting highlighted text, mapping colors to their respective categories, using a tolerance to determine if the detected color is close enough to the reference color - specified above to be classified
- Exporting to markdown… surprisingly quickly!



