---
type: property
interface: IDisplayDimension
member: Scale2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - scale2
  - idisplaydimension
  - display
  - dimension
  - double
readonly: null
---

# IDisplayDimension.Scale2

Gets or sets the scale value that is applied to the dimension value of this non-associative distance dimension.

## Signature

```csharp
System.Double Scale2 {get; set;}
```
## Parameters

None.

## Return Value

Scale applied to the dimension value

## Remarks

This scale value applies only to non-associative distance dimensions, such as those created using
IDrawingDoc::CreateLinearDim4
or
IDrawingDoc::CreateDiamDim4
. For these dimensions, SOLIDWORKS multiplies the actual dimension measurement by this scale value to get the dimension value that is displayed on the screen. For any other types of dimensions (such as associative dimensions or angular measurement dimensions), setting the scale factor has no effect and getting the scale factor will always return 1.
The scale value must be greater than 0. This has no effect in the OLE interface, and returns S_false in the COM interface.
After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.