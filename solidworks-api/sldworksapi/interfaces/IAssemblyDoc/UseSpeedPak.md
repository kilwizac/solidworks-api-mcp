---
type: method
interface: IAssemblyDoc
member: UseSpeedPak
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.CreateSpeedPak
  - IAssemblyDoc.SetSpeedPakConfigurations
  - IAssemblyDoc.UpdateSpeedPak
  - IComponent2.IsSpeedPak
  - IDocumentSpecification.UseSpeedPak
keywords:
  - speedpak
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - usespeedpak
  - assembly
  - doc
  - use
  - speed
  - pak
  - boolean
  - create
  - subassemblies
  - vb
  - net
  - vba
---

# IAssemblyDoc.UseSpeedPak

Sets whether to switch the selected subassemblies whose active configuration is the parent configuration of a SpeedPak configuration to the SpeedPak configuration.

## Signature

```csharp
System.Boolean UseSpeedPak()
```
## Parameters

None.

## Return Value

True if the selected subassemblies whose active configuration is the parent configuration of the SpeedPak configuration switch to the SpeedPak configuration, false if not (see Remarks )

## Remarks

This method is only valid if the selected subassemblies are
set to the parent configuration of the SpeedPak configuration
.

## Examples

- Create SpeedPak for Subassemblies (C#) (Create_SpeedPak_for_Subassemblies_Example_CSharp.htm)
- Create SpeedPak for Subassemblies (VB.NET) (Create_SpeedPak_for_Subassemblies_Example_VBNET.htm)
- Create SpeedPak for Subassemblies (VBA) (Create_SpeedPak_for_Subassemblies_Example_VB.htm)

## See Also

- `IAssemblyDoc.CreateSpeedPak`
- `IAssemblyDoc.SetSpeedPakConfigurations`
- `IAssemblyDoc.UpdateSpeedPak`
- `IComponent2.IsSpeedPak`
- `IDocumentSpecification.UseSpeedPak`