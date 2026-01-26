---
type: method
interface: ICollisionDetectionManager
member: SetAssembly
returns: System.Int32
parameters:
  -
    name: OwnerAssem
    type: System.Object
    description: IAssemblyDoc
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - ICollisionDetectionManager.GetAssembly
keywords:
  - setassembly
  - icollisiondetectionmanager
  - collision
  - detection
  - manager
  - assembly
  - owner
  - assem
  - object
  - int32
---

# ICollisionDetectionManager.SetAssembly

Sets the active assembly for this collision detection manager.

## Signature

```csharp
System.Int32 SetAssembly( 
   System.Object
OwnerAssem
)
```
## Parameters

- `OwnerAssem` (System.Object): IAssemblyDoc

## Return Value

Error code as defined in swCollisionManagerSetAssemblyErrors_e

## Examples

- ICollisionDetectionManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICollisionDetectionManager)

## See Also

- `ICollisionDetectionManager.GetAssembly`