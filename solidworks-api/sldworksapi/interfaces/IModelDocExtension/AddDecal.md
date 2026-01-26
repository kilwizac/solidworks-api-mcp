---
type: method
interface: IModelDocExtension
member: AddDecal
returns: System.Boolean
parameters:
  -
    name: PDecal
    type: Decal
    description: Decal
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
  - IModelDocExtension.CreateDecal
  - IModelDocExtension.DeleteAllDecals
  - IModelDocExtension.DeleteDecal
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
  - add
  - adddecal
  - imodeldocextension
  - model
  - doc
  - extension
  - id
  - int32
  - boolean
  - vba
  - vb
  - net
---

# IModelDocExtension.AddDecal

Adds a decal to the model.

## Signature

```csharp
System.Boolean AddDecal( 
   Decal
PDecal
,
   out System.Int32
DecalID
)
```
## Parameters

- `PDecal` (Decal): Decal
- `DecalID` (System.Int32): Decal ID

## Return Value

True if the decal was added to the model, false if not

## Examples

- Add Decal (VBA) (Add_Decal_Example_VB.htm)
- Add Decal (C#) (Add_Decal_Example_CSharp.htm)
- Add Decal (VB.NET) (Add_Decal_Example_VBNET.htm)

## See Also

- `IDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.DeleteDecal`
- `IModelDocExtension.GetDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.GetDecalsCount`
- `IModelDocExtension.HideDecal`
- `IModelDocExtension.IGetDecals`
- `IModelDocExtension.MoveDecal`
- `IModelDocExtension.ReverseDecalsOrder`