---
type: method
interface: ISurfaceExtendFeatureData
member: GetItemsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceExtendFeatureData.ISetItems
  - ISurfaceExtendFeatureData.Items
keywords:
  - getitemscount
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - items
  - count
  - int32
---

# ISurfaceExtendFeatureData.GetItemsCount

Gets the number of extended faces and edges for this surface-extend feature.

## Signature

```csharp
System.Int32 GetItemsCount()
```
## Parameters

None.

## Return Value

Number of extended items

## Remarks

Call this method before calling
ISurfaceExtendFeatureData::IGetItems
.

## See Also

- `ISurfaceExtendFeatureData.ISetItems`
- `ISurfaceExtendFeatureData.Items`