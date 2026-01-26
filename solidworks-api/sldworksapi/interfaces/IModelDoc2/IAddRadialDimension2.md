---
type: method
interface: IModelDoc2
member: IAddRadialDimension2
returns: DisplayDimension
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
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddRadialDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDoc2.IAddDiameterDimension2
  - IModelDoc2.IAddDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - radial
  - iaddradialdimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - display
---

# IModelDoc2.IAddRadialDimension2

Adds a radial dimension at the specified location for the selected item.

## Signature

```csharp
DisplayDimension IAddRadialDimension2( 
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

Newly created dimension

## Remarks

You can only create radial dimensions on sketch segments in an active sketch.

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSymmetricDimension`