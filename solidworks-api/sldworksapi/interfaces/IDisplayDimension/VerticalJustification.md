---
type: property
interface: IDisplayDimension
member: VerticalJustification
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.AddDisplayText
  - IDisplayDimension.HorizontalJustification
  - IDisplayDimension.IAddDisplayText
keywords:
  - verticaljustification
  - idisplaydimension
  - display
  - dimension
  - vertical
  - justification
  - int32
readonly: null
---

# IDisplayDimension.VerticalJustification

Gets the dimension text's vertical justification.

## Signature

```csharp
System.Int32 VerticalJustification {get; set;}
```
## Parameters

None.

## Return Value

Vertical justification as defined in swVerticalJustification_e

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.AddDisplayText`
- `IDisplayDimension.HorizontalJustification`
- `IDisplayDimension.IAddDisplayText`