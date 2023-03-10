# Rosetta.CallApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call**](CallApi.md#call) | **POST** /call | Make a Network-Specific Procedure Call



## call

> CallResponse call(callRequest)

Make a Network-Specific Procedure Call

Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke &#x60;eth_call&#x60; to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.CallApi();
let callRequest = new Rosetta.CallRequest(); // CallRequest | 
apiInstance.call(callRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callRequest** | [**CallRequest**](CallRequest.md)|  | 

### Return type

[**CallResponse**](CallResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

