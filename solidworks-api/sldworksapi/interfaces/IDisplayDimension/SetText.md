---
type: method
interface: IDisplayDimension
member: SetText
returns: void
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Aspect of the text to get as defined in swDimensionTextParts_e (see Remarks )
  -
    name: Text
    type: System.String
    description: Text to create above the dimension line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetLowerText
  - IDisplayDimension.GetText
  - IDisplayDimension.SetLowerText
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - text
  - settext
  - dimension
  - which
  - int32
  - string
  - void
  - grid
  - bubble
  - vba
---

# IDisplayDimension.SetText

Sets the text above the dimension line in a display dimension.

## Signature

```csharp
void SetText( 
   System.Int32
WhichText
,
   System.String
Text
)
```
## Parameters

- `WhichText` (System.Int32): Aspect of the text to get as defined in swDimensionTextParts_e (see Remarks )
- `Text` (System.String): Text to create above the dimension line

## Return Value

Unknown.

## Remarks

Use swDimensionTextParts_e.swDimensionTextAll to create or replace the entire dimension text. SOLIDWORKS places the input text in the prefix portion of the dimension text, clears the suffix and callout texts, and turns off the dimension value (see
IDisplayDimension::ShowDimensionValue
).
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.
NOTE:
This method does not support
hole callouts
.

## Examples

- Display Grid Bubble (VBA) (Display_Grid_Bubble_Example_VB.htm)

## See Also

- `IDisplayDimension.GetLowerText`
- `IDisplayDimension.GetText`
- `IDisplayDimension.SetLowerText`