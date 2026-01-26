---
type: method
interface: IModelDoc2
member: IAddHorizontalDimension2
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
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - horizontal
  - iaddhorizontaldimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - display
---

# IModelDoc2.IAddHorizontalDimension2

Creates a horizontal dimension for the current selected entities at the specified location.

## Signature

```csharp
DisplayDimension IAddHorizontalDimension2( 
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

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSymmetricDimension`