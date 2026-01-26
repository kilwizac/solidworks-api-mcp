---
type: method
interface: ITwoMemberCornerTreatmentFeatureData
member: SwapMembers
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - swapmembers
  - itwomembercornertreatmentfeaturedata
  - two
  - member
  - corner
  - treatment
  - feature
  - data
  - swap
  - members
  - void
  - icornermanagementfolder
---

# ITwoMemberCornerTreatmentFeatureData.SwapMembers

Assigns the trim tool functionality to the other member of this two member corner treatment feature.

## Signature

```csharp
void SwapMembers()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The first member appearing in the corner group members list in the user interface is assigned the trim tool function. Use this method to re-assign the trim tool function to the second member.
This method is valid only if
ITwoMemberCornerTreatmentFeatureData::CornerTreatmentTrimType
is set to
swCornerTreatmentTrimType_e
.:
swCornerTreatmentTrim_BodyTrim
- or -
swCornerTreatmentTrim_PlanarTrim

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)