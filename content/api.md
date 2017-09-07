---
title: "API"
date: 2017-09-07T17:24:34+02:00
---

Slangbrain offers a basic automation API for building tools.

If you run into any issues or you have suggestions for new features,
please let us know in the [GitHub issues](https://github.com/qvl/slangbrain.com/issues).


<br>

{{% toc %}}


## Authentication

To identify and authenticate a user, you need to send `?token=<token>` as a query parameter with every request.

Users can get a token in the help menu:

{{% figure alt="get token in help menu" src="/images/get-token.png" %}}


## Formatting

Import and export use the same format.
In both cases you have to choose between JSON and CSV by specifying either a `.json` or `.csv` extension.

For CSV the first column contains phrases and the second one contains their explanations.
There is no header row.

The JSON format returns a response formatted like this:

```json
{
  "data": [
    {
      "id": 0,
      "phrase": "phrase",
      "explanation": "explanation",
      "added": 0,
      "score": 0
    },
    {
      ...
    },
    ...
  ]
}
```

The JSON field `"added"` contains an integer representing the number of seconds elapsed since January 1, 1970 UTC.


## Import phrases into Slangbrain

To add phrases to Slangbrain a `POST` request can be send to one of:

- `https://fbot.slangbrain.com/api/phrases.csv?token=<token>`
- `https://fbot.slangbrain.com/api/phrases.json?token=<token>`

See above for authentication and expected formatting.

For imports, the fields `"id"` and `"score"` are ignored and the field `"added"` is optional and defaults to the current time if not provided.


## Export phrases from Slangbrain

To get phrases out of Slangbrain a `GET` request can be send to one of:

- `https://fbot.slangbrain.com/api/phrases.csv?token=<token>`
- `https://fbot.slangbrain.com/api/phrases.json?token=<token>`

See above for authentication and returned formatting.


## Update a phrase

`phrase` and `explanation` can be updated by sending a `PUT` request to

- `https://fbot.slangbrain.com/api/phrases/<id>?token=<token>`

`<id>` must be a valid phrase id the current user has access to.

The request body should be JSON formatted like this:

```json
{
  "phrase": "phrase",
  "explanation": "explanation"
}
```


## Delete a phrase

A phrase can be deleted by sending a `DELETE` request to

- `https://fbot.slangbrain.com/api/phrases/<id>?token=<token>`

`<id>` must be a valid phrase id the current user has access to.


## Link to a collection

Additionally to the API [collections]({{% ref "blog/create-edit-and-share-collections.md" %}}) can be used to share list of phrases with others.
To directly prompt a user to import a certain collection a [m.me link](https://developers.facebook.com/docs/messenger-platform/referral-params) can be generated in the following format:

- `https:m.me/slangbrain?ref=<collection>`

`<collection>` must be an url-encoded URL of a CSV file containing a collection.
