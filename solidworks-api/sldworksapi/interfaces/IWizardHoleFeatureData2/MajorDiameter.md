---
type: property
interface: IWizardHoleFeatureData2
member: MajorDiameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.MinorDiameter
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - diameter
  - tapered
  - majordiameter
  - wizard
  - hole
  - feature
  - data2
  - major
  - double
readonly: null
---

# IWizardHoleFeatureData2.MajorDiameter

Gets or sets the Hole Wizard feature major diameter for a tapered hole.

## Signature

```csharp
System.Double MajorDiameter {get; set;}
```
## Parameters

None.

## Return Value

Major diameter for a tapered hole

## Remarks

This property is relevant only for swTapered and swTaperedDrilled holes.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.MinorDiameter`