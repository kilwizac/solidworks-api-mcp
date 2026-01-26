---
type: property
interface: ITangentMateFeatureData
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
  - itangentmatefeaturedata
  - tangent
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# ITangentMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this tangent mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Entities to mate (see Remarks )

## Remarks

You can create tangent mates with the following mate entity combinations:
Mate entity/Mate entity
ISurface
,
IFace2
(cone, cylinder)
IFace2
(extrusion face, draft is not allowed)
IEdge
,
IRefAxis,
ICenterLine
,
ISketchLine
(line)
IRefPlane
ISurface,
IFace2
(sphere)
ISurface
ISurface, IFace2 (cone, cylinder)
●
●
●
●
●
●
IFace2 (extrusion face; draft is not allowed)
●
●
IEdge, IRefAxis, ICenterLine, ISketchLine (line)
●
●
IRefPlane
●
●
ISurface, IFace2 (sphere)
●
●
●
●
●
●
ISurface
●
●
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- ITangentMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITangentMateFeatureData)