---
type: method
interface: IModelDocExtension
member: MoveDecal
returns: System.Boolean
parameters:
  -
    name: DecalID
    type: System.Int32
    description: Decal ID
  -
    name: MoveUp
    type: System.Boolean
    description: True to move the decal up in the list of decals, false to move the decal down in the list of decals
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
  - IModelDocExtension.DeleteDecal
  - IModelDocExtension.GetDecal
  - IModelDocExtension.GetDecals
  - IModelDocExtension.GetDecalsCount
  - IModelDocExtension.HideDecal
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
keywords:
  - movedecal
  - imodeldocextension
  - model
  - doc
  - extension
  - move
  - decal
  - id
  - int32
  - up
  - boolean
---

# IModelDocExtension.MoveDecal

Moves the decal up or down in the list of decals applied to the model.

## Signature

```csharp
System.Boolean MoveDecal( 
   System.Int32
DecalID
,
   System.Boolean
MoveUp
)
```
## Parameters

- `DecalID` (System.Int32): Decal ID
- `MoveUp` (System.Boolean): True to move the decal up in the list of decals, false to move the decal down in the list of decals

## Return Value

True if the decal is moved up or down in the list of decals, false if not

## See Also

- `IDecal`
- `IModelDocExtension.AddDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.DeleteDecal`
- `IModelDocExtension.GetDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.GetDecalsCount`
- `IModelDocExtension.HideDecal`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`