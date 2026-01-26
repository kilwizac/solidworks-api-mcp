---
type: method
interface: ISketchManager
member: SketchReplace
returns: System.Boolean
parameters:
  -
    name: MakeConstruction
    type: System.Boolean
    description: True to convert the replaced sketch entity to construction geometry, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketchreplace
  - isketchmanager
  - sketch
  - manager
  - replace
  - make
  - construction
  - boolean
---

# ISketchManager.SketchReplace

Obsolete. Superseded by ISketchManager::SketchReplace2.

## Signature

```csharp
System.Boolean SketchReplace( 
   System.Boolean
MakeConstruction
)
```
## Parameters

- `MakeConstruction` (System.Boolean): True to convert the replaced sketch entity to construction geometry, false to not

## Return Value

True if the the sketch entity is successfully replaced, false if not

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
with Append set to true to select each of the following entities:
Sketch entity to be replaced.
Replacement sketch entity that does not reference downstream geometry or have references outside of the sketch.
After calling this method, call
ISketchManager::InsertSketch
to rebuild the model with the replacement sketch.