---
title: Running Python
nav: Running Python
gallery: true
---

**These instructions are going to assume you have never run a Python environment before and you are already working inside the cloned repository for the [annotation extraction tool](https://github.com/Scholarly-Projects/annotation_extraction){:target="_blank" rel="noopener"}**. Note that after step 2, the same instructions are applicable to both Windows and Mac users. For all of the commands entered on the command line after step one, I would recommend sending from the Bash terminal in Visual Studio Code. To begin:

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Step 1: Install Bash 

1A. **Windows: Download Git for Windows** (which includes Git Bash):
   - Go to the [Git for Windows website](https://gitforwindows.org/){:target="_blank" rel="noopener"}
   - Download the installer and run it
   - Follow the installation prompts, and make sure to select the option to use Git from the Windows Command Prompt

1B. **Mac: Install Git Using Homebrew**:
   - Open the Terminal and run the following command:
     ```bash
     brew install git
     ```

## Step 2: Install Python

2A. **Windows: Install Python 3**:
   - Go to the [Python official website](https://www.python.org/downloads/){:target="_blank" rel="noopener"}
   - Download the latest version of Python (ensure to select the option to add Python to your PATH during installation).

2B. **Mac: Install Python Using Homebrew**:
   - Open the Terminal and run the following command:
     ```bash
     brew install python
     ```

3. **Verify Python installation:**
   - Open your command line (or Git Bash on Windows, Terminal on macOS) and run:
     ```bash
     python --version
     ```
   - This should display the installed version of Python.

## Step 3: Install Required Python Packages

4. **Install PyMuPDF:**
   - In the command line, run the following command to install the `PyMuPDF` library:
     ```bash
     pip install PyMuPDF
     ```

## Step 4: Organize Your Folders

6. **Place Your PDF File:**
   - Place the PDF file from which you want to extract highlights and annotations into the `annotation_extraction/A` folder

## Step 5: Run the Python Script

7. **Run the Python Script:**
   - In the command line, navigate to the cloned repository directory and run:
     ```bash
     python script.py
     ```
   - Or simply go to `script.py` and press the play button on the top right corner of the screen in Visual Studio Code

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>

**After following these steps**, your Python tool should run successfully, and you will find the extracted highlights in the `annotation_extraction/B` folder in two separate markdown files organized categorically and chronologically.
