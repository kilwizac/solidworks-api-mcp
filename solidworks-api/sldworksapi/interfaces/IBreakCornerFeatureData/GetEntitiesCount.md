---
type: method
interface: IBreakCornerFeatureData
member: GetEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getentitiescount
  - ibreakcornerfeaturedata
  - break
  - corner
  - feature
  - data
  - entities
  - count
  - int32
---

# IBreakCornerFeatureData.GetEntitiesCount

Gets the number of faces or edges associated with this break corner feature.

## Signature

```csharp
System.Int32 GetEntitiesCount()
```
## Parameters

None.

## Return Value

Number of faces or edges

## Remarks

Call this method before calling
IBreakCornerFeatureData::IGetEntities
.