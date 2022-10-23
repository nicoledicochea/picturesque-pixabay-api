# Picturesque
Find the copyright-free picture of your dreams!

<img width="686" alt="picture" src="https://user-images.githubusercontent.com/111663583/197368150-6fd3420d-c9d8-4580-8e53-9f168c1ae7a7.png">

**Link to project:** [Picturesque](https://nicoledicochea.github.io/picturesque-pixabay-api/)

# How It's Made:

**Tech used:** HTML, CSS, JavaScript, JSON, API

I love photography and visual art! Often, in my graphic design projects, I need to work with copyright-free images so the internet police doesn't come chasing after me for breaking copyright laws...

Thankfully, Pixabay has been a site I often go for resources! And, to my suprise, they also had a free [API](https://pixabay.com/sk/service/about/api/).

Users can input their search query, and receive an image from Pixabay.

## Lessons Learned:

Better yet, this section should be called 'Lessons Learn*ing*' since I'm still trying to figure out some things...

There is a bug in this code.

When a user search has multiple words, it appears in the link with a space (ie. 'night sky'). However, the Pixabay documentation states these should be separated with a dash, 'night-sky', and yet, the code still works! Still trying to understand why that is... Still trying to figure out how to take a user's input with multiple words and translate it to be separated with a dash.

Further development could also include differentiating between an image, vector, or video search. Or even allow for multiple image results in one search.
