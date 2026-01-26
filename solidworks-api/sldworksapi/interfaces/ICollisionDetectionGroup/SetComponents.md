---
type: method
interface: ICollisionDetectionGroup
member: SetComponents
returns: System.Int32
parameters:
  -
    name: Components
    type: System.Object
    description: Array of IComponent2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - setcomponents
  - icollisiondetectiongroup
  - collision
  - detection
  - group
  - components
  - object
  - int32
  - icollisiondetectionmanager
---

# ICollisionDetectionGroup.SetComponents

Sets the specified components in this collision detection group.

## Signature

```csharp
System.Int32 SetComponents( 
   System.Object
Components
)
```
## Parameters

- `Components` (System.Object): Array of IComponent2

## Return Value

Return code as defined in swCollisionGroupSetComponentsErrors_e

## Examples

- ICollisionDetectionManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICollisionDetectionManager)