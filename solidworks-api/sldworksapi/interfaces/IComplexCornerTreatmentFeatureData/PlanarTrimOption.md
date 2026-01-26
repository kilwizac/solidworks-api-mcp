---
type: property
interface: IComplexCornerTreatmentFeatureData
member: PlanarTrimOption
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - planartrimoption
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - planar
  - trim
  - option
  - int32
  - icornermanagementfolder
readonly: null
---

# IComplexCornerTreatmentFeatureData.PlanarTrimOption

Gets and sets the planar trim option for this complex corner treatment feature.

## Signature

```csharp
System.Int32 PlanarTrimOption {get; set;}
```
## Parameters

None.

## Return Value

Planar trim option as defined by swCornerTreatmentPlanarTrimOptions_e

## Remarks

This property is valid only if
IComplexCornerTreatmentFeatureData::PlanarTrimToolType
is set to
swCornerTreatmentPlanarTrimToolType_e
.swAutomatic.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)