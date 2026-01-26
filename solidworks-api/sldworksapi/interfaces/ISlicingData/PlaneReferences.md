---
type: property
interface: ISlicingData
member: PlaneReferences
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - planereferences
  - islicingdata
  - slicing
  - data
  - plane
  - references
  - object
readonly: false
---

# ISlicingData.PlaneReferences

Sets the reference entities of the first slicing plane.

## Signature

```csharp
System.Object PlaneReferences {set;}
```
## Parameters

None.

## Return Value

Array of reference entities (see Remarks )

## Remarks

Use this property to specify either:
a planar entity (e.g.,
IFace2
,
IRefPlane
) to produce a linear pattern of parallel slices
- or -
a linear entity (e.g.,
IEdge
,
IRefAxis
,
ISketchLine
) and a vertex (
IRefPoint
,
IVertex
) to produce a radial pattern of slices whose axis is the linear entity.
Use
ISlicingData::NumberOfPlanes
to specify the number of slices and
ISlicingData::Offset
to specify the linear or radial spacing of the slices.