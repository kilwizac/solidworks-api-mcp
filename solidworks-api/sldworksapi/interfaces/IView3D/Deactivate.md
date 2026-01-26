---
type: method
interface: IView3D
member: Deactivate
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - deactivate
  - iview3d
  - view3
  - void
---

# IView3D.Deactivate

Restores the previously backed-up model state of a 3D View.

## Signature

```csharp
void Deactivate()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The model state includes the model's:
active configuration
display state
explode, section, or Model Break view state
view orientation, including pan and zoom
Restoring the previously backed-up model state of a 3D View might not be this 3D View.
For example:
Call
IView3D::Activate
and set the SaveLastState parameter to true (i.e., previous model state backed up) for 3DView1.
Call IView3D::Activate and set the SaveLastState parameter to false (i.e., previous model state not backed up) for 3DView2.
Call IView3D::Deactivate for 3DView1 or 3DView2, then the model state prior to activating 3DView1 is restored.