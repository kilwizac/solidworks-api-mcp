---
type: property
interface: IAngleMateFeatureData
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
  - ianglematefeaturedata
  - angle
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IAngleMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this angle mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of entities to mate (see Remarks )

## Remarks

You can create angle mates with the following mate entity combinations:
Mate entity/Mate entity
IRefAxis
(cone, cylinder)
IFace2
(extrusion face,
draft is not allowed)
IEdge
,
IRefAxis,
ICenterLine
,
ISketchLine
(line)
IRefPlane
IRefAxis (cone, cylinder)
●
●
●
IFace2 (extrusion face,
draft is not allowed)
●
●
●
IEdge,
IRefAxis,
ICenterLine,
ISketchLine
(line)
●
●
●
IRefPlane
●

## Examples

- IAngleMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAngleMateFeatureData)