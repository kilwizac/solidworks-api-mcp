---
type: property
interface: IDisplayDimension
member: Diametric
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.DisplayAsLinear
  - IDisplayDimension.GetType
  - IDisplayDimension.Type2
keywords:
  - diameter
  - dimension
  - diametric
  - idisplaydimension
  - display
  - boolean
  - change
  - radial
  - style
  - vba
  - create
  - non
  - associative
readonly: null
---

# IDisplayDimension.Diametric

Gets or sets whether this display dimension is radial/single distance or diameter/doubled distance.

## Signature

```csharp
System.Boolean Diametric {get; set;}
```
## Parameters

None.

## Return Value

True to display the diameter/doubled distance dimension, false to display the radial/single distance dimension

## Remarks

Depending on the
type
of this display dimension, this property toggles between:
radial and diameter display dimensions
radial linear and diametric linear display dimensions
This property does not affect other types of dimensions.
Use
IModelDocExtension::AddSpecificDimension
to create single or doubled distance display dimensions.
After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Change Radial to Diametric Style (VBA) (Change_Radial_to_Diametric_Style_Example_VB.htm)
- Create Non-associative Diameter Dimension (VBA) (Create_Non-associative_Diameter_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.DisplayAsLinear`
- `IDisplayDimension.GetType`
- `IDisplayDimension.Type2`