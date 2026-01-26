---
type: method
interface: IFeature
member: SetSuppression2
returns: System.Boolean
parameters:
  -
    name: SuppressionState
    type: System.Int32
    description: Suppression state as defined in swFeatureSuppressionAction_e
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e (see Remarks )
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names; valid only if Config_opt set to swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IIsSuppressed2
  - IFeature.ISetSuppression2
  - IFeature.IsSuppressed2
  - IFeature.Visible
keywords:
  - suppress
  - features
  - setsuppression2
  - ifeature
  - feature
  - suppression2
  - suppression
  - state
  - int32
  - config
  - opt
  - names
  - object
  - boolean
---

# IFeature.SetSuppression2

Sets the suppression state of this feature.

## Signature

```csharp
System.Boolean SetSuppression2( 
   System.Int32
SuppressionState
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `SuppressionState` (System.Int32): Suppression state as defined in swFeatureSuppressionAction_e
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e (see Remarks )
- `Config_names` (System.Object): Array of configuration names; valid only if Config_opt set to swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if successful, false if not

## Remarks

This method requires that you specify Config_opt.
SOLIDWORKS does not allow suppressing features while a PropertyManager page is open.

## See Also

- `IFeature.IIsSuppressed2`
- `IFeature.ISetSuppression2`
- `IFeature.IsSuppressed2`
- `IFeature.Visible`