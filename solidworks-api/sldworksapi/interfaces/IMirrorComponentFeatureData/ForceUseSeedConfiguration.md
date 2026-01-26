---
type: property
interface: IMirrorComponentFeatureData
member: ForceUseSeedConfiguration
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - forceuseseedconfiguration
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - force
  - use
  - seed
  - configuration
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.ForceUseSeedConfiguration

Gets or sets whether to synchronize the configuration of mirror components with the configuration of the mirrored component in this mirror component feature.

## Signature

```csharp
System.Boolean ForceUseSeedConfiguration {get; set;}
```
## Parameters

None.

## Return Value

True to use the mirrored component configuration for all mirror components, false to not

## Remarks

If this property is set to true, the
Referenced configuration
section of the Component Properties dialog is disabled, and you cannot use
IComponent2::ReferencedConfiguration
to change the pattern instance configuration.