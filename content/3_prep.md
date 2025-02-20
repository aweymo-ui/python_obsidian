---
title: Prepping Materials
nav: Preparation
gallery: true
---


To use this annotation workflow you will need a digital version of your text material in PDF file format with a layer of OCR or Optical Character Recognition. 

{% include gallery-figure.html img="py_ob_13_z.gif" alt="Visualization of a digital book's OCR layer" caption="Visualization of a digital book's OCR layer" width="75%" %}

The optical character recognition process involves scanning pages, segmenting different areas of text (like recognizing all of the different columns in a newspaper, for instance), extracting features and finally recognizing individual characters. This _interpretation of the text_ is then overlaid onto the image or document where it can now be keyword searchable and used with text to speech assistive technology. If you are using [downloadable ebooks](https://www.lib.uidaho.edu/find/ebooks.html){:target="_blank" rel="noopener"} or request a digitization [physical books through our interlibrary loan](https://www.lib.uidaho.edu/services/ill/docdelivery.html){:target="_blank" rel="noopener"} these items will come with a layer of OCR. 

If you need to generate a layer of OCR yourself, you can do this with **Adobe Acrobat**, which you have a subscription to through the university. For alternative approaches, [see Notes section](). While the OCR function of Adobe is adequate, you may encounter errors of OCR interpretting a two page spread as a single column. 

<br>
<div class="symbol-container">
    <p class="symbol">&#9682;</p>
</div>
<br>

{% include gallery-figure.html img="py_ob_14_z.gif" alt="Demo of Book Splitter Python Tool" caption="Demo of Book Splitter Python Tool" width="100%" %}

With this in mind, I built a [Book Splitter](https://github.com/Scholarly-Projects/book_splitter){:target="_blank" rel="noopener"} Python tool which will convert all of your pages into left and right sides and reorder these pages in the output. Instructions for how to set-up the tool are included in the [Appendix]() but are very similar to the set-up for the Annotation Extraction tool we will walk through in a moment. 

<br>

**Now that you have an OCR layer**, you will need to read and highlight your material. This can either be done either in Adobe Acrobat or a freely available option that I like called [Okular](https://okular.kde.org/download/){:target="_blank" rel="noopener"}, where you can easily build out an unlimited number of custom highlights sets. To change your default word processor in Zotero to your preferred platform select `Zotero`>`General`>`Open PDFs Using` and select the software.

<br>
<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>
