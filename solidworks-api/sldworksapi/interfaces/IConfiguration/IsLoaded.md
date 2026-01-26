---
type: method
interface: IConfiguration
member: IsLoaded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - load
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - loaded
  - isloaded
  - boolean
  - are
  - assembly
  - vb
  - net
  - vba
---

# IConfiguration.IsLoaded

Gets whether a configuration is loaded.

## Signature

```csharp
System.Boolean IsLoaded()
```
## Parameters

None.

## Return Value

True if the configuration is loaded, false if not

## Remarks

When a configuration is activated, SOLIDWORKS loads it. For example, if a part or assembly document has three configurations named DC1, DC2, and DC3, and DC1 is the active configuration when you open the document, then this method will return true for DC1 and false for DC2 and DC3.
If you activate the configuration named DC2, then this method will return true for DC1 and DC2 because DC1 was previously loaded. If you activate the configuration named DC3, then this method will return true for DC1, DC2, and DC3 because DC1 and DC2 were previously loaded and DC3 is now loaded.

## Examples

- Are the Assembly Configurations Loaded (VB.NET) (Are_the_Assembly_Configurations_Loaded_Example_VBNET.htm)
- Are the Assembly Configurations Loaded (VBA) (Are_the_Assembly_Configurations_Loaded_Example_VB.htm)
- Are the Assembly Configurations Loaded (C#) (Are_the_Assembly_Configurations_Loaded_Example_CSharp.htm)