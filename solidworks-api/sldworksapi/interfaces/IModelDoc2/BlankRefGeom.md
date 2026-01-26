---
type: method
interface: IModelDoc2
member: BlankRefGeom
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.UnBlankRefGeom
keywords:
  - hide
  - reference
  - geometry
  - blankrefgeom
  - imodeldoc2
  - model
  - doc2
  - blank
  - ref
  - geom
  - void
  - create
  - replace
  - face
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.BlankRefGeom

Hides the selected reference geometry in the graphics window.

## Signature

```csharp
void BlankRefGeom()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If you select a reference plane and then call this method, the plane is invisible in the graphics area. This method has the same effect as right-clicking an item and selecting
Hide
on the shortcut menu.

## Examples

- Create Replace Face Feature (C#) (Replace_Face_Example_CSharp.htm)
- Create Replace Face Feature (VB.NET) (Replace_Face_Example_VBNET.htm)
- Create Replace Face Feature (VBA) (Replace_Face_Example_VB.htm)

## See Also

- `IModelDoc2.UnBlankRefGeom`