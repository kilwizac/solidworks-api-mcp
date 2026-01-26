---
type: method
interface: ISketchBlockDefinition
member: IGetArcs
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of arcs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetArcs
keywords:
  - arcs
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - igetarcs
  - sketch
  - block
  - definition
  - array
  - size
  - int32
  - double
---

# ISketchBlockDefinition.IGetArcs

Gets information about all of the arcs in the block definition.

## Signature

```csharp
System.Double IGetArcs( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of arcs

## Return Value

in-process, unmanaged C++: Pointer to an array containing an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetArcCount
before calling this method to get the value for ArraySize.
Return value is an array of doubles with the format:
[
Color, Type, Line Font, Line Width, Layer ID, Layer Override, [Start], [End], [Center] Rotation Dir
]
where
Color
- COLORREF returned as an integer. Return value could be 0 or -1 for default color.
Type
- Line type. Valid returns as defined in
swLineTypes_e
. A LineType is a combination of a line style and line weight.
Line Font
- Line style. Valid line styles as defined in
swLineStyles_e
enumeration.
Line Width
- Integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
Layer ID
- Integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerID
.
Layer Override
- Integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
Start[3]
- An array of 3 doubles (X,Y,Z) describing the start point.
End[3]
- An array of 3 doubles (X,Y,Z) describing the end point. If the arc is closed, then End[3] is the same point as Start.
Center[3]
- An array of 3 doubles (X,Y,Z) describing the center point.
Rotation Dir
- Rotational direction (CW = -1, CCW = 1)
This set of data repeats for each arc in the sketch. The size of the array is (NumArcs * 16).

## See Also

- `ISketchBlockDefinition.GetArcs`