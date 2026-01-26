---
type: method
interface: ISketchPoint
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
  - ISketchPoint.Select4
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - deselect
  - isketchpoint
  - sketch
  - point
  - de
  - select
  - boolean
---

# ISketchPoint.DeSelect

Deselects the sketch point.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the sketch point is deselected, false if not

## Remarks

This method does not work well when a PropertyManager page is open or a command is running. Use
IModelDoc2::DeSelectByID
instead of using this method. IModelDoc2::DeSelectByID handles selection correctly whether or not a command is running.
To select or deselect a sketch point, the owning document of that ISketchPoint object needs to be open and visible.
Sketch point selections are accessible through the
ISelectionMgr
of the owning document of the SIketchPoint object, even if the owning document is not active.
Selection or deselection does not work for a sketch point in a document within a drawing. Selection or deselection of sketch points owned by the drawing does work, but only when the drawing document is active.
If the owning sketch of a sketch point was active, or inactive, when the sketch point was obtained, then it must be active, or inactive, to deselect it. For example, if the owning sketch of a sketch point was active when the sketch point was obtained, then the owning sketch must be active to select or deselect the sketch point. Likewise, if the owning sketch of a sketch point was inactive when the sketch point was obtained, then the owning sketch must be inactive to select or deselect the sketch point

## See Also

- `ISketchPoint.Select4`