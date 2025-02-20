---
title: Getting Started
nav: Getting Started
gallery: true
---
 
{% include feature/nav-menu.html sections="Zotero;Syncing Account;Obsidian;Considering Folder Structures;GitHub;Visual Studio Code" %}

<br>

## Zotero

**To begin**, first create an account by visiting the [user login page](https://www.zotero.org/user/login/){:target="_blank" rel="noopener"} and selecting `Register for a Free Account`, where you will create a username, add email and password. After validating your email address, visit the [downloads page](https://www.zotero.org/download/){:target="_blank" rel="noopener"} and select the desktop app icon. On Windows, you will simply run the setup program Zotero provides. On a Mac the only step you need to do is to drag your .dmg file from the downloads folder into your applications folder before opening. If you happen to be on Linux, please reference [these setup instructions](https://www.zotero.org/support/installation){:target="_blank" rel="noopener"} provided by Zotero. 

<br>

## Syncing Account

Once you open the Zotero desktop application for the first time, go to your menu, select `Zotero` > `Settings` > `Sync` > `Link Account`, where you will be prompted to enter your username and password you just created. Once this is complete, close the settings pop-up and click the green circular arrow button on the top right of the application to test syncing. Considering you just created an account and have no items, this shouldn’t take long – but as long as you don’t have a little red exclamation mark that appears you are synced! This means that you have a version of your document saved locally on your device in your Zotero folder as well as an updated version on your web library, which will update when you sync the Zotero desktop app on other devices.

{% include gallery-figure.html img="zot_02.gif" alt="Demonstration of how to connect the Zotero desktop application to your web library and sync" caption="Connecting Zotero desktop application to your web library and sync" width="100%" %}

{% include alert.html text="Note: If you have multiple desktops and laptops that you would like to use with your Zotero account, this is no problem! There is no maximum number of “chairs” a user with a free account can access. Simply [download](https://www.zotero.org/download/) the desktop application on the new device and enter your username and password again in the settings to sync between multiple devices. " color="light" align="right" %}

This is all you need to know to use the annotation workflow but please see my [Introduction to Zotero](https://aweymo-ui.github.io/zotero_intro/){:target="_blank" rel="noopener"} workshop for more functionalities.

<br>
<div class="symbol-container">
    <p class="symbol">&#9682;</p>
</div>
<br>

## Obsidian

**To create an Obsidian account**, you will first need to [download the application](https://obsidian.md/download){:target="_blank" rel="noopener"} which is supported in Windows, Mac, Linux, IOS and Android. As I mentioned, Obsidian does have paid Sync and Publish features but you don’t need either for this workflow.  Instead, create a vault simply by creating a folder in cloud based storage such as OneDrive or Google Drive, `Open Vault` in Obsidian and select that folder. 

{% include alert.html text="Note that whichever cloud based storage you choose may dictate your accessibility on other devices. For example, because I chose my University of Idaho OneDrive for a vault, I cannot access this material on my Android app due to OIT privacy standards but I can access it on all of my various laptop and desktops. This works fine for my research needs but you may need to host your vaults on personal cloud storage if you need mobile access to notes." color="light" align="right" %}


{% include gallery-figure.html img="py_ob_05.jpeg" alt="Screenshot of Obsidian Home Page with a red circle around the second button down to open a folder as a vault." caption="Obsidian Home Page with Open Vault Button Highlighted." width="50%" %}


## Considering Folder Structures

Another thing to consider is the scope of your vault when you are creating it. When I first started experimenting with Obsidian, I was using it essentially like a Google Drive with many different Google Sheets in each folder containing meeting notes, ideas for different workshops and various to-do lists. While having a keyword searchable grab bag of notes in Google Drive or Microsoft OneDrive is fine if not ideal, **Obsidian is most effective when your vault has a specific scope**.

Although there are ways to collaborate on a vault using either a shared cloud space or a GitHub repository (both not without potential syncing issues), **Obsidian is really designed as a _personal_ knowledge management tool** and it works best when you are analyzing a somewhat limited pool of documents. This may be a single research paper, course or academic discipline that you want to tag, categorize and analyze. 

<br>
<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>

## GitHub

- Now that we have our Zotero and Obsidian account and we've considered the vault structure, you will need to create an account with [GitHub](https://github.com/join){:target="_blank" rel="noopener"}, a cloud-based platform that allows developers to store, share and collaborate on code. 

- After you have an account, download [GitHub Desktop](https://desktop.github.com/download/){:target="_blank" rel="noopener"} and, with your Git web browser open, sign through Preferences > Accounts, which will prompt your browser to verify. 

{% include gallery-figure.html img="py_ob_09.jpeg" alt="Connecting GitHub Desktop to Git through Preferences" caption="Connecting GitHub Desktop to Git through Preferences" width="75%" %}

- Think of GitHub Desktop as a bridge between your GitHub's web browser and your local GitHub folder, which is saving you from learning a little coding that you would otherwise need to do on the [command line](https://en.wikipedia.org/wiki/Command-line_interface){:target="_blank" rel="noopener"}.


{% include gallery-figure.html img="py_ob_10.jpeg" alt="GitHub Desktop button that will prompt verification through the Web Browser" caption="GitHub Desktop button that will prompt verification through the Web Browser" width="75%" %}

## Visual Studio Code

- Next download a text editor. A simple, no cost option that most of us use in the CDIL is [Visual Studio Code](https://code.visualstudio.com/download){:target="_blank" rel="noopener"}. Signing in through the settings widget on the bottom left of the interface will prompt the same verification of your GitHub account through the web browser. 

{% include gallery-figure.html img="py_ob_12.jpeg" alt="Visual Studio Code prompting verification through the GitHub Web Browser" caption="Visual Studio Code prompting verification through the GitHub Web Browser" width="75%" %}

- Now that these elements are connected, you should be able to clone the [Annotation Extraction Tool](https://github.com/Scholarly-Projects/annotation_extraction){:target="_blank" rel="noopener"} Python tool by pushing the green `Code` button and selecting `Open with GitHub Desktop`.

{% include gallery-figure.html img="py_ob_11.jpeg" alt="GitHub Browser view of the option to clone Python repositories through GitHub Desktop" caption="GitHub Browser view of the option to clone Python repositories through GitHub Desktop" width="100%" %}

- In GitHub Desktop, select `Fetch Origin` and then select `Open in Visual Studio Code` to begin! 

{% include gallery-figure.html img="py_ob_08.jpeg" alt="GitHub Desktop Interface" caption="GitHub Desktop Interface" width="100%" %}

<br>
<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>
