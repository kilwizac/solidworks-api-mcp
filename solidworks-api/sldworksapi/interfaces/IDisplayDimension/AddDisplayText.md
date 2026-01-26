---
type: method
interface: IDisplayDimension
member: AddDisplayText
returns: System.Boolean
parameters:
  -
    name: Text
    type: System.String
    description: Text to display
  -
    name: Position
    type: System.Object
    description: Location of the text; array of 3 doubles
  -
    name: Format
    type: System.Object
    description: Object for the text format
  -
    name: Attachment
    type: System.Int32
    description: Justification of the text as defined in swTextJustification_e
  -
    name: WidthFactor
    type: System.Double
    description: Horizontal scale factor of the text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.HorizontalJustification
  - IDisplayDimension.IAddDisplayText
  - IDisplayDimension.VerticalJustification
keywords:
  - adddisplaytext
  - idisplaydimension
  - display
  - dimension
  - add
  - text
  - string
  - position
  - object
  - format
  - attachment
  - int32
  - width
  - factor
  - double
  - boolean
  - replace
  - vba
---

# IDisplayDimension.AddDisplayText

Overrides the display text.

## Signature

```csharp
System.Boolean AddDisplayText( 
   System.String
Text
,
   System.Object
Position
,
   System.Object
Format
,
   System.Int32
Attachment
,
   System.Double
WidthFactor
)
```
## Parameters

- `Text` (System.String): Text to display
- `Position` (System.Object): Location of the text; array of 3 doubles
- `Format` (System.Object): Object for the text format
- `Attachment` (System.Int32): Justification of the text as defined in swTextJustification_e
- `WidthFactor` (System.Double): Horizontal scale factor of the text

## Return Value

True if successful, false if not

## Remarks

The new graphics displayed by this method are temporary. When the user changes the dimension, this display dimension reverts back to the SOLIDWORKS standard.

## Examples

- Replace Dimension with Text (VBA) (Replace_Dimension_with_Text_Example_VB.htm)

## See Also

- `IDisplayDimension.HorizontalJustification`
- `IDisplayDimension.IAddDisplayText`
- `IDisplayDimension.VerticalJustification`