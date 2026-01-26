---
type: method
interface: IModelDocExtension
member: ReverseDecalsOrder
returns: System.Boolean
parameters:
  -
    name: DecalID
    type: System.Int32
    description: Decal ID
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
  - IModelDocExtension.IGetDecals
  - IModelDocExtension.MoveDecal
keywords:
  - reversedecalsorder
  - imodeldocextension
  - model
  - doc
  - extension
  - reverse
  - decals
  - order
  - decal
  - id
  - int32
  - boolean
  - vba
---

# IModelDocExtension.ReverseDecalsOrder

Reverses the order of the decals on the model.

## Signature

```csharp
System.Boolean ReverseDecalsOrder( 
   System.Int32
DecalID
)
```
## Parameters

- `DecalID` (System.Int32): Decal ID

## Return Value

True if the order of the decals is reversed, false if not

## Examples

- Reverse Order of Decals (VBA) (Reverse_Order_of_Decals_Example_VB.htm)

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
- `IModelDocExtension.IGetDecals`
- `IModelDocExtension.MoveDecal`