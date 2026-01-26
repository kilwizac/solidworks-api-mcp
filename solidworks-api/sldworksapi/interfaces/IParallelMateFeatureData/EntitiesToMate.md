---
type: property
interface: IParallelMateFeatureData
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
  - iparallelmatefeaturedata
  - parallel
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IParallelMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this parallel mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Entities to mate (see Remarks )

## Remarks

You can create parallel mates with the following mate entity combinations:
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
ISurface
,
IFace2
(non-analytic
surface)
IRefAxis (cone, cylinder)
●
●
●
●
IFace2 (extrusion face,
draft is not allowed)
●
●
●
IEdge, IRefAxis, ICenterLine, ISketchLine (line)
●
●
●
●
●
IRefPlane
●
●
ISurface, IFace2
(non-analytic surface)
●
●
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IParallelMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParallelMateFeatureData)