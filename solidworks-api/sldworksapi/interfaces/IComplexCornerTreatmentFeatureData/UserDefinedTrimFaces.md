---
type: property
interface: IComplexCornerTreatmentFeatureData
member: UserDefinedTrimFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - ui
related: []
keywords:
  - userdefinedtrimfaces
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - user
  - defined
  - trim
  - faces
  - object
  - icornermanagementfolder
readonly: null
---

# IComplexCornerTreatmentFeatureData.UserDefinedTrimFaces

Gets and sets the user-defined trim faces for this complex corner treatment feature.

## Signature

```csharp
System.Object UserDefinedTrimFaces {get; set;}
```
## Parameters

None.

## Return Value

Array of IFace2

## Remarks

This property is valid only if
IComplexCornerTreatmentFeatureData::PlanarTrimToolType
is set to
swCornerTreatmentPlanarTrimToolType_e
.CornerTreatmentPlanarTrimTool_UserDefined.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)