---
type: property
interface: IDisplayDimension
member: DimensionToInside
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - dimensiontoinside
  - idisplaydimension
  - display
  - dimension
  - inside
  - boolean
readonly: null
---

# IDisplayDimension.DimensionToInside

Gets or sets whether dimensions to arcs are always to the inside of the arc.

## Signature

```csharp
System.Boolean DimensionToInside {get; set;}
```
## Parameters

None.

## Return Value

True dimension to the inside of arc, false does not dimension to the inside of the arc

## Remarks

This property applies only to radius dimensions. This property does not affect other types of dimensions.
After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.