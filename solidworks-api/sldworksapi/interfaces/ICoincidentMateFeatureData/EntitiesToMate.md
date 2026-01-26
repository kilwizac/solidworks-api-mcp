---
type: property
interface: ICoincidentMateFeatureData
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
  - icoincidentmatefeaturedata
  - coincident
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# ICoincidentMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this coincident mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of entities to mate (see Remarks )

## Remarks

Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.
Populate the array of this property by using either IModelDocExtension::SelectByID2 or
IModelDocExtension::SelectByRay
and
ISelectionMgr::GetSelectedObject6
.
Create coincident mates with the following mate entity combinations:
Mate entity/Mate entity
IEdge
(arc, circular edge)
ISurface
,
IFace2
(cone)
IFeature
(coordinate system)
ICurve
(arc, spline, helix)
ISurface,
IFace2
(cylinder)
IFace2
(extrusion face, draft is not allowed)
IEdge,
IRefAxis
,
ICenterLine
,
ISketchLine
(line)
IEntity
(coordinate system origin)
IRefPlane
IRefPoint
,
IVertex
,
ISketchPoint
ISurface,
IFace2
(sphere)
ISurface
IEdge (arc, circular edge)
●
●
●
●
●
ISurface, IFace2 (cone)
●
● Both cones must be of the same half angle
●
IFeature (coordinate system)
●
●
ICurve (arc, spline, helix)
●
ISurface, IFace2 (cylinder)
●
●
IFace2 (extrusion face, draft is not allowed)
●
IEdge, IRefAxis, ICenterLine, ISketchLine (line)
●
●
●
●
IEntity (coordinate system origin)
●
●
IRefPlane
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
●
●
●
●
ISurface, IFace2 (sphere)
●
ISurface
●
After specifying the entities to mate, specify their
ICoincidentMateFeatureData::PickPoints
to fully define the position of the mate.

## Examples

- ICoincidentMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICoincidentMateFeatureData)