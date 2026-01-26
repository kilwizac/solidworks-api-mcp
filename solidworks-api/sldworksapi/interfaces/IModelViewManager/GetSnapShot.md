---
type: method
interface: IModelViewManager
member: GetSnapShot
returns: SnapShot
parameters:
  -
    name: SnapShotName
    type: System.String
    description: Name of snapshot to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.AddSnapShot
  - IModelViewManager.DeleteSnapShot
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
  - getsnapshot
  - view
  - manager
  - snap
  - shot
  - name
  - string
---

# IModelViewManager.GetSnapShot

Gets the specified snapshot of an assembly.

## Signature

```csharp
SnapShot GetSnapShot( 
   System.String
SnapShotName
)
```
## Parameters

- `SnapShotName` (System.String): Name of snapshot to get

## Return Value

ISnapShot

## Remarks

This method is valid only for assemblies.

## See Also

- `IModelViewManager.AddSnapShot`
- `IModelViewManager.DeleteSnapShot`
- `IModelViewManager.GetSnapShots`