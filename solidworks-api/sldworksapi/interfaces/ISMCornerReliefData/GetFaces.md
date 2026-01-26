---
type: method
interface: ISMCornerReliefData
member: GetFaces
returns: void
parameters:
  -
    name: Face1
    type: System.Object
    description: First IFace2 that defines this two- or three-bend corner
  -
    name: Face2
    type: System.Object
    description: Second IFace2 that defines this two- or three-bend corner
  -
    name: Face3
    type: System.Object
    description: Third IFace2 that defines this three-bend corner; valid only if ICornerReliefFeatureData::CornerReliefBendType is swCornerReliefBendType_e .swCornerReliefBendType_ThreeBend; specify null or Nothing for a two-bend corner
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - getfaces
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - faces
  - face1
  - object
  - face2
  - face3
  - void
  - icornerrelieffeaturedata
---

# ISMCornerReliefData.GetFaces

Gets the faces used to create this sheet metal corner.

## Signature

```csharp
void GetFaces( 
   out System.Object
Face1
,
   out System.Object
Face2
,
   out System.Object
Face3
)
```
## Parameters

- `Face1` (System.Object): First IFace2 that defines this two- or three-bend corner
- `Face2` (System.Object): Second IFace2 that defines this two- or three-bend corner
- `Face3` (System.Object): Third IFace2 that defines this three-bend corner; valid only if ICornerReliefFeatureData::CornerReliefBendType is swCornerReliefBendType_e .swCornerReliefBendType_ThreeBend; specify null or Nothing for a two-bend corner

## Return Value

Unknown.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)