---
title: Accounts
nav: Accounts
gallery: true
---

{% include gallery-figure.html img="py_ob_01.gif" alt="Obsidian graph view click through, adding and removing various elements." caption="Obsidian Graph View." width="75%" %}

**Obsidian was founded in 2020** as a markdown file based knowledge management tool that has a very active user base and regularly updates systems based on that feedback. Obsidian supports the use of multiple computer languages, including JavaScript, HTML and CSS but, as we will see later, you can do as much or as little of this kind of thing on the pages depending on your experience with / interest in these technical approaches. Most of the tagging we will be focusing on for this presentation involves memorizing two or three characters to use Obsidian’s most powerful tools, the visualization or “graph view”, which is a very helpful guide to understanding the similarities and differences across a diverse collection of reading material. 

## Obsidian

**To create an Obsidian account**, you will first need to [download the application](https://obsidian.md/download) which is supported in Windows, Mac, Linux, IOS and Android. Afterwards, you will create an account. Note that Obsidian does have a paid Sync and Publish features but you don’t need either for everything we will cover in this presentation. Each workspace you create in Obsidian is a folder that they call a vault. 

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

**You can create a syncing vault simply by creating a folder in a cloud based storage** such as OneDrive or Google Drive, choosing Open Vault in the Obsidian file drop down and selecting that folder. Note that whichever cloud based storage you choose may dictate your accessibility on other devices. For example, because I chose my University of Idaho OneDrive for a vault I’ll be talking about today, I can access this vault on the Android app due to OIT privacy standards but I can access it on all of my various laptop and desktops, which works for the capacity that I usually need these notes.


{% include gallery-figure.html img="py_ob_05.jpeg" alt="Screenshot of Obsidian vault page." caption="Obsidian Vault Page." width="50%" %}


## Considering Folder Structures

Another thing to consider is the scope of your vault when you are creating it. When I first started experimenting with Obsidian, I was using it essentially like a Google Drive with many different Google Sheets in each folder and my scope was not defined, which isn’t really what Obsidian excels at. 

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>

Although there are ways to collaborate on a vault using either a shared cloud space or a GitHub repository (both not without potential syncing issues) **Obsidian is really designed as a _personal_ knowledge management tool** and it works best when you are analyzing a somewhat limited pool of documents. This may be a single project, class or academic discipline that you want to compare and interconnect in different ways. 

That said, since **a vault is essentially just a folder**, you can easily add or remove different items to change the scope of your analytical focus at any point. 

## Connecting GitHub, GitHub Desktop and Visual Studio Code

{% include gallery-figure.html img="py_ob_06.jpeg" alt="Screenshot of GitHub registration page" caption="GitHub Registration Page" width="75%" %}

- Now that we have our Obsidian account and a vault structure, you will need to create an account with [GitHub](https://github.com/join) a cloud-based platform that allows developers to store, share and collaborate on code. 

- After you have an account, download [GitHub Desktop](https://desktop.github.com/download/) and, with your Git web browser open, sign through Preferences > Accounts, which will prompt your browser to verify. 

{% include gallery-figure.html img="py_ob_09.jpeg" alt="Connecting GitHub Desktop to Git through Preferences" caption="Connecting GitHub Desktop to Git through Preferences" width="75%" %}

- Think of GitHub Desktop as a bridge between your GitHub's web browser and your local Visual Studio Code that is saving you a little coding that you would otherwise need to do from the [command line](https://en.wikipedia.org/wiki/Command-line_interface).


{% include gallery-figure.html img="py_ob_10.jpeg" alt="GitHub Desktop button that will prompt verification through the Web Browser" caption="GitHub Desktop button that will prompt verification through the Web Browser" width="75%" %}


- Next download a text editor. A simple, no cost option that most of us use in the Center for Digital Inquiry and Learning is [Visual Studio Code](https://code.visualstudio.com/download). Signing in through the settings widget on the bottom left of the interface will prompt the same verification of your GitHub account through the web browser. 

{% include gallery-figure.html img="py_ob_12.jpeg" alt="Visual Studio Code prompting verification through the GitHub Web Browser" caption="Visual Studio Code prompting verification through the GitHub Web Browser" width="75%" %}

- Now that these elements are all connected, you should be able to clone either the [Annotation Extraction Tool](https://github.com/Scholarly-Projects/annotation_extraction) or the [book splitter](https://github.com/Scholarly-Projects/book_splitter) Python tools by pushing the green `Code` button and selecting `Open with GitHub Desktop`.

{% include gallery-figure.html img="py_ob_11.jpeg" alt="GitHub Browser view of the option to clone Python repositories through GitHub Desktop" caption="GitHub Browser view of the option to clone Python repositories through GitHub Desktop" width="100%" %}

- In GitHub Desktop, select `Fetch Origin` and then select `Open in Visual Studio Code` to begin!

{% include gallery-figure.html img="py_ob_08.jpeg" alt="GitHub Desktop Interface" caption="GitHub Desktop Interface" width="100%" %}