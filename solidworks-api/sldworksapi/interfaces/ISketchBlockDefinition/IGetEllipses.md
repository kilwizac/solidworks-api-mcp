---
type: method
interface: ISketchBlockDefinition
member: IGetEllipses
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of ellipses
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetEllipses
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - ellipses
  - igetellipses
  - sketch
  - block
  - definition
  - array
  - size
  - int32
  - double
---

# ISketchBlockDefinition.IGetEllipses

Gets the information about all of the ellipses in this block definition.

## Signature

```csharp
System.Double IGetEllipses( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of ellipses

## Return Value

in-process, unmanaged C++: Pointer to an array containing an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetEllipseCount
before calling this method to get the value of ArraySize.
The return values are in an array of doubles:
[
Color, LineType, LineFont, LineWidth, LayerID, LayerOverride, StartPt[3], EndPt[3], CenterPt[3], MajorPt[3], MinorPt[3],Direction ...
]
where:
Color :
COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType :
Line type. Valid returns are defined in
swLineTypes_e
. A lineType is a combination of a lineStyle and lineWeight.
LineFont :
Value is used for polyline font information. This value can be used as an input to the GetLineFontInfo2 and GetLineFontName2.
LineWidth :
Integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
LayerID:
Integer value indicating which layer holds this entity. Obtain the
ILayer
object by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
LayerOverride:
Integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
StartPt[3] :
Array of 3 doubles (X,Y,Z) describing the ellipse start point
EndPt[3] :
Array of 3 doubles (X,Y,Z) describing the ellipse end point. If the ellipse is closed, then this will be the same point as the StartPt.
CenterPt[3] :
Array of 3 doubles (X,Y,Z) describing the ellipse center point.
MajorPt[3] :
Array of 3 doubles (X,Y,Z) describing a point on the ellipse and on the major axis.
MinorPt[3] :
Array of 3 doubles (X,Y,Z) describing a point on the ellipse and on the minor axis.
Direction :
-1 for clockwise, +1 for counterclockwise
This set of data repeats for each ellipse in the sketch. The size of the array is (NumEllipses * 22).

## See Also

- `ISketchBlockDefinition.GetEllipses`