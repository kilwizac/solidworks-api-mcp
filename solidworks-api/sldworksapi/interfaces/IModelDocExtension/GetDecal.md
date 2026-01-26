---
type: method
interface: IModelDocExtension
member: GetDecal
returns: Decal
parameters:
  -
    name: ID
    type: System.Int32
    description: Decal ID (see Remarks )
  -
    name: Configuration
    type: System.String
    description: Name of the configuration where to get the decal
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
  - getdecal
  - imodeldocextension
  - model
  - doc
  - extension
  - id
  - int32
  - configuration
  - string
  - mask
  - types
  - each
  - vba
---

# IModelDocExtension.GetDecal

Gets the specified decal in this model.

## Signature

```csharp
Decal GetDecal( 
   System.Int32
ID
,
   System.String
Configuration
)
```
## Parameters

- `ID` (System.Int32): Decal ID (see Remarks )
- `Configuration` (System.String): Name of the configuration where to get the decal

## Return Value

Decal

## Remarks

The decal ID is the index number of the decal in the model. Call
IModelDocExtension::GetDecalsCount
to find out the number of decals in the model and their IDs.

## Examples

- Get Mask Types of Each Decal (VBA) (Get_Mask_Types_of_Each_Decal_Example_VB.htm)

## See Also

- `IDecal`
- `IModelDocExtension.AddDecal`
- `IModelDocExtension.CreateDecal`
- `IModelDocExtension.DeleteAllDecals`
- `IModelDocExtension.DeleteDecal`
- `IModelDocExtension.GetDecals`
- `IModelDocExtension.GetDecalsCount`
- `IModelDocExtension.HideDecal`
- `IModelDocExtension.IGetDecals`
- `IModelDocExtension.MoveDecal`
- `IModelDocExtension.ReverseDecalsOrder`