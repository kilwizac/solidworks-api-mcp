---
type: method
interface: IDisplayData
member: IGetArcAtIndex2
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arc where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetArcAtIndex2
  - IDisplayData.GetArcCount
keywords:
  - igetarcatindex2
  - idisplaydata
  - display
  - data
  - arc
  - index2
  - index
  - int32
  - double
---

# IDisplayData.IGetArcAtIndex2

Gets information for the specified arc.

## Signature

```csharp
System.Double IGetArcAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arc where the index begins at zero

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles :
[
color, lineType, Unused, Unused, startPt[3], endPt[3], centerPt[3], arcNormal[3], rotationDir
]
where:
color
COLORREF returned as an integer; return value can be 0 or -1 for default color
LineType
Line type as defined in
swLineTypes_e
startPt[3]
XYZ arc start point
endPt[3]
XYZ arc end point
centerPt[3]
XYZ arc center point
arcNormal[3]
XYZ arc normal vector
rotationDir
Boolean returned as a double that represents the rotation direction, where CCW = True and CW = false

## See Also

- `IDisplayData.GetArcAtIndex2`
- `IDisplayData.GetArcCount`