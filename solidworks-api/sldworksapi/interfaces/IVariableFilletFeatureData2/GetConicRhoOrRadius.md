---
type: method
interface: IVariableFilletFeatureData2
member: GetConicRhoOrRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet edge for which to get a value (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.IGetConicRhoOrRadius
  - IVariableFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - getconicrhoorradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - rho
  - radius
  - item
  - object
  - double
---

# IVariableFilletFeatureData2.GetConicRhoOrRadius

Gets the conic rho, conic radius, or circular radius of this fillet.

## Signature

```csharp
System.Double GetConicRhoOrRadius( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet edge for which to get a value (see Remarks )

## Return Value

Conic rho or radius of this fillet

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::GetFilletEdgeAtIndex
to specify PFilletItem.
The type of value returned by this method corresponds to the
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.IGetConicRhoOrRadius`
- `IVariableFilletFeatureData2.SetConicRhoOrRadius`