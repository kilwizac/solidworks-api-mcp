---
type: method
interface: IConfiguration
member: IsDirty
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.NeedsRebuild
  - IConfigurationManager.ActiveConfiguration
  - IModelDoc2.GetSaveFlag
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - dirty
  - update
  - isdirty
  - boolean
  - are
  - assembly
  - configurations
  - loaded
  - vb
  - net
  - vba
---

# IConfiguration.IsDirty

Gets whether this configuration is dirty (i.e., needs to be updated).

## Signature

```csharp
System.Boolean IsDirty()
```
## Parameters

None.

## Return Value

True if the configuration is dirty, false if not

## Remarks

If the configuration is dirty, then you can update its date by:
Activating the configuration
.
Saving the document
while the configuration is active.

## Examples

- Are the Assembly Configurations Loaded (C#) (Are_the_Assembly_Configurations_Loaded_Example_CSharp.htm)
- Are the Assembly Configurations Loaded (VB.NET) (Are_the_Assembly_Configurations_Loaded_Example_VBNET.htm)
- Are the Assembly Configurations Loaded (VBA) (Are_the_Assembly_Configurations_Loaded_Example_VB.htm)

## See Also

- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.ActiveConfiguration`
- `IModelDoc2.GetSaveFlag`