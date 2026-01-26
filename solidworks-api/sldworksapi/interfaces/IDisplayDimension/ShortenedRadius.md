---
type: property
interface: IDisplayDimension
member: ShortenedRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - diameter
  - foreshortened
  - dimension
  - see
  - also
  - idimension
  - shortenedradius
  - idisplaydimension
  - display
  - shortened
  - radius
  - boolean
readonly: null
---

# IDisplayDimension.ShortenedRadius

Gets or sets whether to display this radius display dimension with a foreshortened radius.

## Signature

```csharp
System.Boolean ShortenedRadius {get; set;}
```
## Parameters

None.

## Return Value

True displays a foreshortened radius, false does not display a foreshortened radius

## Remarks

In certain instances, you might want to show a radius dimension where the leader goes towards the center of the arc, but stops just before reaching the center. This is commonly used when the center of the arc is beyond the bounds of a drawing, or interferes with another view. This method controls that display characteristic.
This property applies only to radius dimensions. It does not affect other types of dimensions.
After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.