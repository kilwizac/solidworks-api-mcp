---
type: method
interface: IFeatureManager
member: InsertUntrimSurface
returns: Feature
parameters:
  -
    name: FaceUntrimType
    type: System.Int32
    description: Untrim face as defined in swFaceUntrimType_e
  -
    name: EdgeUntrimType
    type: System.Int32
    description: Untrim edge as defined in swEdgeUntrimType_e
  -
    name: Distance
    type: System.Double
    description: Distance by which to untrim surface
  -
    name: BMerge
    type: System.Boolean
    description: True to create a surface extension that merges with the original surface, false to create a new, separate surface body
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISurfaceExtendFeatureData
keywords:
  - insertuntrimsurface
  - ifeaturemanager
  - feature
  - manager
  - insert
  - untrim
  - surface
  - face
  - type
  - int32
  - edge
  - distance
  - double
  - merge
  - boolean
---

# IFeatureManager.InsertUntrimSurface

Obsolete. Superseded by IFeatureManager::InsertUntrimSurface2.

## Signature

```csharp
Feature InsertUntrimSurface( 
   System.Int32
FaceUntrimType
,
   System.Int32
EdgeUntrimType
,
   System.Double
Distance
,
   System.Boolean
BMerge
)
```
## Parameters

- `FaceUntrimType` (System.Int32): Untrim face as defined in swFaceUntrimType_e
- `EdgeUntrimType` (System.Int32): Untrim edge as defined in swEdgeUntrimType_e
- `Distance` (System.Double): Distance by which to untrim surface
- `BMerge` (System.Boolean): True to create a surface extension that merges with the original surface, false to create a new, separate surface body

## Return Value

Pointer to the IFeature object

## Remarks

You must preselect the face or the edges you want to untrim.

## See Also

- `ISurfaceExtendFeatureData`