---
type: method
interface: ICornerReliefFeatureData
member: AddNewCorner
returns: System.Int32
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
  -
    name: ReliefType
    type: System.Int32
    description: Corner relief type as defined by swCornerReliefType_e
  -
    name: Corner
    type: System.Object
    description: ISMCornerReliefData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - addnewcorner
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - add
  - new
  - face1
  - object
  - face2
  - face3
  - type
  - int32
---

# ICornerReliefFeatureData.AddNewCorner

Adds a corner with the specified parameters to this sheet metal corner relief feature.

## Signature

```csharp
System.Int32 AddNewCorner( 
   System.Object
Face1
,
   System.Object
Face2
,
   System.Object
Face3
,
   System.Int32
ReliefType
,
   out System.Object
Corner
)
```
## Parameters

- `Face1` (System.Object): First IFace2 that defines this two- or three-bend corner
- `Face2` (System.Object): Second IFace2 that defines this two- or three-bend corner
- `Face3` (System.Object): Third IFace2 that defines this three-bend corner; valid only if ICornerReliefFeatureData::CornerReliefBendType is swCornerReliefBendType_e .swCornerReliefBendType_ThreeBend; specify null or Nothing for a two-bend corner
- `ReliefType` (System.Int32): Corner relief type as defined by swCornerReliefType_e
- `Corner` (System.Object): ISMCornerReliefData

## Return Value

Error code as defined by swCornerReliefError_e