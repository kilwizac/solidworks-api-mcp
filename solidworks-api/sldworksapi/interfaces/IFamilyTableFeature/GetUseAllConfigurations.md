---
type: method
interface: IFamilyTableFeature
member: GetUseAllConfigurations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - getuseallconfigurations
  - ifamilytablefeature
  - family
  - table
  - feature
  - use
  - all
  - configurations
  - boolean
---

# IFamilyTableFeature.GetUseAllConfigurations

Gets whether all configurations are used in this family table feature.

## Signature

```csharp
System.Boolean GetUseAllConfigurations()
```
## Parameters

None.

## Return Value

True if all configurations are used, false if only some are used.

## Remarks

Use
IFamilyTableFeature::GetConfigurations
to obtain the configurations used in this feature.