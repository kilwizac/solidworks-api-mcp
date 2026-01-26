---
type: method
interface: IModelDoc2
member: InsertSewRefSurface
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISurfaceKnitFeatureData
keywords:
  - insertsewrefsurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - sew
  - ref
  - surface
  - void
---

# IModelDoc2.InsertSewRefSurface

Obsolete. Superseded by IFeatureManager::InsertSewRefSurface.

## Signature

```csharp
void InsertSewRefSurface()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Make selections using
IModelDocExtension::SelectByID2
with a mark number of 1. S
ee the SOLIDWORKS Help for information about what entities are valid for selection.

## See Also

- `ISurfaceKnitFeatureData`