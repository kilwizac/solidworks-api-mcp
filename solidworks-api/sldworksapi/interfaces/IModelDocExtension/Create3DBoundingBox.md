---
type: method
interface: IModelDocExtension
member: Create3DBoundingBox
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - cut
  - lists
  - 3d
  - bounding
  - box
  - boxes
  - weldment
  - see
  - also
  - iweldmentcutlistfeature
  - weldments
  - create3dboundingbox
  - imodeldocextension
  - model
  - doc
  - extension
  - create3
  - void
  - create
  - list
  - item
  - vba
  - vb
  - net
---

# IModelDocExtension.Create3DBoundingBox

Creates a 3D bounding box for a cut list item in a weldment part.

## Signature

```csharp
void Create3DBoundingBox()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

After selecting the bounding box,
ISelectionMgr::GetSelectedObjectType3
returns
swSelectType_e
.swSelSKETCHES, while
ISelectionMgr::GetSelectedObject6
returns an
IFeature
instead of an
ISketch
.

## Examples

- Create 3D Bounding Box for Cut List Item (VBA) (Create_3D_Bounding_Box_Example_VB.htm)
- Create 3D Bounding Box for Cut List Item (VB.NET) (Create_3D_Bounding_Box_Example_VBNET.htm)
- Create 3D Bounding Box for Cut List Item (C#) (Create_3D_Bounding_Box_Example_CSharp.htm)