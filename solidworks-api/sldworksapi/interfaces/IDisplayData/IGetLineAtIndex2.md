---
type: method
interface: IDisplayData
member: IGetLineAtIndex2
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired line where the index begins at zero
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetLineAtIndex2
  - IDisplayData.GetLineCount
keywords:
  - igetlineatindex2
  - idisplaydata
  - display
  - data
  - line
  - index2
  - index
  - int32
  - double
---

# IDisplayData.IGetLineAtIndex2

Obsolete. Superseded by IDisplayData::IGetLineAtIndex3.

## Signature

```csharp
System.Double IGetLineAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired line where the index begins at zero

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
color, lineType, Unused, Unused, startPt[3], endPt[3]
]
where:
color
COLORREF returned as an integer; return value can be 0 or -1 for default color
lineType
Line type as defined in
swLineTypes_e
startPt[3]
x, y, z
line start point
endPt[3]
x, y, z line end point

## See Also

- `IDisplayData.GetLineAtIndex2`
- `IDisplayData.GetLineCount`