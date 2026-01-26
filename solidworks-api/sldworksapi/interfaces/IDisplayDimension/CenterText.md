---
type: property
interface: IDisplayDimension
member: CenterText
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
  - centertext
  - idisplaydimension
  - display
  - dimension
  - center
  - text
  - boolean
readonly: null
---

# IDisplayDimension.CenterText

Gets or sets whether the text of this display dimension should be automatically centered.

## Signature

```csharp
System.Boolean CenterText {get; set;}
```
## Parameters

None.

## Return Value

True centers the text, false does not center the text

## Remarks

Dimension text must be positioned somewhere between the two dimensioned points in order to be centered.
In a...
The two points are the...
linear dimension
the end points of the dimension
diameter dimension
the end points of the dimension line lying on the arc.
radius dimension
the center point and the dimension line end point lying on the arc

## See Also

- `IDisplayDimension.GetText`
- `IDisplayDimension.SetText`