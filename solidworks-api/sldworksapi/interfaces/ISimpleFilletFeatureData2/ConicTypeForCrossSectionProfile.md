---
type: property
interface: ISimpleFilletFeatureData2
member: ConicTypeForCrossSectionProfile
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.Initialize
  - ISimpleFilletFeatureData2.RoundCorners
keywords:
  - fillets
  - conic
  - conictypeforcrosssectionprofile
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - type
  - cross
  - section
  - profile
  - int32
readonly: null
---

# ISimpleFilletFeatureData2.ConicTypeForCrossSectionProfile

Gets or sets the cross-sectional profile for this simple fillet.

## Signature

```csharp
System.Int32 ConicTypeForCrossSectionProfile {get; set;}
```
## Parameters

None.

## Return Value

Type of cross-sectional profile as defined in swFeatureFilletProfileType_e

## Remarks

This property is valid only if
ISimpleFilletFeatureData2::CurvatureContinuous
is set to false.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleFilletFeatureData2)

## See Also

- `ISimpleFilletFeatureData2.Initialize`
- `ISimpleFilletFeatureData2.RoundCorners`