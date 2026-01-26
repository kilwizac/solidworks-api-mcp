---
type: property
interface: IWizardHoleFeatureData2
member: Standard
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.FastenerSize
  - IWizardHoleFeatureData2.FastenerType2
  - IWizardHoleFeatureData2.Standard2
keywords:
  - standard
  - iwizardholefeaturedata2
  - wizard
  - hole
  - feature
  - data2
  - string
readonly: null
---

# IWizardHoleFeatureData2.Standard

Gets the design standard for this Hole Wizard feature.

## Signature

```csharp
System.String Standard {get; set;}
```
## Parameters

None.

## Return Value

Design standard

## Remarks

To set the fastener size, use
IWizardHoleFeatureData2::ChangeStandard
. To modify this property, use
IModeler::CopyWizardHole
and
IModeler::ICopyWizardHole
.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWizardHoleFeatureData2.FastenerSize`
- `IWizardHoleFeatureData2.FastenerType2`
- `IWizardHoleFeatureData2.Standard2`