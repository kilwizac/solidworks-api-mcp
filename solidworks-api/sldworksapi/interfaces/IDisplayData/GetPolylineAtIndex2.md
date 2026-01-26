---
type: method
interface: IDisplayData
member: GetPolylineAtIndex2
returns: System.Object
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
  - IDisplayData.GetPolylineSizeAtIndex2
  - IDisplayData.IGetPolylineAtIndex2
keywords:
  - getpolylineatindex2
  - idisplaydata
  - display
  - data
  - polyline
  - index2
  - index
  - int32
  - object
---

# IDisplayData.GetPolylineAtIndex2

Gets information for the specified polyline.

## Signature

```csharp
System.Object GetPolylineAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired polyline where the index begins at zero

## Return Value

Array of doubles (see Remarks )

## Remarks

Format of return values is an array of doubles with the format:
[
polyLineType, DataSize, Color, LineFont, Unused, Unused, NumPolyPoints, [x,y,z]
]
where:
polyLineType
Underlying geometry type:
0 - Polyline type
1 - Arc or Circle type
DataSize
Number of elements in the GeomData array. For Type = 0, this argument is 0.
Color
Polyline color.
LineFont
Polyline font information. You can use his value with
IDrawingDoc::GetLineFontInfo2
and
IDrawingDoc::GetLineFontName2
. This value is valid only if LineStyle is -1.
NumPolyPoints
Number of XYZ points found in the [x,y,z] return value.
[x,y,z]
Array of points used to describe the polyline. This array has
NumPolyPoints
points. This method returns an array for every polyline regardless of its type.
Use
IDisplayData::GetPolyLineSizeAtIndex2
to determine the number of elements returned in this array.

## See Also

- `IDisplayData.GetPolyLineCount`
- `IDisplayData.GetPolylineSizeAtIndex2`
- `IDisplayData.IGetPolylineAtIndex2`