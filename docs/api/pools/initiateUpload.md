---
sidebar_position: 3
---

# Initiate Upload

**Endpoint**: `/initiateUpload`

**HTTP Method**: `POST`

**Params**: 
``` json
{
    "format": "mp3"
}
```

## Description

This endpoint initiates an upload process by sending an HTTP POST request to the specified URL.
The request should include a payload in raw format with a "format" parameter.

## Response

Upon successful execution, the response will have a status code of 200 and will include a "url" parameter indicating the location for the upload.