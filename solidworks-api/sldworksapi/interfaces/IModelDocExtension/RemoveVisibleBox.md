---
type: method
interface: IModelDocExtension
member: RemoveVisibleBox
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetVisibleBox
keywords:
  - bounding
  - box
  - parts
  - assemblies
  - see
  - also
  - iassemblydoc
  - ipartdoc
  - removevisiblebox
  - imodeldocextension
  - model
  - doc
  - extension
  - remove
  - visible
  - void
  - zoom
  - fit
  - vb
  - net
  - vba
---

# IModelDocExtension.RemoveVisibleBox

Removes the visible bounding box set by IModelDocExtension::SetVisibleBox and resets the size of the bounding box to the size calculated by SOLIDWORKS for a part or an assembly.

## Signature

```csharp
void RemoveVisibleBox()
```
## Parameters

None.

## Return Value

Unknown.

## Examples

- Set Visible Bounding Box for Zoom to Fit (C#) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_CSharp.htm)
- Set Visible Bounding Box for Zoom to Fit (VB.NET) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_VBNET.htm)
- Set Visible Bounding Box for Zoom to Fit (VBA) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_VB.htm)

## See Also

- `IModelDocExtension.GetVisibleBox`