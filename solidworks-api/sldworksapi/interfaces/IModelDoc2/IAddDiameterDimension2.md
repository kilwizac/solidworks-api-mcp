---
type: method
interface: IModelDoc2
member: IAddDiameterDimension2
returns: DisplayDimension
parameters:
  -
    name: X
    type: System.Double
    description: X location for the dimension
  -
    name: Y
    type: System.Double
    description: Y location for the dimension
  -
    name: Z
    type: System.Double
    description: Z location for the dimension
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
  - IModelDoc2.IAddDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - diameter
  - dimension
  - see
  - also
  - idimension
  - add
  - iadddiameterdimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - display
---

# IModelDoc2.IAddDiameterDimension2

Adds a diameter dimension at the specified location for the selected item.

## Signature

```csharp
DisplayDimension IAddDiameterDimension2( 
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

- `X` (System.Double): X location for the dimension
- `Y` (System.Double): Y location for the dimension
- `Z` (System.Double): Z location for the dimension

## Return Value

Newly created diameter dimension

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSymmetricDimension`