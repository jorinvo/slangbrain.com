---
title: "How to Import Phrases From Leo.org"
date: 2017-08-31T13:07:06+02:00
draft: true
unsplash: aboeka Gwen Weustink
---

*This article is only interesting for people learning German, but if your mother tongue is German and you study another language, you can checkout [this article]({{% ref "blog/how-to-import-phrases-from-leo.org.de.md" %}}) instead.*


If you are studying German, there is a great dictionary out there called [leo.org](https://leo.org/).
As you start using it more often you should also get the mobile app and [create an account](https://dict.leo.org/myleo/register.php?lang=en).

One of the main advantages of having an account is, that you can save words for later.
There is a built-in studying system, but it's rather confusing to use and lacks certain features such as the automatic review scheduling that [Slangbrain](/) does for you.

![save a word on leo.org](/images/blog/leo/save-word.png)

But you can still use leo.org to save vocabulary because we create a tool for you to get those words from leo.org into Slangbrain.
Unfortunately leo.org doesn't offer a way for developers to automatically get your words out of there, but we create something called a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) that you can use instead.

*Let's see how that works:*


1. First, we assume here, that you have an account on leo.org, you already saved a few words and you are using a computer and not a phone for the following.


2. The link below is a *bookmarklet* you can drag that link to the *bookmark toolbar* of your browser or, if you are using Firefox, you can also right-click the link and select *Bookmark This Link*.
<br><br>
**[Leo Export](javascript:{{% file "static/js/leoToCSV.en.min.js" %}})**
<br><br>


3. If you got this far, the most difficult part is done. Now you can simply click *Leo Export* in your Bookmarks.
The first time you click, you will be redirected to the page of leo.org where you can see all your saved words.
Then you need to click the bookmark again to start exporting. The you just wait a moment while the export goes through all the pages of your words.


4. Once the export is done, you will prompted to save the generated *.csv* file.
{{% figure alt="download CSV" src="/images/blog/leo/download-csv.png" %}}
This file can be directly imported into Slangbrain or you can [read here]({{% ref "blog/use-excel-to-create-shareable-collections.md" %}}) how to edit or even share those words with others.


5. All that is left to do is to drag&drop this file into Slangbrain.
{{% figure alt="drag&drop file into messenger" src="/images/blog/leo/import.png" %}}
Open [Slangbrain in Messenger](https://www.messenger.com/t/slangbrain) (by clicking here) and drag&drop the *.csv* file right into Messenger.
Then you simply confirm the import with the *yes* button.

You might have to do this again once in a while after saving new words on leo.org. But don't worry about duplicated when repeating this.
Slangbrain will automatically igore all words that you already saved before.
