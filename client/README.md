# rosetta

Rosetta - JavaScript client for rosetta
Build Once. Integrate Your Blockchain Everywhere.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.4.13
- Package version: 1.4.13
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rosetta --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your rosetta from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Rosetta = require('rosetta');


var api = new Rosetta.AccountApi()
var accountBalanceRequest = new Rosetta.AccountBalanceRequest(); // {AccountBalanceRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountBalance(accountBalanceRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Rosetta.AccountApi* | [**accountBalance**](docs/AccountApi.md#accountBalance) | **POST** /account/balance | Get an Account&#39;s Balance
*Rosetta.AccountApi* | [**accountCoins**](docs/AccountApi.md#accountCoins) | **POST** /account/coins | Get an Account&#39;s Unspent Coins
*Rosetta.BlockApi* | [**block**](docs/BlockApi.md#block) | **POST** /block | Get a Block
*Rosetta.BlockApi* | [**blockTransaction**](docs/BlockApi.md#blockTransaction) | **POST** /block/transaction | Get a Block Transaction
*Rosetta.CallApi* | [**call**](docs/CallApi.md#call) | **POST** /call | Make a Network-Specific Procedure Call
*Rosetta.ConstructionApi* | [**constructionCombine**](docs/ConstructionApi.md#constructionCombine) | **POST** /construction/combine | Create Network Transaction from Signatures
*Rosetta.ConstructionApi* | [**constructionDerive**](docs/ConstructionApi.md#constructionDerive) | **POST** /construction/derive | Derive an AccountIdentifier from a PublicKey
*Rosetta.ConstructionApi* | [**constructionHash**](docs/ConstructionApi.md#constructionHash) | **POST** /construction/hash | Get the Hash of a Signed Transaction
*Rosetta.ConstructionApi* | [**constructionMetadata**](docs/ConstructionApi.md#constructionMetadata) | **POST** /construction/metadata | Get Metadata for Transaction Construction
*Rosetta.ConstructionApi* | [**constructionParse**](docs/ConstructionApi.md#constructionParse) | **POST** /construction/parse | Parse a Transaction
*Rosetta.ConstructionApi* | [**constructionPayloads**](docs/ConstructionApi.md#constructionPayloads) | **POST** /construction/payloads | Generate an Unsigned Transaction and Signing Payloads
*Rosetta.ConstructionApi* | [**constructionPreprocess**](docs/ConstructionApi.md#constructionPreprocess) | **POST** /construction/preprocess | Create a Request to Fetch Metadata
*Rosetta.ConstructionApi* | [**constructionSubmit**](docs/ConstructionApi.md#constructionSubmit) | **POST** /construction/submit | Submit a Signed Transaction
*Rosetta.EventsApi* | [**eventsBlocks**](docs/EventsApi.md#eventsBlocks) | **POST** /events/blocks | [INDEXER] Get a range of BlockEvents
*Rosetta.MempoolApi* | [**mempool**](docs/MempoolApi.md#mempool) | **POST** /mempool | Get All Mempool Transactions
*Rosetta.MempoolApi* | [**mempoolTransaction**](docs/MempoolApi.md#mempoolTransaction) | **POST** /mempool/transaction | Get a Mempool Transaction
*Rosetta.NetworkApi* | [**networkList**](docs/NetworkApi.md#networkList) | **POST** /network/list | Get List of Available Networks
*Rosetta.NetworkApi* | [**networkOptions**](docs/NetworkApi.md#networkOptions) | **POST** /network/options | Get Network Options
*Rosetta.NetworkApi* | [**networkStatus**](docs/NetworkApi.md#networkStatus) | **POST** /network/status | Get Network Status
*Rosetta.SearchApi* | [**searchTransactions**](docs/SearchApi.md#searchTransactions) | **POST** /search/transactions | [INDEXER] Search for Transactions


## Documentation for Models

 - [Rosetta.AccountBalanceRequest](docs/AccountBalanceRequest.md)
 - [Rosetta.AccountBalanceResponse](docs/AccountBalanceResponse.md)
 - [Rosetta.AccountCoinsRequest](docs/AccountCoinsRequest.md)
 - [Rosetta.AccountCoinsResponse](docs/AccountCoinsResponse.md)
 - [Rosetta.AccountIdentifier](docs/AccountIdentifier.md)
 - [Rosetta.Allow](docs/Allow.md)
 - [Rosetta.Amount](docs/Amount.md)
 - [Rosetta.BalanceExemption](docs/BalanceExemption.md)
 - [Rosetta.Block](docs/Block.md)
 - [Rosetta.BlockEvent](docs/BlockEvent.md)
 - [Rosetta.BlockEventType](docs/BlockEventType.md)
 - [Rosetta.BlockIdentifier](docs/BlockIdentifier.md)
 - [Rosetta.BlockRequest](docs/BlockRequest.md)
 - [Rosetta.BlockResponse](docs/BlockResponse.md)
 - [Rosetta.BlockTransaction](docs/BlockTransaction.md)
 - [Rosetta.BlockTransactionRequest](docs/BlockTransactionRequest.md)
 - [Rosetta.BlockTransactionResponse](docs/BlockTransactionResponse.md)
 - [Rosetta.CallRequest](docs/CallRequest.md)
 - [Rosetta.CallResponse](docs/CallResponse.md)
 - [Rosetta.Case](docs/Case.md)
 - [Rosetta.Coin](docs/Coin.md)
 - [Rosetta.CoinAction](docs/CoinAction.md)
 - [Rosetta.CoinChange](docs/CoinChange.md)
 - [Rosetta.CoinIdentifier](docs/CoinIdentifier.md)
 - [Rosetta.ConstructionCombineRequest](docs/ConstructionCombineRequest.md)
 - [Rosetta.ConstructionCombineResponse](docs/ConstructionCombineResponse.md)
 - [Rosetta.ConstructionDeriveRequest](docs/ConstructionDeriveRequest.md)
 - [Rosetta.ConstructionDeriveResponse](docs/ConstructionDeriveResponse.md)
 - [Rosetta.ConstructionHashRequest](docs/ConstructionHashRequest.md)
 - [Rosetta.ConstructionMetadataRequest](docs/ConstructionMetadataRequest.md)
 - [Rosetta.ConstructionMetadataResponse](docs/ConstructionMetadataResponse.md)
 - [Rosetta.ConstructionParseRequest](docs/ConstructionParseRequest.md)
 - [Rosetta.ConstructionParseResponse](docs/ConstructionParseResponse.md)
 - [Rosetta.ConstructionPayloadsRequest](docs/ConstructionPayloadsRequest.md)
 - [Rosetta.ConstructionPayloadsResponse](docs/ConstructionPayloadsResponse.md)
 - [Rosetta.ConstructionPreprocessRequest](docs/ConstructionPreprocessRequest.md)
 - [Rosetta.ConstructionPreprocessResponse](docs/ConstructionPreprocessResponse.md)
 - [Rosetta.ConstructionSubmitRequest](docs/ConstructionSubmitRequest.md)
 - [Rosetta.Currency](docs/Currency.md)
 - [Rosetta.CurveType](docs/CurveType.md)
 - [Rosetta.Direction](docs/Direction.md)
 - [Rosetta.Error](docs/Error.md)
 - [Rosetta.EventsBlocksRequest](docs/EventsBlocksRequest.md)
 - [Rosetta.EventsBlocksResponse](docs/EventsBlocksResponse.md)
 - [Rosetta.ExemptionType](docs/ExemptionType.md)
 - [Rosetta.MempoolResponse](docs/MempoolResponse.md)
 - [Rosetta.MempoolTransactionRequest](docs/MempoolTransactionRequest.md)
 - [Rosetta.MempoolTransactionResponse](docs/MempoolTransactionResponse.md)
 - [Rosetta.MetadataRequest](docs/MetadataRequest.md)
 - [Rosetta.NetworkIdentifier](docs/NetworkIdentifier.md)
 - [Rosetta.NetworkListResponse](docs/NetworkListResponse.md)
 - [Rosetta.NetworkOptionsResponse](docs/NetworkOptionsResponse.md)
 - [Rosetta.NetworkRequest](docs/NetworkRequest.md)
 - [Rosetta.NetworkStatusResponse](docs/NetworkStatusResponse.md)
 - [Rosetta.Operation](docs/Operation.md)
 - [Rosetta.OperationIdentifier](docs/OperationIdentifier.md)
 - [Rosetta.OperationStatus](docs/OperationStatus.md)
 - [Rosetta.Operator](docs/Operator.md)
 - [Rosetta.PartialBlockIdentifier](docs/PartialBlockIdentifier.md)
 - [Rosetta.Peer](docs/Peer.md)
 - [Rosetta.PublicKey](docs/PublicKey.md)
 - [Rosetta.RelatedTransaction](docs/RelatedTransaction.md)
 - [Rosetta.SearchTransactionsRequest](docs/SearchTransactionsRequest.md)
 - [Rosetta.SearchTransactionsResponse](docs/SearchTransactionsResponse.md)
 - [Rosetta.Signature](docs/Signature.md)
 - [Rosetta.SignatureType](docs/SignatureType.md)
 - [Rosetta.SigningPayload](docs/SigningPayload.md)
 - [Rosetta.SubAccountIdentifier](docs/SubAccountIdentifier.md)
 - [Rosetta.SubNetworkIdentifier](docs/SubNetworkIdentifier.md)
 - [Rosetta.SyncStatus](docs/SyncStatus.md)
 - [Rosetta.Transaction](docs/Transaction.md)
 - [Rosetta.TransactionIdentifier](docs/TransactionIdentifier.md)
 - [Rosetta.TransactionIdentifierResponse](docs/TransactionIdentifierResponse.md)
 - [Rosetta.Version](docs/Version.md)


## Documentation for Authorization

All endpoints do not require authorization.
