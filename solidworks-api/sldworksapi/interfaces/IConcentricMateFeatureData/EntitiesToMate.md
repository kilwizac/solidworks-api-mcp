---
type: property
interface: IConcentricMateFeatureData
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
  - iconcentricmatefeaturedata
  - concentric
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IConcentricMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this concentric mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Entities to mate (see Remarks )

## Remarks

You can create concentric mates with the following mate entity combinations:
Mate entity/Mate entity
IEdge
(arc, circular edge)
IRefAxis
,
(cone)
IRefAxis,
(cylinder)
IEdge,
IRefAxis,
ICenterLine
,
ISketchLine
(line)
IRefPoint
,
IVertex
,
ISketchPoint
IRefAxis,
ISketchPoint,
IRefPoint,
IVertex
(sphere)
IEdge (arc, circular edge)
●
●
●
●
IRefAxis (cone)
●
●
●
●
●
IRefAxis (cylinder)
●
●
●
●
●
●
IEdge, IRefAxis, ICenterLine, ISketchLine (line)
●
●
●
●
IRefPoint, IVertex, ISketchPoint
●
●
●
IRefAxis, IRefPoint, ISketchPoint, IVertex (sphere)
●
●
●
●
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IConcentricMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConcentricMateFeatureData)