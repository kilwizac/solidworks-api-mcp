---
type: method
interface: ISurfaceExtendFeatureData
member: IGetItems
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of extended items
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceExtendFeatureData.ISetItems
  - ISurfaceExtendFeatureData.Items
keywords:
  - igetitems
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - items
  - count
  - int32
  - object
---

# ISurfaceExtendFeatureData.IGetItems

Gets the extended faces and edges for this surface-extend feature.

## Signature

```csharp
System.Object IGetItems( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of extended items

## Return Value

in-process, unmanaged C++: Pointer to an array extended items ( faces and edges ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceExtendFeatureData::GetItemsCount
before calling this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceExtendFeatureData.ISetItems`
- `ISurfaceExtendFeatureData.Items`