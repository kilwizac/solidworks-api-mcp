---
type: property
interface: ILocalLinearPatternFeatureData
member: ForceUseSeedConfiguration
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - forceuseseedconfiguration
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - force
  - use
  - seed
  - configuration
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.ForceUseSeedConfiguration

Gets or sets whether to synchronize the configuration of pattern components with the configuration of the seed component in this local linear pattern feature.

## Signature

```csharp
System.Boolean ForceUseSeedConfiguration {get; set;}
```
## Parameters

None.

## Return Value

True to use the seed component configuration for all pattern components, false to not

## Remarks

If this property is set to true, the
Referenced configuration
section of the Component Properties dialog is disabled, and you cannot use
IComponent2::ReferencedConfiguration
to change the pattern instance configuration.