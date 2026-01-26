---
type: method
interface: IModelDocExtension
member: HideDecal
returns: System.Boolean
parameters:
  -
    name: DecalID
    type: System.Int32
    description: Decal ID
  -
    name: Hide
    type: System.Boolean
    description: True to hide the decal, false to show it
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
  - IModelDocExtension.IGetDecals
  - IModelDocExtension.MoveDecal
  - IModelDocExtension.ReverseDecalsOrder
keywords:
  - decal
  - see
  - also
  - idecal
  - hide
  - show
  - hidedecal
  - imodeldocextension
  - model
  - doc
  - extension
  - id
  - int32
  - boolean
---

# IModelDocExtension.HideDecal

Hides or shows the specified decal applied to this model.

## Signature

```csharp
System.Boolean HideDecal( 
   System.Int32
DecalID
,
   System.Boolean
Hide
)
```
## Parameters

- `DecalID` (System.Int32): Decal ID
- `Hide` (System.Boolean): True to hide the decal, false to show it

## Return Value

True if the decal is hidden or shown, false if not

## See Also

- `IDecal`
- `IModelDocExtension.AddDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.DeleteDecal`
- `IModelDocExtension.GetDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.GetDecalsCount`
- `IModelDocExtension.IGetDecals`
- `IModelDocExtension.MoveDecal`
- `IModelDocExtension.ReverseDecalsOrder`