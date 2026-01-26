---
type: property
interface: IDistanceMateFeatureData
member: EntitiesToMate
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - entitiestomate
  - idistancematefeaturedata
  - distance
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IDistanceMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this distance mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of entities to mate (see Remarks )

## Remarks

You can create distance mates with the following mate entity combinations:
Mate entity/Mate entity
IRefAxis
,
IFace2
(cone)
ICurve
(arc, spline, helix)
IRefAxis,
IFace2
(cylinder)
IEdge
,
IRefAxis,
ICenterLine
,
ISketchLine
(line)
IRefPlane
,
IFace2
IRefPoint
,
IVertex
,
ISketchPoint
ISurface
,
IFace2
(sphere)
IRefAxis, IFace2 (cone)
● Both cones must be of the same half angle
ICurve (arc, spline, helix)
●
IRefAxis, IFace2 (cylinder)
●
●
●
●
IEdge, IRefAxis, ICenterLine, ISketchLine (line)
●
●
●
●
●
IRefPlane, IFace2
●
●
●
●
●
IRefPoint, IVertex, ISketchPoint
●
●
●
●
●
●
ISurface, IFace2 (sphere)
●
●
●
●

## Examples

- IDistanceMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDistanceMateFeatureData)