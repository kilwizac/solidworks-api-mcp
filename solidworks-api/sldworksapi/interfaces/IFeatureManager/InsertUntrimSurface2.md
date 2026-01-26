---
type: method
interface: IFeatureManager
member: InsertUntrimSurface2
returns: Feature
parameters:
  -
    name: FaceUntrimType
    type: System.Int32
    description: Untrim face edge type as defined by swFaceUntrimType_e ; valid only if a face is selected
  -
    name: EdgeUntrimType
    type: System.Int32
    description: Connect endpoints or extend edges as defined by swEdgeUntrimType_e ; valid only of one or more edges are selected
  -
    name: Distance
    type: System.Double
    description: Distance by which to untrim the surface
  -
    name: BMerge
    type: System.Boolean
    description: True to create a surface extension that merges with the original surface, false to create a new, separate surface body
  -
    name: BTrimOppositeSide
    type: System.Boolean
    description: True to remove the surface outside the selected surface edges or interior surface holes, false to not; valid only if BMerge is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceExtendFeatureData
keywords:
  - extend
  - surface
  - feature
  - see
  - also
  - ifeature
  - untrimmed
  - isurface
  - insertuntrimsurface2
  - ifeaturemanager
  - manager
  - insert
  - untrim
  - surface2
  - face
  - type
  - int32
  - edge
  - distance
  - double
  - merge
  - boolean
  - trim
  - opposite
  - side
---

# IFeatureManager.InsertUntrimSurface2

Extends a surface along its natural boundaries or fills interior surface holes, optionally trimming outside these boundaries or holes.

## Signature

```csharp
Feature InsertUntrimSurface2( 
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
,
   System.Boolean
BTrimOppositeSide
)
```
## Parameters

- `FaceUntrimType` (System.Int32): Untrim face edge type as defined by swFaceUntrimType_e ; valid only if a face is selected
- `EdgeUntrimType` (System.Int32): Connect endpoints or extend edges as defined by swEdgeUntrimType_e ; valid only of one or more edges are selected
- `Distance` (System.Double): Distance by which to untrim the surface
- `BMerge` (System.Boolean): True to create a surface extension that merges with the original surface, false to create a new, separate surface body
- `BTrimOppositeSide` (System.Boolean): True to remove the surface outside the selected surface edges or interior surface holes, false to not; valid only if BMerge is false

## Return Value

Pointer to the IFeature object

## Remarks

This method:
is valid only for surface parts.
requires preselection of the face or edges you want to untrim.
For learn more about Untrim Surfaces, see the
SOLIDWORKS Help > Parts and Features > Features > Surfaces > Surface Controls > Untrim Surface
topic.

## See Also

- `ISurfaceExtendFeatureData`