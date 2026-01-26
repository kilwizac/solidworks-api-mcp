---
type: method
interface: ISimpleFilletFeatureData2
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
  - ISimpleFilletFeatureData2.GetConicRhoOrRadius
  - ISimpleFilletFeatureData2.ISetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - setconicrhoorradius
  - isimplefilletfeaturedata2
  - simple
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

# ISimpleFilletFeatureData2.SetConicRhoOrRadius

Sets the conic rho or radius of this fillet/chamfer.

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
ISimpleFilletFeatureData2::GetFilletItemAtIndex
to get the pointer with which to specify PFilletItem.
The value specified in ConicRhoVal must match the
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
If setting the conic rho value, it must be in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetConicRhoOrRadius`
- `ISimpleFilletFeatureData2.ISetConicRhoOrRadius`