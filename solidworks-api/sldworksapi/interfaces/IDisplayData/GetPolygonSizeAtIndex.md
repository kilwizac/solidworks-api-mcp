---
type: method
interface: IDisplayData
member: GetPolygonSizeAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index for the polygon
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetPolygonCount
keywords:
  - getpolygonsizeatindex
  - idisplaydata
  - display
  - data
  - polygon
  - size
  - index
  - int32
---

# IDisplayData.GetPolygonSizeAtIndex

Gets the number of array elements returned by IDisplayData::GetPolygonAtIndex and IDisplayData::IGetPolygonAtIndex.

## Signature

```csharp
System.Int32 GetPolygonSizeAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index for the polygon

## Return Value

Number of array elements returned by IDisplayData::GetPolygonAtIndex and IDisplayData::IGetPolygonAtIndex

## See Also

- `IDisplayData.GetPolygonCount`