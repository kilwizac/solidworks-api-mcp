---
type: method
interface: IDisplayData
member: IGetParabolaAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: GetPolygonCount Method Index of parabola
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetParabolaAtIndex
  - IDisplayData.GetParabolaCount
keywords:
  - igetparabolaatindex
  - idisplaydata
  - display
  - data
  - parabola
  - index
  - int32
  - double
---

# IDisplayData.IGetParabolaAtIndex

Gets the information for the specified parabola.

## Signature

```csharp
System.Double IGetParabolaAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): GetPolygonCount Method Index of parabola

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return values are in an array of 16 doubles:
[
Color, LineType, LineStyleIndex, LineWeight, StartPt[3], EndPt[3], FocusPt[3], ApexPt[3]
]
where:
Color
COLORREF returned as an integer; return value can be 0 or -1 for the default color
LineType
Line type as defined in
swLineTypes_e
LineStyleIndex
Index location of this line style inside SOLIDWORKS Line Style Manager
LineWeight
Integer value defining the line weight
StartPt[3]
Array of 3 doubles (X,Y,Z) describing the parabola start point
EndPt[3]
Array of 3 doubles (X,Y,Z) describing the parabola end point
FocusPt[3]
Array of 3 doubles (X,Y,Z) describing the parabola focus point
ApexPt[3]
Array of 3 doubles (X,Y,Z) describing the parabola apex point
This set of data repeats for each parabola in the view. The size of the array is (NumParabolas * 16). Use
IDisplayData::GetParabolaCount
to determine the number of parabolas.

## See Also

- `IDisplayData.GetParabolaAtIndex`
- `IDisplayData.GetParabolaCount`