var store = [ 
    
    
    { 
        "url": "/content/1_intro.html",
        "title": "Introduction",
        "text": "Hello, my name is Andrew Weymouth and I have worked with the University of Idaho Library as the Digital Initiatives Librarian in the Center for Digital Inquiry and Learning (CDIL) department since the fall of 2023. My work generally consists of creating and maintaining our digital collections, working with fellowship recipients, helping to rethink processes and introducing new digital scholarship tools to the department. Why? This workflow was prompted by my pursuing master’s in History with University of Idaho in the fall of 2024 while also working as a faculty member with the library. I wanted to create a note taking system that could visualize connections across all of the literature I am reading to create historiographies specifically, but would also be helpful while creating literature reviews, scientific reviews and environmental scans that I need to do to create scholarly writing. Beyond history, Obsidian is also a popular knowledge organization tool for scholars working in computer and data science, mathematics, physics, biology and medicine. I was initially inspired by a Tech Talk I attended last year by interdisciplinary botany PhD Student and previous CDIL Fellowship recipient Nick Koenig. The presentation centered on using Obsidian for research and they mentioned that there were community plug-ins that were developed to connect Zotero to the platform. After testing out these tools, I wanted to find out if there was a more reliable and more customizable solution for connecting these two platforms that not only extracted annotated material but also categorized annotations according to highlight color. Obsidian Graph View. Zotero and Obsidian Zotero is an open source reference management software developed by the Corporation for Digital Scholarship (formerly by the Center for History and New Media at George Mason University) in 2006. Since jumping from an academic tool to incorporation in 2013, the software has gained widespread adoption by academics, students and researchers as a more versatile and digital preservation focused alternative to other citation managers like EndNote and Mendeley. Zotero’s excels as a temporary processing station for research, where you can drop all of your research, easily record website using a browser plug-in, annotate in your preferred word processor and then export in a lightweight file that can be opened again in Zotero whenever you need it again. Also, unlike Obsidian, it is very convenient to share reading material in shared libraries, which is helpful for conducting literature reviews. Obsidian was founded in 2020 as a markdown file based knowledge management tool that has a very active user base and regularly updates systems based on that feedback. Obsidian supports the use of multiple computer languages, including JavaScript, HTML and CSS but, as we will see later, you can do as much or as little coding as you are interested in. Obsidian workspaces are called “vaults” and they are essentially just folders of markdown files. How you choose to structure the folders within your vault allows you to highlight and visualize your research, which we will explore in greater detail further along in this workshop. Unlike cloud-based note taking apps, Obsidian is designed to be fully functional on your local device, not even requiring an internet connection, which is key if you are working on a privacy-oriented project with sensitive data. While Obsidian has a subscription cloud based version called Sync, this workshop will show you how to host your site on a free cloud like Google Drive or Microsoft OneDrive so you can have your vaults sync between devices at no additional cost. Obsidian’s central strength is it’s ability to link notes, tags and subtags together, creating an interconnected web of knowledge. The built in graph view allows researchers provides a visual representation of these connections, which can be very helpful in understanding themes and relationships between huge amounts of text. Additionally, I find that the process of creating tags and thinking about the ways they may or may not apply to different subject matter is an interactive process that makes the material more engaging and causes me to think about it in new ways. Note: Though there are ways that you can collaborate on a vault, Obsidian is most effective as an independent scholarly tool. &#10042;"
    },
    { 
        "url": "/content/2_accounts.html",
        "title": "Accounts",
        "text": "Obsidian To create an Obsidian account, you will first need to download the application which is supported in Windows, Mac, Linux, IOS and Android. Afterwards, you will create an account. Note that Obsidian does have a paid Sync and Publish features but you don’t need either for everything we will cover in this presentation. Each workspace you create in Obsidian is a folder that they call a vault. &#10042; You can create a syncing vault simply by creating a folder in a cloud based storage such as OneDrive or Google Drive, choosing Open Vault in the Obsidian file drop down and selecting that folder. Note that whichever cloud based storage you choose may dictate your accessibility on other devices. For example, because I chose my University of Idaho OneDrive for a vault I’ll be talking about today, I can access this vault on the Android app due to OIT privacy standards but I can access it on all of my various laptop and desktops, which works for the capacity that I usually need these notes. Obsidian Vault Page. Considering Folder Structures Another thing to consider is the scope of your vault when you are creating it. When I first started experimenting with Obsidian, I was using it essentially like a Google Drive with many different Google Sheets in each folder and my scope was not defined, which isn’t really what Obsidian excels at. &#10042; Although there are ways to collaborate on a vault using either a shared cloud space or a GitHub repository (both not without potential syncing issues) Obsidian is really designed as a personal knowledge management tool and it works best when you are analyzing a somewhat limited pool of documents. This may be a single project, class or academic discipline that you want to compare and interconnect in different ways. That said, since a vault is essentially just a folder, you can easily add or remove different items to change the scope of your analytical focus at any point. Connecting GitHub, GitHub Desktop and Visual Studio Code GitHub Registration Page Now that we have our Obsidian account and a vault structure, you will need to create an account with GitHub a cloud-based platform that allows developers to store, share and collaborate on code. After you have an account, download GitHub Desktop and, with your Git web browser open, sign through Preferences &gt; Accounts, which will prompt your browser to verify. Connecting GitHub Desktop to Git through Preferences Think of GitHub Desktop as a bridge between your GitHub’s web browser and your local Visual Studio Code that is saving you a little coding that you would otherwise need to do from the command line. GitHub Desktop button that will prompt verification through the Web Browser Next download a text editor. A simple, no cost option that most of us use in the Center for Digital Inquiry and Learning is Visual Studio Code. Signing in through the settings widget on the bottom left of the interface will prompt the same verification of your GitHub account through the web browser. Visual Studio Code prompting verification through the GitHub Web Browser Now that these elements are all connected, you should be able to clone either the Annotation Extraction Tool or the book splitter Python tools by pushing the green Code button and selecting Open with GitHub Desktop. GitHub Browser view of the option to clone Python repositories through GitHub Desktop In GitHub Desktop, select Fetch Origin and then select Open in Visual Studio Code to begin! GitHub Desktop Interface"
    },
    { 
        "url": "/content/3_prep.html",
        "title": "Prepping Materials",
        "text": "The only requirement for using the method this work is outlining is that you need to be working with digital versions of your text material and that these documents have a layer of OCR or Optical Character Recognition. Visualization of a digital book's OCR layer This process involves scanning pages, segmenting different areas of text (like recognizing all of the different columns in a newspaper, for instance), extracting features and finally recognizing individual characters. This interpretation of the text is then overlaid onto the image or document where it can now be keyword searchable and used with text to speech assistive technology. If you are using downloadable ebooks or request a digitization physical books through our interlibrary loan these items will come with a layer of OCR. &#10042; If you need to generate a layer of OCR for any other reason, you can do this with Adobe Acrobat, which you have a subscription to through your enrollment at the university. For alternative approaches, see Notes section. While the OCR function of Adobe is adequate, you may encounter with book scans in particular that there will sometimes be errors of OCR reading a two page spread all of the way across. Demo of Book Splitter Python Tool With this in mind, I built a Book Splitter Python tool which will convert all of your pages into left and right sides. Instructions for how to set-up the tool are included in the Appendix but are very similar to the set-up for the Annotation Extraction tool we will walk through in a moment. &#10042; Now that you have an OCR layer, you will need to read and highlight your material. This can either be done either in Adobe Acrobat or a completely open source option that I like called Okular, where you can easily build out an unlimited number of custom highlights sets."
    },
    { 
        "url": "/content/4_annotation.html",
        "title": "Annotation Extraction Tool",
        "text": "Identifying and Categorizing Highlighted Text This Python tool seeks out a series of six highlight colors which all have designations and then extracting the text with those highlights into two different markdown files where these excerpts are displayed either categorically or chronologically, from the beginning to the end of the document you annotated. Here are the colors (in RGB) and their corresponding categories as they are currently set up in the tool: light_blue = (0.659, 0.929, 1.000) yellow = (1.0, 1.0, 0.039) orange = (0.992, 0.502, 0.031) red = (1.0, 0.255, 0.494) purple = (0.902, 0.522, 1.0) gray = (0.902, 0.902, 0.902) color_map = \"General Notes\": light_blue, \"Definitions, Locations, People, Organizations\": yellow, \"Author Thesis and Methodology\": orange, \"Important\": red, \"Stats\": purple, \"Quotes\": gray Both the colors and the designations can be customized to your research but note that the colors need to be distinct enough that the tool can differentiate between a light blue and a light green, for instance. Demo of Annotation Extraction Tool This tool works by importing the fitz module of PyMuPDF, a library used for working with PDF files, including extracting text and handling annotations. The header material also includes importing Python’s os module, which allows you to interact with the operating system and reading directories and file paths and the re module, which provides regular expression operations and searching and modifying the text we will be extracting. &#10042; Functionally, the tool begins by: Cleaning text Removing hyphenated line breaks Removing line breaks within text and replacing them with a space (with varying degrees of success… see the Future Refinement section) Removing non-ASCII characters and extra whitespace as it occurs in the text Extracting highlighted text, mapping colors to their respective categories, using a tolerance to determine if the detected color is close enough to the reference color - specified above to be classified Exporting to markdown… surprisingly quickly!"
    },
    { 
        "url": "/content/5_setup.html",
        "title": "Set-up",
        "text": "Setting Up Your Python Environment These instructions are going to assume you have never run a Python environment before. Note that after step 2, the same instructions are applicable to both Windows and Mac users. For all of the commands entered on the command line after step one, I would recommend sending from the Bash terminal in Visual Studio Code. To begin: &#10042; Step 1: Install Bash 1A. Windows: Download Git for Windows (which includes Git Bash): Go to the Git for Windows website Download the installer and run it Follow the installation prompts, and make sure to select the option to use Git from the Windows Command Prompt 1B. Mac: Install Git Using Homebrew: Open the Terminal and run the following command: brew install git Step 2: Install Python 2A. Windows: Install Python 3: Go to the Python official website Download the latest version of Python (ensure to select the option to add Python to your PATH during installation). 2B. Mac: Install Python Using Homebrew: Open the Terminal and run the following command: brew install python Verify Python installation: Open your command line (or Git Bash on Windows, Terminal on macOS) and run: python --version This should display the installed version of Python. Step 4: Install Required Python Packages Install PyMuPDF: In the command line, run the following command to install the PyMuPDF library: pip install PyMuPDF Step 5: Clone the Repository Clone the Repository: Navigate to the directory where you want to save the project and run: git clone https://github.com/Scholarly-Projects/annotation_extraction.git Step 6: Organize Your Folders Place Your PDF File: Place the PDF file from which you want to extract highlights and annotations into the annotation_extraction/A folder Step 7: Run the Python Script Run the Python Script: In the command line, navigate to the cloned repository directory and run: python script.py Or simply go to script.py and press the play button on the top right corner of the screen in Visual Studio Code &#10042; After following these steps, your Python tool should run successfully, and you will find the extracted highlights in the annotation_extraction/B folder in two separate markdown files organized categorically and chronologically."
    },
    { 
        "url": "/content/6_obsidian.html",
        "title": "Obsidian",
        "text": "Demo of Annotation Extraction Tool, Showing Processed Markdown Files Dropped into Obsidian Now that we have our two markdown files, open your Obsidian vault and create a folder for the book or document you just processed and drop these two inside. While there are more complicated ways to search for things in Obsidian, the only elements that we really need to use this method are searching a path and for tags. Paths are simply refining results by how you have organized your folders. For example, if you have arranged things like the image below: basic file structure in Obsidian By entering “path:” into the search bar on the left side of the screen, you can choose to either see only HIST 502 or HIST 514 and all of their associated texts or individual texts in either the graph or document view. Additionally, if you type “tag:” you will now be able to see the six tags that we’ve generated from the highlighted text by having the python tool insert a hashtag in front of each of these categories, which is how these are denoted in Obsidian. &#10042; Review and Detailed Tagging Process While you can do detailed tagging in either file, I’ve found that this process makes the most sense in the chronological export for me.Whichever one you choose to do detailed tagging on, think of this as your primary notes document moving forward. Demo Detailed Tagging Process, Including Obsidian Dropdown View of Preexisting Tags At this point in your research, you’ve read this once and highlighted section based on category, while you are reviewing these notes again take a moment to reassess the initial tags (perhaps an #important passage is actually a #general note or the reverse) and also create new tags. Maybe an #important passage is also indicative of #class-anxieties or #shaping-narratives. Maybe a #quote is indicative of a larger theme around #labor-organization that runs throughout the book and you would like to see all of these excerpts together at a glance? Note that tags need to be connected by dashes or underscores if you want to use multiple words. You can also create sub-tags to create look at different elements under the same umbrella by putting a dash after the tag, such as #author/thesis and #author/methodology. &#10042; Tagging is an iterative and subjective process. You may find that throughout the course of your research, the name of the tag may shift as you think about that subject differently. Four or five tags may merge into one as you begin to identify major themes that emerge across the collection. During this process, I find it helpful to expand the panel on the right side of the interface and quickly review tags before reviewing a new work to remind myself of an expanding list of tags and connect them to other work. Through this review and detailed tagging exercise, I’ve found that it taps into an active and creative engagement in the learning process, adding a layer of comprehension and a bird’s eye view of a complex set of texts. This leads us to the visualization!"
    },
    { 
        "url": "/content/7_vis.html",
        "title": "Visualization and Conclusion",
        "text": "Obsidian Graph View. Like many data visualizations, the graph view of Obsidian is simply made up of nodes and edges, or lines between nodes. In this example, the nodes in blue and fuchsia are books and the green nodes around them represent tags. Opening the graph settings and working from the top down: Obsidian Graph View. I’ve toggled off viewing the attachments, existing files and orphans, i.e. notes that are not linked to anything else in the vault. This will leave us just with our primary notes document any other meeting notes that we have added tags to In Groups, I have added “path: “HIST 502” to differentiate the books between the two courses In Display, I’ve lowered the edge thickness and turned off the arrows. This is intended for researchers who are implementing linking in their documents, which we aren’t engaging in with this method Finally, in Forces, the default will display your nodes in a nice, neat little sphere, but it doesn’t tell you very much. However, I’ve found this setting: (left=0%, right=100%): Center Force: 25% Repel Force: 85% Link Force: 75% Link Distance: 100% provides some interesting insights.Tags nodes in the center are used the most throughout all texts. As these tag nodes move outward they are in proximity to the texts they are associated with. Tag nodes on the outside of the cluster are only associated with one text node. Additionally, the size of both text and tag nodes denote the number of texts or tags they are associated with. &#10042; Conclusion Through this method, we can see at a glance the contextual similarities between a collection of books and across courses. I hope these tools and methods can help connect and contextualize your research in and across academic disciplines."
    },
    { 
        "url": "/content/8_appendix.html",
        "title": "Future Refinement, Notes and Appendix",
        "text": "Contents: Future Refinement | OCR Alternatives | Appendix 1. Setup Instructions for Book Splitter Tool | About the Author Future Refinement Expanding the list of features that the annotation extraction tool identifies and categorizes, including: Rectangle tools, capturing all of the text within the shape parameter Typing tool notes Resolving a tendency to merge words between line breaks without a space that needs adjustment Relatedly, I experimented for quite a while to use different spell checkers for texts that had bad OCR (usually resulting from bad original scans) and the results were not very good. I decided to omit these types of tools from the current iteration and just do minimal adjustments to the beginning of the script that detect line breaks, remove whitespace and corrupted characters (although they don’t always work) &#10042; OCR Alternatives Although it falls out of bounds of the no cost parameters of this presentation, I prefer the Nitro PDF Pro application which is available at a reasonable subscription price under the SetApp platform. In addition to having a more intuitive interface, it has better capabilities for both OCR, editing PDFs and concatenation You can also build your own OCR Python tool with the open source Tesseract OCR engine, but I found the download and installation process, now only updated by third parties a little unintuitive for this workshop &#10042; Appendix 1. Setup Instructions for Book Splitter Tool The set-up instructions for both this tool and the Annotation Extraction Tool are also located in their repositories under set-up.md. To successfully run the Python tool for splitting PDF pages into left and right halves, please follow the instructions below to install the required software and dependencies. Step 1: Install Git and Bash 1A: Windows Download Git for Windows (which includes Git Bash): Go to the Git for Windows website Download the installer and run it Follow the installation prompts, and make sure to select the option to use Git from the Windows Command Prompt 1B: Mac Install Git using Homebrew: Open your Terminal If you don’t have Homebrew installed, run: /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\" Once Homebrew is installed, run: brew install git Step 2: Install Python 2A: Windows Install Python 3: Go to the Python official website Download the latest version of Python (ensure to select the option to add Python to your PATH during installation). 2B: Mac Install Python 3 using Homebrew: Open your Terminal and run: brew install python Verify Python installation: Open your command line (or Terminal) and run: python3 --version This should display the installed version of Python. Step 3: Create and Activate a Virtual Environment Create a Virtual Environment: In the command line, navigate to the cloned repository directory and run: python -m venv venv Activate the Virtual Environment: 2A: Windows venv\\Scripts\\activate 2B: Mac source venv/bin/activate Step 4: Install Required Python Packages Install Packages: With the virtual environment activated, run the following command to install the required packages: pip install -r requirements.txt Step 5: Clone the Repository Clone the Repository: Navigate to the directory where you want to save the project and run: git clone https://github.com/Scholarly-Projects/book_splitter.git Step 6: Place Your PDF Files Place Your PDF Files: Place the PDF files you want to split into the A folder within the cloned repository. Step 7: Run the Python Script Run the Python Script: In the command line, navigate to the cloned repository directory and run: python script.py Or simply go to script.py and press the play button on the top right corner of the screen in Visual Studio Code. After following these steps, your PDF splitting tool should run successfully, and you will find the split PDFs in the B folder. &#10042; About the Author Andrew Weymouth Professional Site Andrew Weymouth is the Digital Initiatives Librarian at University of Idaho, specializing in static web design to curate the institution’s special collections and partner with faculty and students on fellowship projects. His work spans digital scholarship projects at the universities of Oregon and Washington and the Tacoma Northwest Room archives, including long form audio public history projects, architectural databases, oral history and network visualizations. He writes about labor, architecture, underrepresented communities and using digital methods to survey equity in archival collections."
    },
    { 
        "url": "/",
        "title": "Home",
        "text": "Book Splitter Python Tool Annotation Extraction Python Tool Overview This workshop will provide a detailed method for making connections across large text research collections, creating custom tags and visualizing your research from a bird’s-eye perspective. This workshop will provide a complete walkthrough of how to utilize these tools and methods regardless of your previous technical experience requiring no coding beyond # and /. This workflow utilizes either open source materials or platforms that are free of cost to all University of Idaho students and faculty. Contents: Introduction Accounts Preparation Annotation Extraction Tool Set-up Obsidian Visualization Notes and Appendix Content: CC BY-NC-ND 4.0 Andrew Weymouth 2024 (get source code). Theme: Variation on workshop-template-b by evanwill"
    }];
