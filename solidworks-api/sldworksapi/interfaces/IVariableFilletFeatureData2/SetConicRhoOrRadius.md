---
type: method
interface: IVariableFilletFeatureData2
member: SetConicRhoOrRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet item for which to set ConicRhoVal (see Remarks )
  -
    name: ConicRhoVal
    type: System.Double
    description: Conic rho or radius (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetConicRhoOrRadius2
  - IVariableFilletFeatureData2.ISetConicRhoOrRadius
  - IVariableFilletFeatureData2.SetRadius
keywords:
  - fillets
  - conic
  - setconicrhoorradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - rho
  - radius
  - item
  - object
  - val
  - double
  - void
---

# IVariableFilletFeatureData2.SetConicRhoOrRadius

Sets the conic rho or radius for the specified fillet item.

## Signature

```csharp
void SetConicRhoOrRadius( 
   System.Object
PFilletItem
,
   System.Double
ConicRhoVal
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet item for which to set ConicRhoVal (see Remarks )
- `ConicRhoVal` (System.Double): Conic rho or radius (see Remarks )

## Return Value

Unknown.

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::GetFilletEdgeAtIndex
to specify PFilletItem.
If
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
is set to
swFeatureFilletProfileType_e
.:
swFeatureFilletConicRadius (symmetric fillet only), then specify ConicRhoVal with a radius.
swFeatureFilletConicRho (symmetric or asymmetric fillet), then specify ConicRhoVal with the conic rho value in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetConicRhoOrRadius2`
- `IVariableFilletFeatureData2.ISetConicRhoOrRadius`
- `IVariableFilletFeatureData2.SetRadius`