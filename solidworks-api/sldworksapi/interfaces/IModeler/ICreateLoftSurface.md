---
type: method
interface: IModeler
member: ICreateLoftSurface
returns: Surface
parameters:
  -
    name: NCurves
    type: System.Int32
    description: Number of B-spline curves
  -
    name: CurveArray
    type: Curve
    description: Array of b-spline curves
  -
    name: BBlendClosed
    type: System.Boolean
    description: True if blend closed, false if not
  -
    name: BForceCubic
    type: System.Boolean
    description: True if force surface is cubic, false if not
  -
    name: NGuides
    type: System.Int32
    description: Number of guide curves
  -
    name: GuideCrvArray
    type: Curve
    description: Array of guide curves
  -
    name: StartMatchingType
    type: System.Int32
    description: Start matching type: 0 = MATCH_NONE (default) 1 = MATCH_NORMAL 2 = MATCH_VECTOR 3 = MATCH_ALL_FACES or MATCH_FACE_G1 4 = MATCH_FACE_G2
  -
    name: EndMatchingType
    type: System.Int32
    description: End matching type: 0 = MATCH_NONE (default) 1 = MATCH_NORMAL 2 = MATCH_VECTOR 3 = MATCH_ALL_FACES or MATCH_FACE_G1 4 = MATCH_FACE_G2
  -
    name: NormalAtStartSection
    type: MathVector
    description: Normal at start section when StartMatchingType is MATCH_NORMAL or MATCH_VECTOR; otherwise, can be NULL
  -
    name: NormalAtEndSection
    type: MathVector
    description: Array of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
  -
    name: NStartMatchingFaces
    type: System.Int32
    description: Number of matching faces at start section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be 0
  -
    name: StartMatchingFaceList
    type: Face2
    description: Array of matching faces at start section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
  -
    name: NEndMatchingFaces
    type: System.Int32
    description: Number of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be 0
  -
    name: EndMatchingFaceList
    type: Face2
    description: Array of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
  -
    name: DegeneratedStart
    type: System.Boolean
    description: True to degenerate at start, false to not
  -
    name: DegeneratedEnd
    type: System.Boolean
    description: True to degenerate at end, false to not
  -
    name: StartPointOfStartSection
    type: MathPoint
    description: Start point of start section
  -
    name: StartPointOfEndSection
    type: MathPoint
    description: Start point of end section
  -
    name: SectionIndexStart
    type: System.Int32
    description: Index of start section; default is -1
  -
    name: SectionIndexEnd
    type: System.Int32
    description: Index of end section; default is -1
  -
    name: GuideIndexStart
    type: System.Int32
    description: Index of start guide curve; default is -1
  -
    name: GuideIndexEnd
    type: System.Int32
    description: Index of end guide curve; default is -1
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSphericalSurface2
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - lofts
  - see
  - also
  - iloftfeaturedata
  - surfaces
  - surface
  - isurface
  - loft
  - icreateloftsurface
  - imodeler
  - modeler
  - create
  - curves
  - int32
  - curve
  - array
  - blend
  - closed
  - boolean
  - force
  - cubic
  - guides
  - guide
  - crv
  - start
  - matching
  - type
  - end
  - normal
  - section
  - math
  - vector
  - faces
  - face
  - list
  - face2
  - degenerated
  - point
  - index
---

# IModeler.ICreateLoftSurface

Creates a loft surface.

## Signature

```csharp
Surface ICreateLoftSurface( 
   System.Int32
NCurves
,
   ref Curve
CurveArray
,
   System.Boolean
BBlendClosed
,
   System.Boolean
BForceCubic
,
   System.Int32
NGuides
,
   ref Curve
GuideCrvArray
,
   System.Int32
StartMatchingType
,
   System.Int32
EndMatchingType
,
   MathVector
NormalAtStartSection
,
   MathVector
NormalAtEndSection
,
   System.Int32
NStartMatchingFaces
,
   ref Face2
StartMatchingFaceList
,
   System.Int32
NEndMatchingFaces
,
   ref Face2
EndMatchingFaceList
,
   System.Boolean
DegeneratedStart
,
   System.Boolean
DegeneratedEnd
,
   MathPoint
StartPointOfStartSection
,
   MathPoint
StartPointOfEndSection
,
   System.Int32
SectionIndexStart
,
   System.Int32
SectionIndexEnd
,
   System.Int32
GuideIndexStart
,
   System.Int32
GuideIndexEnd
)
```
## Parameters

- `NCurves` (System.Int32): Number of B-spline curves
- `CurveArray` (Curve): Array of b-spline curves
- `BBlendClosed` (System.Boolean): True if blend closed, false if not
- `BForceCubic` (System.Boolean): True if force surface is cubic, false if not
- `NGuides` (System.Int32): Number of guide curves
- `GuideCrvArray` (Curve): Array of guide curves
- `StartMatchingType` (System.Int32): Start matching type: 0 = MATCH_NONE (default) 1 = MATCH_NORMAL 2 = MATCH_VECTOR 3 = MATCH_ALL_FACES or MATCH_FACE_G1 4 = MATCH_FACE_G2
- `EndMatchingType` (System.Int32): End matching type: 0 = MATCH_NONE (default) 1 = MATCH_NORMAL 2 = MATCH_VECTOR 3 = MATCH_ALL_FACES or MATCH_FACE_G1 4 = MATCH_FACE_G2
- `NormalAtStartSection` (MathVector): Normal at start section when StartMatchingType is MATCH_NORMAL or MATCH_VECTOR; otherwise, can be NULL
- `NormalAtEndSection` (MathVector): Array of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
- `NStartMatchingFaces` (System.Int32): Number of matching faces at start section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be 0
- `StartMatchingFaceList` (Face2): Array of matching faces at start section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
- `NEndMatchingFaces` (System.Int32): Number of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be 0
- `EndMatchingFaceList` (Face2): Array of matching faces at end section when startMatchingType is MATCH_ALL_FACES, MATCH_FACE_G1, or MATCH_FACE_G2; otherwise, can be NULL
- `DegeneratedStart` (System.Boolean): True to degenerate at start, false to not
- `DegeneratedEnd` (System.Boolean): True to degenerate at end, false to not
- `StartPointOfStartSection` (MathPoint): Start point of start section
- `StartPointOfEndSection` (MathPoint): Start point of end section
- `SectionIndexStart` (System.Int32): Index of start section; default is -1
- `SectionIndexEnd` (System.Int32): Index of end section; default is -1
- `GuideIndexStart` (System.Int32): Index of start guide curve; default is -1
- `GuideIndexEnd` (System.Int32): Index of end guide curve; default is -1

## Return Value

Unknown.

## See Also

- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSphericalSurface2`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`