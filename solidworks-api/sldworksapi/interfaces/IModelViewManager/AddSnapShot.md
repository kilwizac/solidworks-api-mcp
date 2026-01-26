---
type: method
interface: IModelViewManager
member: AddSnapShot
returns: SnapShot
parameters:
  -
    name: SnapShotName
    type: System.String
    description: Name of the snapshot - or - "" to give a default name of "Snap n " - or - "?" to open the Name Snapshot dialog box
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.DeleteSnapShot
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
  - addsnapshot
  - view
  - manager
  - add
  - snap
  - shot
  - name
  - string
  - open
  - assembly
  - large
  - design
  - review
  - mode
  - vba
  - vb
  - net
---

# IModelViewManager.AddSnapShot

Creates a snapshot with the specified name of an assembly.

## Signature

```csharp
SnapShot AddSnapShot( 
   System.String
SnapShotName
)
```
## Parameters

- `SnapShotName` (System.String): Name of the snapshot - or - "" to give a default name of "Snap n " - or - "?" to open the Name Snapshot dialog box

## Return Value

ISnapShot

## Remarks

This method is valid only for assemblies.

## Examples

- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)

## See Also

- `IModelViewManager.DeleteSnapShot`
- `IModelViewManager.GetSnapShot`
- `IModelViewManager.GetSnapShots`