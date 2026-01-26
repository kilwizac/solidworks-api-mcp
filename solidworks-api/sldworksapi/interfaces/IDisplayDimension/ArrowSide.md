---
type: property
interface: IDisplayDimension
member: ArrowSide
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetSecondArrow
  - IDisplayDimension.GetUseDocSecondArrow
  - IDisplayDimension.SetSecondArrow
keywords:
  - arrows
  - dimensions
  - arrowside
  - idisplaydimension
  - display
  - dimension
  - arrow
  - side
  - int32
  - values
  - drawing
  - vba
  - properties
readonly: null
---

# IDisplayDimension.ArrowSide

Gets or sets the position of the dimension arrows.

## Signature

```csharp
System.Int32 ArrowSide {get; set;}
```
## Parameters

None.

## Return Value

Dimension arrow side state as defined in swDimensionArrowsSide_e

## Remarks

By specifying one of the following values in the Dimension Arrow Side state, the location of the dimension arrow with respect to the extension lines can be controlled. Valid values are listed in the
swDimensionArrowsSide_e
enumeration.
The graphics of the drawing change when you change this property. After you finish changing the drawing, use
IModelDoc2::WindowRedraw
to regenerate the drawing and display your changes.

## Examples

- Get Dimension Values in Drawing (VBA) (Get_Dimension_Values_in_Drawing_Example_VB.htm)
- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)

## See Also

- `IDisplayDimension.GetSecondArrow`
- `IDisplayDimension.GetUseDocSecondArrow`
- `IDisplayDimension.SetSecondArrow`