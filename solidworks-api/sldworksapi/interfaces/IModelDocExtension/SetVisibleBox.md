---
type: method
interface: IModelDocExtension
member: SetVisibleBox
returns: void
parameters:
  -
    name: UpperLeft
    type: MathPoint
    description: Upper-left point of the visible bounding box
  -
    name: LowerRight
    type: MathPoint
    description: Lower-right point of the visible bounding box
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - bounding
  - box
  - parts
  - assemblies
  - see
  - also
  - iassemblydoc
  - ipartdoc
  - setvisiblebox
  - imodeldocextension
  - model
  - doc
  - extension
  - visible
  - upper
  - left
  - math
  - point
  - lower
  - right
  - void
  - zoom
  - fit
  - vba
---

# IModelDocExtension.SetVisibleBox

Sets the visible bounding box for Zoom to Fit for a part or an assembly.

## Signature

```csharp
void SetVisibleBox( 
   MathPoint
UpperLeft
,
   MathPoint
LowerRight
)
```
## Parameters

- `UpperLeft` (MathPoint): Upper-left point of the visible bounding box
- `LowerRight` (MathPoint): Lower-right point of the visible bounding box

## Return Value

Unknown.

## Remarks

Use:
IModelDocExtension::GetVisibleBox
to get the visible bounding box for a Zoom to Fit operation.
IModelDocExtension::RemoveVisibleBox
to remove the visible bounding box
for a Zoom to Fit operation and to return the size of the bounding box to the size calculated by SOLIDWORKS.

## Examples

- Set Visible Bounding Box for Zoom to Fit (C#) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_CSharp.htm)
- Set Visible Bounding Box for Zoom to Fit (C#) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_VBNET.htm)
- Set Visible Bounding Box for Zoom to Fit (VBA) (Set_Visible_Bounding_Box_for_Zoom_to_Fit_Example_VB.htm)