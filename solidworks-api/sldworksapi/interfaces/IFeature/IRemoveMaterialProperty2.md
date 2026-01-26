---
type: property
interface: IFeature
member: IRemoveMaterialProperty2
returns: System.Boolean
parameters:
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
    description: in-process, unmanaged C++: Pointer to an array of configuration names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetMaterialPropertyValues2
  - IFeature.IGetMaterialPropertyValues2
  - IFeature.RemoveMaterialProperty2
  - IFeature.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - features
  - iremovematerialproperty2
  - ifeature
  - feature
  - remove
  - property2
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
readonly: null
---

# IFeature.IRemoveMaterialProperty2

Removes material property values from this feature.

## Signature

```csharp
System.Boolean IRemoveMaterialProperty2( 
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

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if material property values are removed, false if not

## Remarks

This method is intended to be used on features that have a changed material property value; for example, color.

## See Also

- `IFeature.GetMaterialPropertyValues2`
- `IFeature.IGetMaterialPropertyValues2`
- `IFeature.RemoveMaterialProperty2`
- `IFeature.SetMaterialPropertyValues2`