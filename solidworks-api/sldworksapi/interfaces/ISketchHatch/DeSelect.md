---
type: method
interface: ISketchHatch
member: DeSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related:
  - ISketchHatch.Select4
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - deselect
  - isketchhatch
  - sketch
  - hatch
  - de
  - select
  - boolean
---

# ISketchHatch.DeSelect

Deselects the sketch hatch.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the sketch hatch is deselected, false if not

## Remarks

This method does not work well when a PropertyManager page is open or a command is running. Use
IModelDoc2::DeSelectByID
instead of using this method. IModelDoc2::DeSelectByID handles selection correctly whether or not a command is running.
To select or deselect a sketch hatch, the owning document of the ISketchHatch object needs to be open and visible.
ISketchHatch selections are accessible through the
ISelectionMgr
of the owning document of the
ISketchHatch
object, even if the owning document is not active.
Selection or deselection does not work for a sketch hatch in a component within an assembly. Selection or deselection does not work for a sketch hatch in a document within a drawing. Selection or deselection of sketch hatches owned by the top-level assembly or drawing works, but only if the assembly document or the drawing document is active.
If the owning sketch of a sketch hatch is active (inactive) when the sketch hatch is obtained, then it must be active (inactive) to deselect it. For example, if the owning sketch of a sketch hatch was active when the sketch hatch was obtained, then the owning sketch must be active to select or deselect the sketch hatch. Likewise, if the owning sketch of a sketch hatch was inactive when the sketch hatch was obtained, then the owning sketch must be inactive to select or deselect the sketch hatch.

## See Also

- `ISketchHatch.Select4`