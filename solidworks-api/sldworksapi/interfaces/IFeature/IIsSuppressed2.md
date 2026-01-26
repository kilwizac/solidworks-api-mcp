---
type: method
interface: IFeature
member: IIsSuppressed2
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined by swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations in this feature
  -
    name: Config_names
    type: System.String
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.ISetSuppression2
  - IFeature.IsSuppressed2
  - IFeature.SetSuppression2
  - IFeature.Visible
keywords:
  - suppress
  - features
  - iissuppressed2
  - ifeature
  - feature
  - suppressed2
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
---

# IFeature.IIsSuppressed2

Gets whether the feature in the specified configurations is suppressed.

## Signature

```csharp
System.Boolean IIsSuppressed2( 
   System.Int32
Config_opt
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined by swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations in this feature
- `Config_names` (System.String): Array of configuration names

## Return Value

Array of the suppression states for the feature in the specified configurations

## See Also

- `IFeature.ISetSuppression2`
- `IFeature.IsSuppressed2`
- `IFeature.SetSuppression2`
- `IFeature.Visible`