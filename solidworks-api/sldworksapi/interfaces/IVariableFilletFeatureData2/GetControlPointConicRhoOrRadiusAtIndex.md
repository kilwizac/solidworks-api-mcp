---
type: method
interface: IVariableFilletFeatureData2
member: GetControlPointConicRhoOrRadiusAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the control point (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetControlPointRadiusAtIndex
  - IVariableFilletFeatureData2.SetControlPointConicRhoOrRadiusAtIndex
keywords:
  - fillets
  - conic
  - getcontrolpointconicrhoorradiusatindex
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
  - double
---

# IVariableFilletFeatureData2.GetControlPointConicRhoOrRadiusAtIndex

Gets the conic rho or radius at the specified control point.

## Signature

```csharp
System.Double GetControlPointConicRhoOrRadiusAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the control point (see Remarks )

## Return Value

Conic rho or radius

## Remarks

Call
IVariableFilletFeatureData2::GetControlPointsCount
before calling this method to determine a value for Index.
If
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
is set to
swFeatureFilletProfileType_e
.:
swFeatureFilletConicRadius (symmetric fillet only), then this method returns a radius.
swFeatureFilletConicRho (symmetric or asymmetric fillet), then this method returns a conic rho value in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetControlPointRadiusAtIndex`
- `IVariableFilletFeatureData2.SetControlPointConicRhoOrRadiusAtIndex`