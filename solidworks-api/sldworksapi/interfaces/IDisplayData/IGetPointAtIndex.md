---
type: method
interface: IDisplayData
member: IGetPointAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetPointAtIndex
keywords:
  - igetpointatindex
  - idisplaydata
  - display
  - data
  - point
  - index
  - int32
  - double
---

# IDisplayData.IGetPointAtIndex

Gets information about the specified point.

## Signature

```csharp
System.Double IGetPointAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the point

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return values are in an array of 7 doubles:
[
Color, LineType, LineStyleIndex, PointStyle, CircleFilled, X, Y, Z
]
where:
Color
COLORREF returned as an integer; return value can be 0 or -1 for the default color
LineType
Line type as defined in
swLineTypes_e
PointStyle
Point style as defined in
swPointStyle_e
CircleFilled
0 if the circle is filled, 1 if not
X
X coordinate of the specified point
Y
Y coordinate of the specified point
Z
Z coordiante of the specified point
Use
IDisplayData::GetPointCount
to determine the number of points.

## See Also

- `IDisplayData.GetPointAtIndex`