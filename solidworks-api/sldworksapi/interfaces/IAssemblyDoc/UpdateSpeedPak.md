---
type: method
interface: IAssemblyDoc
member: UpdateSpeedPak
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
  - IAssemblyDoc.SetSpeedPakToParent
  - IAssemblyDoc.UseSpeedPak
  - IComponent2.IsSpeedPak
  - IConfiguration.UpdateSpeedPak
keywords:
  - speedpak
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - updatespeedpak
  - assembly
  - doc
  - update
  - speed
  - pak
  - boolean
---

# IAssemblyDoc.UpdateSpeedPak

Updates out-of-date SpeedPak configurations for the selected subassemblies.

## Signature

```csharp
System.Boolean UpdateSpeedPak()
```
## Parameters

None.

## Return Value

True if out-of-date SpeedPak configurations are updated for the selected subassemblies, false if not (see Remarks )

## Remarks

If no out-of-date SpeedPak configurations exist for the selected subassemblies, then this method returns false.

## See Also

- `IAssemblyDoc.CreateSpeedPak`
- `IAssemblyDoc.SetSpeedPakConfigurations`
- `IAssemblyDoc.SetSpeedPakToParent`
- `IAssemblyDoc.UseSpeedPak`
- `IComponent2.IsSpeedPak`
- `IConfiguration.UpdateSpeedPak`