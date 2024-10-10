---
title: Set-up
nav: Set-up
gallery: true
---

{% include gallery-figure.html img="py_ob_17.gif" alt="Snake Game Gif" caption="Setting Up Your Python Environment" width="75%" %}

**These instructions are going to assume you have never run a Python environment before**. Note that after step 2, the same instructions are applicable to both Windows and Mac users. For all of the commands entered on the command line after step one, I would recommend sending from the Bash terminal in Visual Studio Code. To begin:

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

## Step 1: Install Bash 

1A. **Windows: Download Git for Windows** (which includes Git Bash):
   - Go to the [Git for Windows website](https://gitforwindows.org/).
   - Download the installer and run it.
   - Follow the installation prompts, and make sure to select the option to use Git from the Windows Command Prompt.

1B. **Mac: Install Git Using Homebrew**:
   - Open the Terminal and run the following command:
     ```bash
     brew install git
     ```

## Step 2: Install Python

2A. **Windows: Install Python 3**:
   - Go to the [Python official website](https://www.python.org/downloads/).
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

## Step 4: Install Required Python Packages

4. **Install PyMuPDF:**
   - In the command line, run the following command to install the `PyMuPDF` library:
     ```bash
     pip install PyMuPDF
     ```

## Step 5: Clone the Repository

5. **Clone the Repository:**
   - Navigate to the directory where you want to save the project and run:
     ```bash
     git clone https://github.com/Scholarly-Projects/annotation_extraction.git
     ```

## Step 6: Organize Your Folders

6. **Place Your PDF File:**
   - Place the PDF file from which you want to extract highlights and annotations into the `annotation_extraction/A` folder.

## Step 7: Run the Python Script

7. **Run the Python Script:**
   - In the command line, navigate to the cloned repository directory and run:
     ```bash
     python script.py
     ```
   - Or simply go to `script.py` and press the play button on the top right corner of the screen in Visual Studio Code.

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>

**After following these steps**, your Python tool should run successfully, and you will find the extracted highlights in the `annotation_extraction/B` folder in two separate markdown files organized categorically and chronologically.
