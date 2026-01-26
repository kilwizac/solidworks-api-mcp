---
type: method
interface: IComponent2
member: SetExcludeFromBOM2
returns: System.Int32
parameters:
  -
    name: Exclude
    type: System.Boolean
    description: True to exclude it, false to not
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of the names of configurations for which to set Exclude; null or Nothing if Config_opt is set to swInConfigurationOpts.swAllConfiguration or swInConfigurationOpts.swThisConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties6
  - IComponent2.GetExcludeFromBOM2
keywords:
  - components
  - see
  - also
  - icomponent2
  - bill
  - materials
  - setexcludefrombom2
  - component2
  - exclude
  - bom2
  - boolean
  - config
  - opt
  - int32
  - names
  - object
---

# IComponent2.SetExcludeFromBOM2

Sets whether to exclude this component from the bills of materials (BOMs) in the specified configurations.

## Signature

```csharp
System.Int32 SetExcludeFromBOM2( 
   System.Boolean
Exclude
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Exclude` (System.Boolean): True to exclude it, false to not
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the names of configurations for which to set Exclude; null or Nothing if Config_opt is set to swInConfigurationOpts.swAllConfiguration or swInConfigurationOpts.swThisConfiguration

## Return Value

Return code as defined in swExcludeFromBOMError_e

## Remarks

This method is valid only for
table-based bills of materials
; it does not work for Microsoft Excel-based bills of materials.
If you set Exclude to true, the name of the component changes in the FeatureManager design tree of the specified configuration;
(Excluded from BOM)
is appended. To update the FeatureManager design tree, call
IFeatureManager::UpdateFeatureTree
.

## See Also

- `IAssemblyDoc.CompConfigProperties6`
- `IComponent2.GetExcludeFromBOM2`