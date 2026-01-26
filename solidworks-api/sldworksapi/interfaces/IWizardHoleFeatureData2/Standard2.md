---
type: property
interface: IWizardHoleFeatureData2
member: Standard2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.FastenerSize
  - IWizardHoleFeatureData2.FastenerType2
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - standards
  - standard2
  - wizard
  - hole
  - feature
  - data2
  - int32
readonly: null
---

# IWizardHoleFeatureData2.Standard2

Gets the design standard for this Hole Wizard feature.

## Signature

```csharp
System.Int32 Standard2 {get; set;}
```
## Parameters

None.

## Return Value

Design standard as defined in swWzdHoleStandards_e

## Remarks

If the Wizard Hole is using a copied/custom standard, then this property returns -1. In that case, use
IWizardHoleFeatureData2::Standard
to get the copied/custom standard.
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

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.FastenerSize`
- `IWizardHoleFeatureData2.FastenerType2`