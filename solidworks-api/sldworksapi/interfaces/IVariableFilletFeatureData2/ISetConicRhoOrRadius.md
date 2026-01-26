---
type: method
interface: IVariableFilletFeatureData2
member: ISetConicRhoOrRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: Vertex
    description: Fillet edge for which to set ConicRhoVal (see Remarks )
  -
    name: ConicRhoVal
    type: System.Double
    description: Conic rho, conic radius, or circular radius (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.IGetConicRhoOrRadius
  - IVariableFilletFeatureData2.ISetRadius
  - IVariableFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - isetconicrhoorradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - rho
  - radius
  - item
  - vertex
  - val
  - double
  - void
---

# IVariableFilletFeatureData2.ISetConicRhoOrRadius

Sets the conic rho, conic radius, or circular radius of this fillet.

## Signature

```csharp
void ISetConicRhoOrRadius( 
   Vertex
PFilletItem
,
   System.Double
ConicRhoVal
)
```
## Parameters

- `PFilletItem` (Vertex): Fillet edge for which to set ConicRhoVal (see Remarks )
- `ConicRhoVal` (System.Double): Conic rho, conic radius, or circular radius (see Remarks )

## Return Value

Unknown.

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::IGetFilletEdgeAtIndex
to specify PFilletItem.
The type of ConicRhoVal must match the
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
If setting the conic rho value, it must be in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.IGetConicRhoOrRadius`
- `IVariableFilletFeatureData2.ISetRadius`
- `IVariableFilletFeatureData2.SetConicRhoOrRadius`