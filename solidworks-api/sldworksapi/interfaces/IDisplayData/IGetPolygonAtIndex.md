---
type: method
interface: IDisplayData
member: IGetPolygonAtIndex
returns: System.Double
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
  - IDisplayData.GetPolygonAtIndex
  - IDisplayData.GetPolygonCount
  - IDisplayData.GetPolygonSizeAtIndex
keywords:
  - igetpolygonatindex
  - idisplaydata
  - display
  - data
  - polygon
  - index
  - int32
  - double
---

# IDisplayData.IGetPolygonAtIndex

Gets information for the specified polygon.

## Signature

```csharp
System.Double IGetPolygonAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired polygon where the index begins at zero

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
to determine the number of elements in this array.

## See Also

- `IDisplayData.GetPolygonAtIndex`
- `IDisplayData.GetPolygonCount`
- `IDisplayData.GetPolygonSizeAtIndex`