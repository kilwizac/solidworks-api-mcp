---
type: property
interface: IWizardHoleFeatureData2
member: FastenerSize
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.FastenerType2
  - IWizardHoleFeatureData2.Standard2
keywords:
  - fasteners
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - fastenersize
  - wizard
  - hole
  - feature
  - data2
  - fastener
  - size
  - string
readonly: null
---

# IWizardHoleFeatureData2.FastenerSize

Gets the fastener size for this Wizard Hole feature.

## Signature

```csharp
System.String FastenerSize {get; set;}
```
## Parameters

None.

## Return Value

Fastener size

## Remarks

To set the fastener size for a Hole Wizard feature, use
IWizardHoleFeatureData2::ChangeStandard
. To modify this property, use
IModeler::CopyWizardHole
or
IModeler::ICopyWizardHole
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.FastenerType2`
- `IWizardHoleFeatureData2.Standard2`