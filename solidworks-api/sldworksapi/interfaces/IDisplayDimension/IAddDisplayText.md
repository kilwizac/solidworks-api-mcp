---
type: method
interface: IDisplayDimension
member: IAddDisplayText
returns: System.Boolean
parameters:
  -
    name: Text
    type: System.String
    description: Text to display
  -
    name: Position
    type: System.Double
    description: Location of the text; pointer to an array of 3 doubles
  -
    name: Format
    type: TextFormat
    description: Pointer to ITextFormat object
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
  - IDisplayDimension.AddDisplayText
keywords:
  - iadddisplaytext
  - idisplaydimension
  - display
  - dimension
  - add
  - text
  - string
  - position
  - double
  - format
  - attachment
  - int32
  - width
  - factor
  - boolean
---

# IDisplayDimension.IAddDisplayText

Overrides the display text for this display dimension.

## Signature

```csharp
System.Boolean IAddDisplayText( 
   System.String
Text
,
   ref System.Double
Position
,
   TextFormat
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
- `Position` (System.Double): Location of the text; pointer to an array of 3 doubles
- `Format` (TextFormat): Pointer to ITextFormat object
- `Attachment` (System.Int32): Justification of the text as defined in swTextJustification_e
- `WidthFactor` (System.Double): Horizontal scale factor of the text

## Return Value

True if successful, false if not

## Remarks

The new graphics displayed by this method are temporary. When the user changes the dimension, this display dimension reverts back to the SOLIDWORKS standard.

## See Also

- `IDisplayDimension.AddDisplayText`