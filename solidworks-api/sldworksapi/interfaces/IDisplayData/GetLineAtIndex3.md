---
type: method
interface: IDisplayData
member: GetLineAtIndex3
returns: System.Object
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
  - IDisplayData.GetLineCount
  - IDisplayData.IGetLineAtIndex3
keywords:
  - lines
  - display
  - data
  - getlineatindex3
  - idisplaydata
  - line
  - index3
  - index
  - int32
  - object
  - centerline
  - annotation
  - information
  - vba
  - weld
  - bead
  - symbol
  - vb
  - net
---

# IDisplayData.GetLineAtIndex3

Gets information for the specified line.

## Signature

```csharp
System.Object GetLineAtIndex3( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired line where the index begins at 0

## Return Value

Array of doubles (see Remarks )

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

## Examples

- Get Centerline Annotation Information (VBA) (Get_Centerline_Annotation_Information_Example_VB.htm)
- Get Weld Bead Symbol Data (VBA) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_VB.htm)
- Get Weld Bead Symbol Data (VB.NET) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_VBNET.htm)
- Get Weld Bead Symbol Data (C#) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_CSharp.htm)

## See Also

- `IDisplayData.GetLineCount`
- `IDisplayData.IGetLineAtIndex3`