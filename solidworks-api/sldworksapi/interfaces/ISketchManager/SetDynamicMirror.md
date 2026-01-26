---
type: method
interface: ISketchManager
member: SetDynamicMirror
returns: System.Boolean
parameters:
  -
    name: DynamicMirror
    type: System.Boolean
    description: True to enable dynamic sketch mirroring, false to disable it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.GetDynamicMirror
keywords:
  - automatic
  - sketch
  - mirroring
  - mirror
  - entities
  - dynamic
  - see
  - also
  - isketch
  - setdynamicmirror
  - isketchmanager
  - manager
  - boolean
  - dynamically
  - vba
---

# ISketchManager.SetDynamicMirror

Enables or disables dynamic sketch mirroring, which is the automatic mirroring of newly created sketch entities about a selected centerline.

## Signature

```csharp
System.Boolean SetDynamicMirror( 
   System.Boolean
DynamicMirror
)
```
## Parameters

- `DynamicMirror` (System.Boolean): True to enable dynamic sketch mirroring, false to disable it

## Return Value

True if setting this option to succeeds, false if fails

## Remarks

If enabling dynamic sketch mirroring, then:
a sketch must be in edit mode.
a line segment or linear edge of a model must be selected before calling this method.

## Examples

- Dynamically Mirror Sketch Entities (VBA) (Dynamically_Mirror_Sketch_Entities_Example_VB.htm)

## See Also

- `ISketchManager.GetDynamicMirror`