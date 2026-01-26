---
type: method
interface: IView3D
member: Activate
returns: void
parameters:
  -
    name: SaveLastState
    type: System.Boolean
    description: True to back up the previous model state prior to activating this 3D View, false to not back up the previous model state prior to activating this 3D view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView3D.Deactivate
keywords:
  - activate
  - iview3d
  - view3
  - save
  - last
  - state
  - boolean
  - void
---

# IView3D.Activate

Activates this 3D View.

## Signature

```csharp
void Activate( 
   System.Boolean
SaveLastState
)
```
## Parameters

- `SaveLastState` (System.Boolean): True to back up the previous model state prior to activating this 3D View, false to not back up the previous model state prior to activating this 3D view

## Return Value

Unknown.

## Remarks

The model state includes the model's:
active configuration
display state
explode, section, or Model Break view state
view orientation, including pan and zoom

## Examples

- IView3D (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView3D)

## See Also

- `IView3D.Deactivate`