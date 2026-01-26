---
type: method
interface: IModelDoc2
member: InsertFeatureReplaceFace
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - geometry
  - ui
related:
  - IReplaceFaceFeatureData
keywords:
  - face
  - see
  - also
  - iface2
  - replace
  - surfaces
  - insertfeaturereplaceface
  - imodeldoc2
  - model
  - doc2
  - insert
  - feature
  - void
  - create
  - vba
  - vb
  - net
---

# IModelDoc2.InsertFeatureReplaceFace

Creates a Replace Face feature.

## Signature

```csharp
void InsertFeatureReplaceFace()
```
## Parameters

None.

## Return Value

True if the edges match, false if not

## Remarks

Before calling this method, select the faces to replace by calling
IModelDocExtension::SelectByID2
with Marks of 1 and select the replacement surfaces by calling IModelDocExtension::SelectByID2 with Marks of 2.
See SOLIDWORKS Help for details about the Replace Face feature.

## Examples

- Create Replace Face Feature (VBA) (Replace_Face_Example_VB.htm)
- Create Replace Face Feature (VB.NET) (Replace_Face_Example_VBNET.htm)
- Create Replace Face Feature (C#) (Replace_Face_Example_CSharp.htm)

## See Also

- `IReplaceFaceFeatureData`