---
type: method
interface: ISurfaceExtendFeatureData
member: ISetItems
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of extended items
  -
    name: ItemArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array extended items ( faces and edges ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceExtendFeatureData.GetItemsCount
  - ISurfaceExtendFeatureData.IGetItems
  - ISurfaceExtendFeatureData.Items
keywords:
  - isetitems
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - items
  - count
  - int32
  - item
  - arr
  - object
  - void
---

# ISurfaceExtendFeatureData.ISetItems

Sets the extended faces and edges for this surface-extend feature.

## Signature

```csharp
void ISetItems( 
   System.Int32
Count
,
   ref System.Object
ItemArr
)
```
## Parameters

- `Count` (System.Int32): Number of extended items
- `ItemArr` (System.Object): in-process, unmanaged C++: Pointer to an array extended items ( faces and edges ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceExtendFeatureData.GetItemsCount`
- `ISurfaceExtendFeatureData.IGetItems`
- `ISurfaceExtendFeatureData.Items`