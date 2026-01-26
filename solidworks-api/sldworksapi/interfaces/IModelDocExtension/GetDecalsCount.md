---
type: method
interface: IModelDocExtension
member: GetDecalsCount
returns: System.Int32
parameters: []
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
  - IModelDocExtension.HideDecal
  - IModelDocExtension.MoveDecal
  - IModelDocExtension.ReverseDecalsOrder
keywords:
  - decal
  - see
  - also
  - idecal
  - number
  - getdecalscount
  - imodeldocextension
  - model
  - doc
  - extension
  - decals
  - count
  - int32
  - mask
  - types
  - each
  - vba
---

# IModelDocExtension.GetDecalsCount

Gets the number of decals applied to this model.

## Signature

```csharp
System.Int32 GetDecalsCount()
```
## Parameters

None.

## Return Value

Number of decals applied to this model

## Remarks

Call this method before calling
IModelDocExtension::GetDecals
to get the size of the array for that method.

## Examples

- Get Mask Types of Each Decal (VBA) (Get_Mask_Types_of_Each_Decal_Example_VB.htm)

## See Also

- `IDecal`
- `IModelDocExtension.AddDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.DeleteDecal`
- `IModelDocExtension.GetDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.HideDecal`
- `IModelDocExtension.MoveDecal`
- `IModelDocExtension.ReverseDecalsOrder`