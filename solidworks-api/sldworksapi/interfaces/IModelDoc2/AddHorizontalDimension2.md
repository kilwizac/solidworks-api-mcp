---
type: method
interface: IModelDoc2
member: AddHorizontalDimension2
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
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddDimension2
  - IModelDoc2.AddRadialDimension2
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
  - horizontal
  - addhorizontaldimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - object
  - edge
  - drawing
  - vba
---

# IModelDoc2.AddHorizontalDimension2

Creates a horizontal dimension for the currently selected entities at the specified location.

## Signature

```csharp
System.Object AddHorizontalDimension2( 
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

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSpecificDimension`
- `IModelDocExtension.AddSymmetricDimension`