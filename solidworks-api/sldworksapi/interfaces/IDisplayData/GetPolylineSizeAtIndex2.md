---
type: method
interface: IDisplayData
member: GetPolylineSizeAtIndex2
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired polyline where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetPolyLineCount
keywords:
  - getpolylinesizeatindex2
  - idisplaydata
  - display
  - data
  - polyline
  - size
  - index2
  - index
  - int32
---

# IDisplayData.GetPolylineSizeAtIndex2

Gets the number of array elements returned by IDisplayData::GetPolylineAtIndex2 and IDisplayData::IGetPolylineAtIndex2.

## Signature

```csharp
System.Int32 GetPolylineSizeAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired polyline where the index begins at zero

## Return Value

Number array elements returned by IDisplayData::GetPolylineAtIndex2 and IDisplayData::IGetPolylineAtIndex2

## See Also

- `IDisplayData.GetPolyLineCount`