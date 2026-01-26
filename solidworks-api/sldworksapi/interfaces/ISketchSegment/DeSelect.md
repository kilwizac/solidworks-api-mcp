---
type: method
interface: ISketchSegment
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
  - ISketchSegment.Select4
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - deselect
  - isketchsegment
  - sketch
  - segment
  - de
  - select
  - boolean
---

# ISketchSegment.DeSelect

Deselects the sketch segment.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the sketch segment is deselected successfully, false if not

## Remarks

This method does not work well when a PropertyManager page is open or a command is running. Use
IModelDoc2::DeSelectByID
instead of using this method. IModelDoc2::DeSelectByID handles selection correctly whether or not a command is running.
To select or deselect a sketch segment, the owning document of that ISketchSegment object needs to be open and visible.
ISketchSegment selections are accessible through the
ISelectionMgr
of the owning document of the sketch segment object, even if the owning document is not active.
Selection or deselection does not work for a sketch segment in a document within a drawing. Selection or deselection of sketch segments owned by the drawing does work, but only if the drawing document is active.
If the owning sketch of a sketch segment was active, or inactive, when the sketch segment was obtained, then it must be active, or inactive, to deselect it. For example, if the owning sketch of a sketch segment was active when the sketch segment was obtained, then the owning sketch must be active to select or deselect the sketch segment. Likewise, if the owning sketch of a sketch segment was inactive when the sketch segment was obtained, then the owning sketch must be inactive to select or deselect the sketch segment.

## See Also

- `ISketchSegment.Select4`