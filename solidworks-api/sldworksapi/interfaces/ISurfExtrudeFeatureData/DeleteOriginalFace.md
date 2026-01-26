---
type: property
interface: ISurfExtrudeFeatureData
member: DeleteOriginalFace
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - deleteoriginalface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - delete
  - original
  - face
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.DeleteOriginalFace

Gets or sets whether to delete the original faces of this extruded surface.

## Signature

```csharp
System.Boolean DeleteOriginalFace {get; set;}
```
## Parameters

None.

## Return Value

True to delete the original faces, false to not (see Remarks )

## Remarks

This property is only available if
ISurfExtrudeFeatureData::BothDirections
= false.
Deleting original faces results in the model being hollow where the faces were deleted and creates multiple bodies. To create a single body when original faces are deleted, use
ISurfExtrudeFeatureData::KnitResult
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)