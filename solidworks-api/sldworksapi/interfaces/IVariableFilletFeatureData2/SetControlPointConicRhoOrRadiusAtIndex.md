---
type: method
interface: IVariableFilletFeatureData2
member: SetControlPointConicRhoOrRadiusAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the control point for which to set ConicRhoVal (see Remarks )
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
  - IVariableFilletFeatureData2.GetControlPointConicRhoOrRadiusAtIndex
  - IVariableFilletFeatureData2.SetControlPointRadiusAtIndex
keywords:
  - fillets
  - conic
  - setcontrolpointconicrhoorradiusatindex
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - control
  - point
  - rho
  - radius
  - index
  - int32
  - val
  - double
  - void
---

# IVariableFilletFeatureData2.SetControlPointConicRhoOrRadiusAtIndex

Sets the conic rho or radius at the specified control point.

## Signature

```csharp
void SetControlPointConicRhoOrRadiusAtIndex( 
   System.Int32
Index
,
   System.Double
ConicRhoVal
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the control point for which to set ConicRhoVal (see Remarks )
- `ConicRhoVal` (System.Double): Conic rho or radius (see Remarks )

## Return Value

Unknown.

## Remarks

Call
IVariableFilletFeatureData2::GetControlPointsCount
before calling this method to determine a value for Index.
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

- `IVariableFilletFeatureData2.GetControlPointConicRhoOrRadiusAtIndex`
- `IVariableFilletFeatureData2.SetControlPointRadiusAtIndex`