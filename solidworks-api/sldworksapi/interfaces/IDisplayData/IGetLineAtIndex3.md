---
type: method
interface: IDisplayData
member: IGetLineAtIndex3
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired line where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetLineAtIndex3
  - IDisplayData.GetLineCount
keywords:
  - lines
  - display
  - data
  - igetlineatindex3
  - idisplaydata
  - line
  - index3
  - index
  - int32
  - double
---

# IDisplayData.IGetLineAtIndex3

Gets information for the specified line.

## Signature

```csharp
System.Double IGetLineAtIndex3( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired line where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
color, lineType, lineStyle, lineWeight, startPt[3], endPt[3]
]
where:
color
COLORREF returned as an integer; return value can be 0 or -1 for default color
lineType
Line type as defined in
swLineTypes_e
lineStyle
Line style as defined in
swLineStyles_e
lineWeight
Line thickness as defined in
swLineWeights_e
startPt[3]
x, y, z
line start point
endPt[3]
x, y, z line end point

## See Also

- `IDisplayData.GetLineAtIndex3`
- `IDisplayData.GetLineCount`