---
type: property
interface: ITwoMemberCornerTreatmentFeatureData
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
  - itwomembercornertreatmentfeaturedata
  - two
  - member
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

# ITwoMemberCornerTreatmentFeatureData.PlanarTrimOption

Gets and sets the planar trim option for this two member corner treatment feature.

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
ITwoMemberCornerTreatmentFeatureData::CornerTreatmentTrimType
is set to
swCornerTreatmentTrimType_e
.swCornerTreatmentTrim_PlanarTrim.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)