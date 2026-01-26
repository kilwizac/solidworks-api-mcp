---
type: property
interface: IVariableFilletFeatureData2
member: DefaultConicRhoOrRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.DefaultDistance
  - IVariableFilletFeatureData2.DefaultRadius
keywords:
  - fillets
  - conic
  - defaultconicrhoorradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - default
  - rho
  - radius
  - double
readonly: null
---

# IVariableFilletFeatureData2.DefaultConicRhoOrRadius

Gets or sets the default conic rho or conic radius of this fillet.

## Signature

```csharp
System.Double DefaultConicRhoOrRadius {get; set;}
```
## Parameters

None.

## Return Value

Default conic rho or conic radius (see Remarks )

## Remarks

If
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
is set to
swFeatureFilletProfileType_e
.:
swFeatureFilletConicRadius (symmetric fillet only), then this property gets or sets a radius.
swFeatureFilletConicRho (symmetric or asymmetric fillet), then this property gets or sets a conic rho value in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.DefaultDistance`
- `IVariableFilletFeatureData2.DefaultRadius`