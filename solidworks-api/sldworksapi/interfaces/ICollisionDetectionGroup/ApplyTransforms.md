---
type: method
interface: ICollisionDetectionGroup
member: ApplyTransforms
returns: System.Int32
parameters:
  -
    name: ComponentTransforms
    type: System.Object
    description: Array of IMathTransform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - applytransforms
  - icollisiondetectiongroup
  - collision
  - detection
  - group
  - apply
  - transforms
  - component
  - object
  - int32
  - icollisiondetectionmanager
---

# ICollisionDetectionGroup.ApplyTransforms

Applies the specified transforms to the components in this collision detection group.

## Signature

```csharp
System.Int32 ApplyTransforms( 
   System.Object
ComponentTransforms
)
```
## Parameters

- `ComponentTransforms` (System.Object): Array of IMathTransform

## Return Value

Result code as defined in swCollisionGroupApplyTransformErrors_e

## Examples

- ICollisionDetectionManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICollisionDetectionManager)