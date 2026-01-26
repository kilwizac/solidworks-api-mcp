---
type: method
interface: IModelDoc2
member: IGetActiveSketch2
returns: Sketch
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.GetActiveSketch2
keywords:
  - sketch
  - see
  - also
  - isketch
  - active
  - igetactivesketch2
  - imodeldoc2
  - model
  - doc2
  - sketch2
  - create
  - cylinder
---

# IModelDoc2.IGetActiveSketch2

Gets the active sketch.

## Signature

```csharp
Sketch IGetActiveSketch2()
```
## Parameters

None.

## Return Value

Active sketch

## Remarks

Before you can use this method, you must select and activate a sketch. You can use
IModelDocExtension::SelectByID2
to select a sketch and
ISketchManager::InsertSketch
to make the sketch active.
For an example of getting a sketch through feature traversal, see
Get Sketches (C++)
.

## Examples

- Create Cylinder (C++) (Create_Cylinder_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.GetActiveSketch2`