---
type: method
interface: IModelViewManager
member: DeleteSnapShot
returns: System.Boolean
parameters:
  -
    name: SnapShotName
    type: System.String
    description: Name of snapshot to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.AddSnapShot
  - IModelViewManager.GetSnapShot
  - IModelViewManager.GetSnapShots
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - snapshots
  - deletesnapshot
  - view
  - manager
  - delete
  - snap
  - shot
  - name
  - string
  - boolean
---

# IModelViewManager.DeleteSnapShot

Deletes the specified snapshot from an assembly.

## Signature

```csharp
System.Boolean DeleteSnapShot( 
   System.String
SnapShotName
)
```
## Parameters

- `SnapShotName` (System.String): Name of snapshot to delete

## Return Value

True if successful, false if not

## Remarks

This method is valid only for assemblies.

## See Also

- `IModelViewManager.AddSnapShot`
- `IModelViewManager.GetSnapShot`
- `IModelViewManager.GetSnapShots`