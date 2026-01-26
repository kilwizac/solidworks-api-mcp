---
type: property
interface: ISimpleFilletFeatureData2
member: DefaultConicRhoOrRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.DefaultRadius
keywords:
  - fillets
  - conic
  - defaultconicrhoorradius
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - default
  - rho
  - radius
  - double
readonly: null
---

# ISimpleFilletFeatureData2.DefaultConicRhoOrRadius

Gets or sets the default conic rho or radius.

## Signature

```csharp
System.Double DefaultConicRhoOrRadius {get; set;}
```
## Parameters

None.

## Return Value

Default conic rho or conic radius (see Remarks )

## Remarks

The type of value of this property must match the
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
setting.
If setting the conic rho value, it must be in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleFilletFeatureData2)

## See Also

- `ISimpleFilletFeatureData2.DefaultRadius`