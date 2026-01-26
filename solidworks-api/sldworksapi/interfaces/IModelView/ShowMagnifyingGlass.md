---
type: method
interface: IModelView
member: ShowMagnifyingGlass
returns: void
parameters:
  -
    name: Ptx
    type: System.Double
    description: x coordinate
  -
    name: Pty
    type: System.Double
    description: y coordinate
  -
    name: Ptz
    type: System.Double
    description: z coordinate
  -
    name: ZoomFactor
    type: System.Double
    description: Zoom factor
  -
    name: HideOnClick
    type: System.Boolean
    description: True to hide the Magnifying Glass tool when the mouse is right-clicked, false to not
  -
    name: FollowMouse
    type: System.Boolean
    description: True to have the Magnifying Glass tool follow the pointer, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.HideMagnifyingGlass
  - IModelView.MoveMagnifyingGlass
keywords:
  - magnifying
  - glass
  - showmagnifyingglass
  - imodelview
  - model
  - view
  - show
  - ptx
  - double
  - pty
  - ptz
  - zoom
  - factor
  - hide
  - click
  - boolean
  - follow
  - mouse
  - void
---

# IModelView.ShowMagnifyingGlass

Shows the Magnifying Glass tool at the specified coordinates.

## Signature

```csharp
void ShowMagnifyingGlass( 
   System.Double
Ptx
,
   System.Double
Pty
,
   System.Double
Ptz
,
   System.Double
ZoomFactor
,
   System.Boolean
HideOnClick
,
   System.Boolean
FollowMouse
)
```
## Parameters

- `Ptx` (System.Double): x coordinate
- `Pty` (System.Double): y coordinate
- `Ptz` (System.Double): z coordinate
- `ZoomFactor` (System.Double): Zoom factor
- `HideOnClick` (System.Boolean): True to hide the Magnifying Glass tool when the mouse is right-clicked, false to not
- `FollowMouse` (System.Boolean): True to have the Magnifying Glass tool follow the pointer, false to not

## Return Value

Unknown.

## See Also

- `IModelView.HideMagnifyingGlass`
- `IModelView.MoveMagnifyingGlass`