---
type: method
interface: IModelDoc2
member: GetActiveSketch2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.IGetActiveSketch2
keywords:
  - getactivesketch2
  - imodeldoc2
  - model
  - doc2
  - active
  - sketch2
  - object
  - dynamically
  - mirror
  - sketch
  - entities
  - vba
  - find
  - outside
  - edges
  - face
  - length
  - spline
  - elliptical
  - edge
  - points
  - their
  - persistent
  - ids
  - rename
  - transform
  - coordinates
  - space
---

# IModelDoc2.GetActiveSketch2

Obsolete. Superseded by SketchManager::ActiveSketch.

## Signature

```csharp
System.Object GetActiveSketch2()
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

## Examples

- Dynamically Mirror Sketch Entities (VBA) (Dynamically_Mirror_Sketch_Entities_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Length of Spline or Elliptical Edge (VBA) (Get_Length_of_Spline_or_Elliptical_Edge_Example_VB.htm)
- Get Sketch Points and Their Persistent IDs (VBA) (Get_Sketch_Points_and_Their_Persistent_IDs_Example_VB.htm)
- Rename Active Sketch (VBA) (Rename_Active_Sketch_Example_VB.htm)
- Transform Coordinates from Sketch to Model Space (VBA) (Transform_Coordinates_from_Sketch_to_Model_Space_Example_VB.htm)

## See Also

- `IModelDoc2.IGetActiveSketch2`