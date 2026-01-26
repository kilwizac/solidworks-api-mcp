---
type: property
interface: ITwoMemberCornerTreatmentFeatureData
member: MiterTrimPlanePoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - mitertrimplanepoint
  - itwomembercornertreatmentfeaturedata
  - two
  - member
  - corner
  - treatment
  - feature
  - data
  - miter
  - trim
  - plane
  - point
  - object
readonly: null
---

# ITwoMemberCornerTreatmentFeatureData.MiterTrimPlanePoint

Gets and sets the point through which to create the miter trim for this two member corner treatment feature.

## Signature

```csharp
System.Object MiterTrimPlanePoint {get; set;}
```
## Parameters

None.

## Return Value

IRefPoint

## Remarks

This property is valid only if
ITwoMemberCornerTreatmentFeatureData::CornerTreatmentTrimType
is set to
swCornerTreatmentTrimType_e
.swCornerTreatmentTrim_MiterTrim.