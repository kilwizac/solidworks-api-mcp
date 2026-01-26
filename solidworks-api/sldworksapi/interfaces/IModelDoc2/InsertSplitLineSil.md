---
type: method
interface: IModelDoc2
member: InsertSplitLineSil
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
  - IFeatureManager.InsertSplitLineIntersect
  - IModelDoc2.InsertSplitLineProject
  - ISplitLineFeatureData
keywords:
  - split
  - lines
  - face
  - see
  - also
  - iface2
  - insertsplitlinesil
  - imodeldoc2
  - model
  - doc2
  - insert
  - line
  - sil
  - void
---

# IModelDoc2.InsertSplitLineSil

Splits a face by creating split lines along the silhouette of the selected faces.

## Signature

```csharp
void InsertSplitLineSil()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The silhouette curves differ based on your orientation. Therefore, this method requires a selection to specify the desired direction.
Valid items to select to specify the direction are:
reference plane
planar face
edge
axis
two points
The item selected for direction must be selected using
IModelDocExtension::SelectByID2
with a mark value of 2. The faces to split must be selected using I
ModelDocExtension::SelectByID2
with mark values of 1.

## See Also

- `IFeatureManager.InsertSplitLineIntersect`
- `IModelDoc2.InsertSplitLineProject`
- `ISplitLineFeatureData`