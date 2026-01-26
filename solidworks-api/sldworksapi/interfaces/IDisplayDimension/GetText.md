---
type: method
interface: IDisplayDimension
member: GetText
returns: System.String
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Aspect of the text to get as defined in swDimensionTextParts_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetLowerText
  - IDisplayDimension.SetLowerText
  - IDisplayDimension.SetText
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - text
  - gettext
  - dimension
  - which
  - int32
  - string
  - block
  - information
  - vba
  - values
  - drawing
  - whether
  - hole
  - callout
---

# IDisplayDimension.GetText

Gets the text above the dimension line in a display dimension.

## Signature

```csharp
System.String GetText( 
   System.Int32
WhichText
)
```
## Parameters

- `WhichText` (System.Int32): Aspect of the text to get as defined in swDimensionTextParts_e (see Remarks )

## Return Value

Text above the dimension line

## Remarks

swDimensionTextParts_e.swDimensionTextAll is not a valid value for the WhichText parameter for this method.
NOTE:
This method does not support
hole callouts
.

## Examples

- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)
- Get Dimension Values in Drawing (VBA) (Get_Dimension_Values_in_Drawing_Example_VB.htm)
- Get Whether Display Dimension is a Hole Callout (VBA) (Get_Whether_Display_Dimension_is_a_Hole_Callout_Example_VB.htm)

## See Also

- `IDisplayDimension.GetLowerText`
- `IDisplayDimension.SetLowerText`
- `IDisplayDimension.SetText`