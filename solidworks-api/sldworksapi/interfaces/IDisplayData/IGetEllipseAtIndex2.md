---
type: method
interface: IDisplayData
member: IGetEllipseAtIndex2
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired ellipse where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetEllipseAtIndex2
  - IDisplayData.GetEllipseCount
keywords:
  - igetellipseatindex2
  - idisplaydata
  - display
  - data
  - ellipse
  - index2
  - index
  - int32
  - double
---

# IDisplayData.IGetEllipseAtIndex2

Gets information for the specified ellipse.

## Signature

```csharp
System.Double IGetEllipseAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired ellipse where the index begins at zero

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
color, lineType, Unused, Unused, StartPt[3], EndPt[3], CenterPt[3], MajorPt[3], MinorPt[3],
]
where:
color
COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
Line type as defined in
swLineTypes_e
.
StartPt[3]
Array of 3 doubles (X,Y,Z) describing the ellipse start point.
EndPt[3]
Array of 3 doubles (X,Y,Z) describing the ellipse end point. If the ellipse is closed, then this will be the same point as the StartPt.
CenterPt[3]
Array of 3 doubles (X,Y,Z) describing the ellipse center point.
MajorPt[3]
Array of 3 doubles (X,Y,Z) describing a point on the ellipse and the major axis.
MinorPt[3]
Array of 3 doubles (X,Y,Z) describing a point on the ellipse and the minor axis.

## See Also

- `IDisplayData.GetEllipseAtIndex2`
- `IDisplayData.GetEllipseCount`