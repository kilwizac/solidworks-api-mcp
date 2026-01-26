---
type: method
interface: IDrawingDoc
member: IGetInsertionPoint
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetInsertionPoint
keywords:
  - insertion
  - points
  - pick
  - igetinsertionpoint
  - idrawingdoc
  - drawing
  - doc
  - point
  - double
  - iselectionmgr
  - igetselectionpointinsketchspace2
---

# IDrawingDoc.IGetInsertionPoint

Gets the current insertion (pick) point in a drawing.

## Signature

```csharp
System.Double IGetInsertionPoint()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 3 doubles (x,y,z) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Examples

- ISelectionMgr::IGetSelectionPointInSketchSpace2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr~IGetSelectionPointInSketchSpace2)

## See Also

- `IDrawingDoc.GetInsertionPoint`