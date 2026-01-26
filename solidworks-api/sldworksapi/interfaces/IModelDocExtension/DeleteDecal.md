---
type: method
interface: IModelDocExtension
member: DeleteDecal
returns: System.Boolean
parameters:
  -
    name: DecalID
    type: System.Int32
    description: Decal ID
  -
    name: BReassignIdsAndInvalidate
    type: System.Boolean
    description: True if the decal IDs are reassigned and this decal ID is invalidated, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IDecal
  - IModelDocExtension.AddDecal
  - IModelDocExtension.CreateDecal
  - IModelDocExtension.DeleteAllDecals
  - IModelDocExtension.GetDecal
  - IModelDocExtension.GetDecals
  - IModelDocExtension.GetDecalsCount
  - IModelDocExtension.HideDecal
  - IModelDocExtension.IGetDecals
  - IModelDocExtension.MoveDecal
  - IModelDocExtension.ReverseDecalsOrder
keywords:
  - decal
  - see
  - also
  - idecal
  - delete
  - deletedecal
  - imodeldocextension
  - model
  - doc
  - extension
  - id
  - int32
  - reassign
  - ids
  - invalidate
  - boolean
  - vba
  - vb
  - net
---

# IModelDocExtension.DeleteDecal

Removes the specified decal from this model.

## Signature

```csharp
System.Boolean DeleteDecal( 
   System.Int32
DecalID
,
   System.Boolean
BReassignIdsAndInvalidate
)
```
## Parameters

- `DecalID` (System.Int32): Decal ID
- `BReassignIdsAndInvalidate` (System.Boolean): True if the decal IDs are reassigned and this decal ID is invalidated, false if not

## Return Value

True if the decal is removed from the model, false if not

## Remarks

By default, decal IDs are persistent, which means if three decals (IDs 1, 2, and 3) were applied to the model, and you removed decal ID 2, then the remaining decal IDs are 1 and 3. However, if you set BReassignIdsAndInvalidate to true, then decal ID 2 is invalidated and decal ID 3 becomes decal ID 2.

## Examples

- Delete Decal (VBA) (Delete_Decal_Example_VB.htm)
- Delete Decal (VB.NET) (Delete_Decal_Example_VBNET.htm)
- Delete Decal (C#) (Delete_Decal_Example_CSharp.htm)

## See Also

- `IDecal`
- `IModelDocExtension.AddDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.GetDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.GetDecalsCount`
- `IModelDocExtension.HideDecal`
- `IModelDocExtension.IGetDecals`
- `IModelDocExtension.MoveDecal`
- `IModelDocExtension.ReverseDecalsOrder`