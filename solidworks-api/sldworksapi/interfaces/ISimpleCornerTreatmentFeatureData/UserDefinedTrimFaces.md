---
type: property
interface: ISimpleCornerTreatmentFeatureData
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
  - isimplecornertreatmentfeaturedata
  - simple
  - corner
  - treatment
  - feature
  - data
  - user
  - defined
  - trim
  - faces
  - object
readonly: null
---

# ISimpleCornerTreatmentFeatureData.UserDefinedTrimFaces

Gets and sets the user-defined trim faces for this simple corner treatment feature.

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
ISimpleCornerTreatmentFeatureData::PlanarTrimToolType
is set to
swCornerTreatmentPlanarTriimToolType_e
.CornerTreatmentPlanarTrimTool_UserDefined.