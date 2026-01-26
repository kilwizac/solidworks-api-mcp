---
type: method
interface: IVariableFilletFeatureData2
member: IGetConicRhoOrRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: Vertex
    description: Fillet edge for which to get a value (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetConicRhoOrRadius2
  - IVariableFilletFeatureData2.IGetRadius
  - IVariableFilletFeatureData2.ISetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - igetconicrhoorradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - rho
  - radius
  - item
  - vertex
  - double
---

# IVariableFilletFeatureData2.IGetConicRhoOrRadius

Gets the conic rho, conic radius, or circular radius of this fillet.

## Signature

```csharp
System.Double IGetConicRhoOrRadius( 
   Vertex
PFilletItem
)
```
## Parameters

- `PFilletItem` (Vertex): Fillet edge for which to get a value (see Remarks )

## Return Value

Conic rho, conic radius, or circular radius

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::IGetFilletEdgeAtIndex
to specify PFilletItem.
The type of value returned by this method corresponds to the
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetConicRhoOrRadius2`
- `IVariableFilletFeatureData2.IGetRadius`
- `IVariableFilletFeatureData2.ISetConicRhoOrRadius`