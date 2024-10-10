---
title: Process
nav: Process
gallery: true
---

{% include feature/nav-menu.html sections="Overview;Transcription;Python Text Mining;Linking Primary Tag Sheet to Individual Transcripts;Copyediting" %}

{% include gallery-figure.html img="overall_process.png" alt="Visualization of workflow from audio files to CSV to Python text mining and Google Sheets" caption="Workflow Visualization" width="100%" %}

## Overview

To summarize the process:

* Audio is transcribed into CSV files by Premiere

* CSVs are made into individual Google Sheets and also added to the Python Transcription Mining Tool

* Within the tool, these items are concatenated and searched for all associated words and phrases built into the tool under different tag categories

* The tool generates a tally of the these words and phrases, which is used to create the “Primary Tag Sheet” in another Google Sheet

* Using the Apps Script function, all individual transcripts are linked to the primary tag sheet so their tag fields are automatically generated

* New categories or associated words can be added or removed to the Primary Tag Sheet and these changes can be implemented across all individual transcripts by simply re-running the code

* Individual changes can be implemented during the student worker led copy editing process to catch any data driven errors

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Transcription

Moving away from the Otter.AI the department had been working with, I tested Adobe Premiere’s transcription tools and found it uniquely well-suited for the OHD framework with advantages including dramatically increased accuracy in differentiating speakers and transcribing dialogue, significantly faster transcription speed, from one hour long recording every two to three business days up to twenty hour recordings a day and high privacy standards with GDPR compliance, ensuring all transcription material is stored locally and not uploaded to the cloud.[1]

{% include gallery-figure.html img="dl_01.png" alt="Excerpt of transcript with the header names Speaker Name, Start Time, End Time and Text below a portion of sample dialogue." caption="Example of transcript CSV formatting as it exports from Adobe Premiere" width="100%" %}

That said, the tool is not perfect. While modern recordings in good conditions have extremely high transcription accuracy, poor quality recordings or interviews between two similar sounding people can require significant copyediting. Recent work by the Matt Miller of the Library of Congress has me very interested in creating custom speech to text tools using Whisper(.cpp) to possibly help improve on these inaccuracies.[2]

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Python Text Mining

After initial tests using the web based text mining tool Voyant, I wanted to create a text mining tool from scratch using Python that would allow me to identify specific words and phrases, create custom tagging categories and “stopwords”(words removed from text before processing and analysis) for each collection. Once the CSVs of the transcript are added to a folder in the Python workspace, the code imports text mining libraries such as Pandas, NLTK, TextBlob, and regular expressions for processing.

{% include gallery-figure.html img="dl_02.png" alt="Screen cap of Python script seen from Visual Studio Code Interface." caption="Extract of the Python code in the Geographic>Finland section of the text mining tool" width="100%" %}

Below this header material in the Python file are three categories of tags: general, geographic and custom, which contain twenty subsections each and these subsections contain 50 associated words or phrases that are being identified throughout the combined corpus and ultimately tallied to produce the output shown here:

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

{% include gallery-figure.html img="dl_03.png" alt=" List of tags with their associated words tallied in descending order." caption="Example of Text Mining Tool Output for the Rural Women's History Project" width="100%" %}

See [Appendix 1](https://aweymo-ui.github.io/distant_seven/content/5_references_apendices.html#appendix-1-excerpt-of-python-text-mining-tool) for an excerpt of the this script or visit [the Git](https://github.com/Scholarly-Projects/transcript_mining_base){:target="_blank" rel="noopener"} to view in full.

## Linking Primary Tag Sheet to Individual Transcripts

This data is then entered into a “primary tag sheet” also in Google Sheets. After formatting their transcripts, the student worker opens the Apps Script extension and enters a string of code (see [Appendix 2](https://aweymo-ui.github.io/distant_seven/content/5_references_apendices.html#appendix-2-apps-script-example-for-linking-transcript-to-primary-tag-sheet)). After making two minor adjustments based on the URL of their transcript, it will be linked to the Primary Tag Sheet. 

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Copyediting

**This process is not intended to replace human transcribers**, instead this aims to enhance the role of human transcribers by shifting the focus from manual tagging to copy editing, thus reducing repetitive tasks. Student workers are encouraged to modify tag names, adjust associated words, and create new categories based on trends identified in the primary tag sheet. This approach not only diversifies the tasks of student workers beyond transcription—often monotonous, with little to highlight on a CV—and enables them to engage in coding and instantly see the impact of their modifications.

Other advantages include:

* **All tags use a controlled vocabulary.**
* **Tagging is more accurate, detailed, and relevant**, helping researchers quickly identify thematic connections.
* **Tagging establishes a knowledge framework** relevant to the collection that transcribers might lack in historical, scientific, or regional contexts key to the recordings.
