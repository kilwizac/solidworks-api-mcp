---
type: property
interface: IDisplayDimension
member: DisplayAsLinear
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Foreshortened
  - IDisplayDimension.Type2
keywords:
  - dimension
  - see
  - also
  - idimension
  - linear
  - displayaslinear
  - idisplaydimension
  - display
  - boolean
readonly: null
---

# IDisplayDimension.DisplayAsLinear

Gets or sets whether this diameter dimension is displayed as a linear dimension.

## Signature

```csharp
System.Boolean DisplayAsLinear {get; set;}
```
## Parameters

None.

## Return Value

True displays a linear dimension, false displays a diameter dimension

## Remarks

This property applies only to diameter dimensions. It does not affect other types of dimensions.
After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.Foreshortened`
- `IDisplayDimension.Type2`