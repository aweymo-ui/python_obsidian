---
title: Visualization and Conclusion
nav: Visualization
gallery: true
---

{% include gallery-figure.html img="py_ob_01.gif" alt="Obsidian graph view click through, adding and removing various elements." caption="Obsidian Graph View." width="100%" %}

**Like many data visualizations**, the graph view of Obsidian is simply made up of _nodes_ and _edges_, or lines between nodes. In this example, the nodes in blue and fuchsia are books and the green nodes around them represent tags. 

Opening the graph settings and working from the top down:

{% include gallery-figure.html img="py_ob_21.jpeg" alt="Obsidian graph view click through, adding and removing various elements." caption="Obsidian Graph View." width="100%" %}

- I’ve toggled off viewing the attachments, existing files and _orphans_, i.e. notes that are not linked to anything else in the vault. This will leave us just with our primary notes document any other meeting notes that we have added tags to
- In **Groups**, I have added “path: “HIST 502” to differentiate the books between the two courses
- In **Display**, I’ve lowered the edge thickness and turned off the arrows. This is intended for researchers who are implementing linking in their documents, which we aren’t engaging in with this method
- Finally, in **Forces**, the default will display your nodes in a nice, neat little sphere, but it doesn’t tell you very much. However, I’ve found this setting:

```
(left=0%, 
right=100%):
Center Force: 25%
Repel Force: 85%
Link Force: 75%
Link Distance: 100%
```

provides some interesting insights.Tags nodes in the center are used the most throughout all texts. As these tag nodes move outward they are in proximity to the texts they are associated with. Tag nodes on the outside of the cluster are only associated with one text node. Additionally, the size of both text and tag nodes denote the number of texts or tags they are associated with. 

<div class="symbol-container">
    <p class="symbol">&#10042;</p>
</div>
<br>

## Conclusion

**Through this method**, we can see at a glance the contextual similarities between a collection of books and across courses. I hope these tools and methods can help connect and contextualize your research in and across academic disciplines.