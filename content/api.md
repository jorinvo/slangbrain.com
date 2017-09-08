---
title: "API"
date: 2017-09-07T17:24:34+02:00
---

Slangbrain offers a basic automation JSON API for building tools.

If you run into any issues or you have suggestions for new features,
please let us know in the [GitHub issues](https://github.com/qvl/slangbrain.com/issues).


<br>

**Contents:**
{{% toc %}}


## Authentication

To identify and authenticate a user, you need to send `?token=<token>` as a query parameter with every request.

Users can get a token in the help menu:

{{% figure alt="get token in help menu" src="/images/get-token.png" %}}


## Export phrases from Slangbrain

To get phrases out of Slangbrain a `GET` request can be send to

- `https://fbot.slangbrain.com/api/phrases.json?token=<token>`

and the response will be formatted like this:

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

See above for authentication.


## Import phrases into Slangbrain

To add phrases to Slangbrain a `POST` request can be send to

- `https://fbot.slangbrain.com/api/phrases?token=<token>`

with a body containing a JSON object as the following:

```json
{
  "data": [
    {
      "phrase": "phrase",
      "explanation": "explanation"
    },
    {
      ...
    },
    ...
  ]
}
```

The response will report how many phrases have been imported.
The difference between the number of sent phrases and the returned `count`
are phrases which have been ignored because there is already a phrase with the same explanation:

```json
{
  "status": "ok",
  "count": 10
}
```

See above for authentication.


## Update a phrase

`phrase` and `explanation` can be updated by sending a `PUT` request to

- `https://fbot.slangbrain.com/api/phrases/<id>?token=<token>`

`<id>` must be a valid phrase id the current user has access to.

The request body should be JSON formatted like this:

```json
{
  "data": {
    "phrase": "phrase",
    "explanation": "explanation"
  }
}
```


## Delete a phrase

A phrase can be deleted by sending a `DELETE` request to

- `https://fbot.slangbrain.com/api/phrases/<id>?token=<token>`

`<id>` must be a valid phrase id the current user has access to.


## Get phrases as CSV

Alternatively to JSON, you can get the phrases of a user as `CSV` with a `GET` request to

- `https://fbot.slangbrain.com/api/phrases.csv?token=<token>`

The first column contains the phrases and the second column the explanations.
No header row is added.

See above for authentication.


## Link to a collection

Additionally to the API [collections]({{% ref "blog/create-edit-and-share-collections.md" %}}) can be used to share list of phrases with others.
To directly prompt a user to import a certain collection a [m.me link](https://developers.facebook.com/docs/messenger-platform/referral-params) can be generated in the following format:

- `https:m.me/slangbrain?ref=<collection>`

`<collection>` must be an url-encoded URL of a CSV file containing a collection.
