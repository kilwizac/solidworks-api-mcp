---
type: method
interface: ISimpleFilletFeatureData2
member: GetConicRhoOrRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Item for which to get a value (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.IGetConicRhoOrRadius
  - ISimpleFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - getconicrhoorradius
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - rho
  - radius
  - item
  - object
  - double
---

# ISimpleFilletFeatureData2.GetConicRhoOrRadius

Gets the conic rho or radius of this fillet/chamfer.

## Signature

```csharp
System.Double GetConicRhoOrRadius( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Item for which to get a value (see Remarks )

## Return Value

Conic rho or conic radius

## Remarks

Before calling this method, call
ISimpleFilletFeatureData2::GetFilletItemAtIndex
to get the pointer with which to specify PFilletItem.
The type of value returned by this method corresponds to the
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.IGetConicRhoOrRadius`
- `ISimpleFilletFeatureData2.SetConicRhoOrRadius`