---
type: method
interface: IModelDoc2
member: AddRadialDimension2
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: Dimension text location in meters
  -
    name: Y
    type: System.Double
    description: Dimension text location in meters
  -
    name: Z
    type: System.Double
    description: Dimension text location in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IDisplayDimension.ArcExtensionLineOrOppositeSide
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDoc2.IAddDiameterDimension2
  - IModelDoc2.IAddDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddSpecificDimension
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - radial
  - display
  - dimensions
  - idisplaydimension
  - addradialdimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - object
---

# IModelDoc2.AddRadialDimension2

Adds a radial dimension at the specified location for the selected item.

## Signature

```csharp
System.Object AddRadialDimension2( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): Dimension text location in meters
- `Y` (System.Double): Dimension text location in meters
- `Z` (System.Double): Dimension text location in meters

## Return Value

Dimension

## Remarks

You can only create radial dimensions on sketch segments in an active sketch.

## See Also

- `IDisplayDimension.ArcExtensionLineOrOppositeSide`
- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSpecificDimension`
- `IModelDocExtension.AddSymmetricDimension`