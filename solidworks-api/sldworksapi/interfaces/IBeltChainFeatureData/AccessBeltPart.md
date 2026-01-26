---
type: method
interface: IBeltChainFeatureData
member: AccessBeltPart
returns: PartDoc
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - accessbeltpart
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - access
  - part
  - doc
---

# IBeltChainFeatureData.AccessBeltPart

Gets the belt part.

## Signature

```csharp
PartDoc AccessBeltPart()
```
## Parameters

None.

## Return Value

IPartDoc

## Remarks

This method is valid only if
IBeltChainFeatureData::CreateBeltPart
is true.