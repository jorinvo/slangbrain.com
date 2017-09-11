---
title: "How to Import Phrases From Leo.org"
date: 2017-08-31T13:07:06+02:00
unsplash: hannynaibaho Hanny Naibaho
---

*This article is only interesting for people learning German, but if your mother tongue is German, you should checkout [this article]({{% ref "blog/how-to-import-phrases-from-leo.org.de.md" %}}) instead.*


If you are studying German, there is a great dictionary out there called [leo.org](https://leo.org/).
As you start using it more often you should also get the mobile app and [create an account](https://dict.leo.org/myleo/register.php?lang=en).

One of the main advantages of having an account is, that you can save words for later.
There is a also built-in studying system, but it is rather confusing to use and lacks certain features such as the automatic review scheduling that [Slangbrain](/) does for you.

![save a word on leo.org](/images/blog/leo/save-word.png)

But you should still use leo.org to save vocabulary, because we created a tool for you to get those words from leo.org into Slangbrain.
Unfortunately leo.org doesn't offer a way for developers to automatically get your words out of there, but we created a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) that you can use.

*Let's see how that works:*


1. First, we assume here, that you have an account on leo.org, you already saved a few words and you are using a computer, not your phone, in the following steps.


2. The link below is a *bookmarklet* you can drag that link to the *bookmark toolbar* of your browser or, if you are using Firefox, you can also right-click the link and select *Bookmark This Link*:
<br><br>
**[Leo Export](javascript:{{% file "static/js/leoToCSV.en.min.js" %}})**
<br><br>


3. If you got this far, the most difficult part is done.
Simply click *Leo Export* in your Bookmarks.
The first time you click it, you will be redirected to the page of leo.org where you can see all your saved words.
Then you need to click the bookmark again to start the export.
Now you just wait a moment while the export goes through all the pages of your words.


4. Once the export is done, you will be prompted to save the generated *.csv* file.
{{% figure alt="download CSV" src="/images/blog/leo/download-csv.png" %}}
This file can be directly imported into Slangbrain or you can [read here]({{% ref "blog/create-edit-and-share-collections.md" %}}) how to edit or even share those words with others.


5. All that is left to do is to drag&drop this file into Slangbrain.
{{% figure alt="drag&drop file into messenger" src="/images/blog/leo/import.png" %}}
Open [Slangbrain in Messenger](https://www.messenger.com/t/slangbrain) (by clicking here) and drag the *.csv* file right into Messenger.
Then you confirm the import with the *yes* button.

You might have to do this again once in a while after saving new words on leo.org.
But don't worry about duplicated when repeating this.
Slangbrain will automatically ignore all words that you already saved before.


I hope this was helpful.
If you have any question or run into issues, let us know on [Facebook](https://www.facebook.com/slangbrain/).
