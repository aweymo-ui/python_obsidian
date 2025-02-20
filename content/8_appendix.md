---
title: Future Refinement, Notes and Appendix
nav: Notes and Appendix
gallery: true
---

{% include feature/nav-menu.html sections="Future Refinement;OCR Alternatives;Appendix 1. Setup Instructions for Book Splitter Tool;About the Author" %}

<br>

## Future Refinement

- Expanding the list of features that the annotation extraction tool identifies and categorizes, including:
    - Rectangle tools, capturing all of the text within the shape parameter
    - Typing tool notes
- Resolving a tendency to merge words between line breaks without a space that needs adjustment
    - Relatedly, I experimented for quite a while to use different spell checkers for texts that had bad OCR (usually resulting from bad original scans) and the results were not very good. I decided to omit these types of tools from the current iteration and just do minimal adjustments to the beginning of the script that detect line breaks, remove whitespace and corrupted characters (although they don't always work)

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## OCR Alternatives

- Although it falls out of bounds of the no cost parameters of this presentation, I prefer the [Nitro PDF Pro](https://setapp.com/apps/nitro-pdf-pro){:target="_blank" rel="noopener"} application which is available at a reasonable subscription price under the SetApp platform. In addition to having a more intuitive interface, it has better capabilities for both OCR, editing PDFs and concatenation
- You can also build your own OCR Python tool with the open source [Tesseract OCR engine](https://github.com/tesseract-ocr/tesseract){:target="_blank" rel="noopener"}, but I found the download and installation process, now [only updated by third parties](https://tesseract-ocr.github.io/tessdoc/Downloads.html){:target="_blank" rel="noopener"} a little unintuitive for this workshop

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Appendix 1. Setup Instructions for Book Splitter Tool

The set-up instructions for both this tool and the Annotation Extraction Tool are also located in their repositories under `set-up.md`.

To successfully run the Python tool for splitting PDF pages into left and right halves, clone the repository and follow the instructions below:

### Step 1: Install Git and Bash

#### 1A: Windows
1. **Download Git for Windows** (which includes Git Bash):
   - Go to the [Git for Windows website](https://gitforwindows.org/){:target="_blank" rel="noopener"}
   - Download the installer and run it
   - Follow the installation prompts, and make sure to select the option to use Git from the Windows Command Prompt

#### 1B: Mac
1. **Install Git using Homebrew**:
   - Open your Terminal
   - If you don’t have Homebrew installed, run:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Once Homebrew is installed, run:
     ```bash
     brew install git
     ```

### Step 2: Install Python

#### 2A: Windows
1. **Install Python 3:**
   - Go to the [Python official website](https://www.python.org/downloads/){:target="_blank" rel="noopener"}
   - Download the latest version of Python (ensure to select the option to add Python to your PATH during installation).

#### 2B: Mac
1. **Install Python 3 using Homebrew**:
   - Open your Terminal and run:
     ```bash
     brew install python
     ```

2. **Verify Python installation**:
   - Open your command line (or Terminal) and run:
     ```bash
     python3 --version
     ```
   - This should display the installed version of Python.

### Step 3: Create and Activate a Virtual Environment

1. **Create a Virtual Environment**:
   - In the command line, navigate to the cloned repository directory and run:
     ```bash
     python -m venv venv
     ```

2. **Activate the Virtual Environment**:
   - #### 2A: Windows
     ```bash
     venv\Scripts\activate
     ```
   - #### 2B: Mac
     ```bash
     source venv/bin/activate
     ```

### Step 4: Install Required Python Packages

1. **Install Packages**:
   - With the virtual environment activated, run the following command to install the required packages:
     ```bash
     pip install -r requirements.txt
     ```

### Step 5: Place Your PDF Files

1. **Place Your PDF Files**:
   - Place the PDF files you want to split into the `A` folder within the cloned repository.

### Step 6: Run the Python Script

1. **Run the Python Script**:
   - In the command line, navigate to the cloned repository directory and run:
     ```bash
     python script.py
     ```
    - Or simply go to `script.py` and press the play button on the top right corner of the screen in Visual Studio Code.

After following these steps, your PDF splitting tool should run successfully, and you will find the split PDFs in the `B` folder.

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>