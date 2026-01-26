---
type: property
interface: IWizardHoleFeatureData2
member: FastenerType2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.FastenerSize
  - IWizardHoleFeatureData2.Standard2
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - fasteners
  - fastenertype2
  - wizard
  - hole
  - feature
  - data2
  - fastener
  - type2
  - int32
readonly: null
---

# IWizardHoleFeatureData2.FastenerType2

Gets the fastener type for this Wizard Hole feature.

## Signature

```csharp
System.Int32 FastenerType2 {get; set;}
```
## Parameters

None.

## Return Value

Fastener type as defined in swWzdHoleStandardFastenerTypes_e

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

- `IWizardHoleFeatureData2.FastenerSize`
- `IWizardHoleFeatureData2.Standard2`