---
type: method
interface: IDisplayData
member: GetPolygonAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired polygon where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetPolygonCount
  - IDisplayData.GetPolygonSizeAtIndex
  - IDisplayData.IGetPolygonAtIndex
keywords:
  - getpolygonatindex
  - idisplaydata
  - display
  - data
  - polygon
  - index
  - int32
  - object
  - weld
  - bead
  - symbol
  - vba
  - vb
  - net
---

# IDisplayData.GetPolygonAtIndex

Gets information for the specified polygon.

## Signature

```csharp
System.Object GetPolygonAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired polygon where the index begins at zero

## Return Value

Array of doubles (see Remarks )

## Remarks

Format of return values is an array of doubles with the format:
[
Color, LineType, Unused, Unused, NumPolyPoints, [x,y,z]
]
where:
Color
Polygon color
LineType
Line type as defined in
swLineTypes_e
. You can use this index value with
IDrawingDoc::GetLineFontInfo2
and
IDrawingDoc::GetLineFontName2
NumPolyPoints
Number of XYZ points found in the [x,y,z] return value
[x,y,z]
Array of NumPolyPoints points used to describe the polygon
Use
IDisplayData::GetPolygonSizeAtIndex
to determine the number of elements returned in this array.

## Examples

- Get Weld Bead Symbol Data (VBA) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_VB.htm)
- Get Weld Bead Symbol Data (VB.NET) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_VBNET.htm)
- Get Weld Bead Symbol Data (C#) (Get_Weld_Bead_End_Treatment_Symbol_Data_Example_CSharp.htm)

## See Also

- `IDisplayData.GetPolygonCount`
- `IDisplayData.GetPolygonSizeAtIndex`
- `IDisplayData.IGetPolygonAtIndex`