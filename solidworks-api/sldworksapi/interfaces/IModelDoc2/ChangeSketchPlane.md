---
type: method
interface: IModelDoc2
member: ChangeSketchPlane
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - changesketchplane
  - imodeldoc2
  - model
  - doc2
  - change
  - sketch
  - plane
  - boolean
  - vba
---

# IModelDoc2.ChangeSketchPlane

Obsolete. Superseded by IModelDocExtension::ChangeSketchPlane.

## Signature

```csharp
System.Boolean ChangeSketchPlane()
```
## Parameters

None.

## Return Value

True if the change was successful, false otherwise

## Remarks

Every sketch is associated with a plane (for example, a reference plane or a planar face). You must preselect the sketch and the new plane or face before using this method.

## Examples

- Change Plane of Sketch (VBA) (Change_Sketch_of_Plane_Example.htm)