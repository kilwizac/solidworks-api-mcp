---
type: method
interface: ISimpleFilletFeatureData2
member: IGetConicRhoOrRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet item for which to get a value (see Remarks )
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
  - igetconicrhoorradius
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

# ISimpleFilletFeatureData2.IGetConicRhoOrRadius

Gets the conic rho, conic radius, or circular radius of this fillet.

## Signature

```csharp
System.Double IGetConicRhoOrRadius( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet item for which to get a value (see Remarks )

## Return Value

Conic rho, conic radius, or circular radius

## Remarks

Before calling this method, call
ISimpleFilletFeatureData2::IGetFilletItemAtIndex
to get the pointer with which to specify PFilletItem.
The type of value returned by this method corresponds to the
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetConicRhoOrRadius`
- `ISimpleFilletFeatureData2.ISetConicRhoOrRadius`