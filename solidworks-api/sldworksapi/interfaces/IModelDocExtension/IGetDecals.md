---
type: method
interface: IModelDocExtension
member: IGetDecals
returns: Decal
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of decals
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
  - igetdecals
  - imodeldocextension
  - model
  - doc
  - extension
  - decals
  - count
  - int32
---

# IModelDocExtension.IGetDecals

Gets the decals applied to the model.

## Signature

```csharp
Decal IGetDecals( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of decals

## Return Value

in-process, unmanaged C++: Pointer to an array of decals VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IModelDocExtension::GetDecalsCount
to get the value of Count.

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