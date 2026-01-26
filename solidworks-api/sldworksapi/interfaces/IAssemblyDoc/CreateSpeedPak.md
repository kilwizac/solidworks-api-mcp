---
type: method
interface: IAssemblyDoc
member: CreateSpeedPak
returns: System.Boolean
parameters:
  -
    name: SpeedPakType
    type: System.Int32
    description: 1 = Mated 2 = Graphics
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.SetSpeedPakConfigurations
  - IAssemblyDoc.SetSpeedPakToParent
  - IAssemblyDoc.UpdateSpeedPak
  - IAssemblyDoc.UseSpeedPak
  - IComponent2.IsSpeedPak
  - IConfigurationManager.AddSpeedPak2
keywords:
  - speedpak
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - createspeedpak
  - assembly
  - doc
  - create
  - speed
  - pak
  - type
  - int32
  - boolean
  - subassemblies
  - vb
  - net
  - vba
---

# IAssemblyDoc.CreateSpeedPak

Creates the specified type of SpeedPak for the active configurations of the selected subassemblies in this assembly.

## Signature

```csharp
System.Boolean CreateSpeedPak( 
   System.Int32
SpeedPakType
)
```
## Parameters

- `SpeedPakType` (System.Int32): 1 = Mated 2 = Graphics

## Return Value

True if SpeedPak is created for the active configurations of the selected subassemblies in this assembly, false if not

## Remarks

If a selected subassembly already has SpeedPak, then calling this method again does not create another SpeedPak, regardless if the type of SpeedPak to create is different than the existing SpeedPak.

## Examples

- Create SpeedPak for Subassemblies (C#) (Create_SpeedPak_for_Subassemblies_Example_CSharp.htm)
- Create SpeedPak for Subassemblies (VB.NET) (Create_SpeedPak_for_Subassemblies_Example_VBNET.htm)
- Create SpeedPak for Subassemblies (VBA) (Create_SpeedPak_for_Subassemblies_Example_VB.htm)

## See Also

- `IAssemblyDoc.SetSpeedPakConfigurations`
- `IAssemblyDoc.SetSpeedPakToParent`
- `IAssemblyDoc.UpdateSpeedPak`
- `IAssemblyDoc.UseSpeedPak`
- `IComponent2.IsSpeedPak`
- `IConfigurationManager.AddSpeedPak2`