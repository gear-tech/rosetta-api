# Rosetta.SyncStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentIndex** | **Number** | CurrentIndex is the index of the last synced block in the current stage. This is a separate field from current_block_identifier in NetworkStatusResponse because blocks with indices up to and including the current_index may not yet be queryable by the caller. To reiterate, all indices up to and including current_block_identifier in NetworkStatusResponse must be queryable via the /block endpoint (excluding indices less than oldest_block_identifier). | [optional] 
**targetIndex** | **Number** | TargetIndex is the index of the block that the implementation is attempting to sync to in the current stage. | [optional] 
**stage** | **String** | Stage is the phase of the sync process. | [optional] 
**synced** | **Boolean** | synced is a boolean that indicates if an implementation has synced up to the most recent block. If this field is not populated, the caller should rely on a traditional tip timestamp comparison to determine if an implementation is synced. This field is particularly useful for quiescent blockchains (blocks only produced when there are pending transactions). In these blockchains, the most recent block could have a timestamp far behind the current time but the node could be healthy and at tip. | [optional] 


