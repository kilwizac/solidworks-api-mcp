---
type: property
interface: IDisplayDimension
member: OffsetText
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetText
  - IDisplayDimension.SetText
keywords:
  - offsettext
  - idisplaydimension
  - display
  - dimension
  - offset
  - text
  - boolean
readonly: null
---

# IDisplayDimension.OffsetText

Gets or sets whether or not to offset the text of a dimension.

## Signature

```csharp
System.Boolean OffsetText {get; set;}
```
## Parameters

None.

## Return Value

True to offset the dimension text, false to not

## Remarks

If this property is set to...
Then...
True
Dimension text is attached to the end of a leader that can be moved about freely.
Dimension line and extension lines to which the dimension text is associated do not move.
false
Dimension text is displayed on the dimension line.
Dimension line and extension lines can move when the dimension text is moved.
Because radial and diametric dimensions are already attached to the end of a leader, this property is not available for these types of dimensions.

## See Also

- `IDisplayDimension.GetText`
- `IDisplayDimension.SetText`