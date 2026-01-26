---
type: method
interface: IFeature
member: ISetSuppression2
returns: System.Boolean
parameters:
  -
    name: SuppressionState
    type: System.Int32
    description: Suppression state as defined in swFeatureSuppressionAction_e
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: Array of configuration names of size Config_count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IIsSuppressed2
  - IFeature.IsSuppressed2
  - IFeature.SetSuppression2
  - IFeature.Visible
keywords:
  - suppress
  - features
  - isetsuppression2
  - ifeature
  - feature
  - suppression2
  - suppression
  - state
  - int32
  - config
  - opt
  - count
  - names
  - string
  - boolean
---

# IFeature.ISetSuppression2

Sets the suppression state of this feature.

## Signature

```csharp
System.Boolean ISetSuppression2( 
   System.Int32
SuppressionState
,
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

- `SuppressionState` (System.Int32): Suppression state as defined in swFeatureSuppressionAction_e
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): Array of configuration names of size Config_count

## Return Value

True if feature is suppressed, false if not

## See Also

- `IFeature.IIsSuppressed2`
- `IFeature.IsSuppressed2`
- `IFeature.SetSuppression2`
- `IFeature.Visible`