---
id: restfull-api-start-kyc
sidebar_position: 8
---

## Start Kyc

**Endpoint**: `/startKyc`

**HTTP Method**: `POST`

**Params**:

```json
{
  "wallet": "0xd198...ce351"
}
```

### Description

This endpoint is used to initiate the KYC (Know Your Customer) process.

### Response

- `wallet (string): The wallet information.`
- `sumSubId (string): The summary sub ID.`
- `additionalWallets (array): Additional wallet information.`
- `_id (string): The ID.`
- `createdAt (string): The creation timestamp.`
- `updatedAt (string): The update timestamp.`
- `__v (integer): Version.`
- `sumSub (object): Summary sub details.`
  - `id (string): ID.`
  - `createdAt (string): Creation timestamp.`
  - `key (string): Key.`
  - `clientId (string): Client ID.`
  - `inspectionId (string): Inspection ID.`
  - `externalUserId (string): External user ID.`
  - `info (object): Information.`
  - `applicantPlatform (string): Applicant platform.`
  - `requiredIdDocs (object): Required ID documents.`
    - `docSets (array): Document sets.`
      - `idDocSetType (string): ID document set type.`
      - `types (array): Types.`
      - `subTypes (array): Subtypes.`
  - `review (object): Review details.`
    - `reviewId (string): Review ID.`
    - `attemptId (string): Attempt ID.`
    - `attemptCnt (integer): Attempt count.`
    - `levelName (string): Level name.`
    - `createDate (string): Creation date.`
    - `reviewStatus (string): Review status.`
    - `priority (integer): Priority.`
  - `type (string): Type.`
  - `inspectionMetadata (array): Inspection metadata.`
- `accessToken (object): Access token details.`
  - `token (string): Token.`
  - `userId (string): User ID.`
