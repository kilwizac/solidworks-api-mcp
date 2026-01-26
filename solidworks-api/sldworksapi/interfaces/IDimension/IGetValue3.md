---
type: method
interface: IDimension
member: IGetValue3
returns: System.Double
parameters:
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations in which to get this value as defined in swInConfigurationOpts_e (see Remarks )
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations (see Remarks )
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the configurations of size Config_count (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetSystemValue3
  - IDimension.GetUserValueIn
  - IDimension.GetValue3
  - IDimension.IGetSystemValue3
  - IDimension.IGetUserValueIn2
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.ISetValue3
  - IDimension.SetSystemValue3
  - IDimension.SetValue3
keywords:
  - igetvalue3
  - idimension
  - dimension
  - value3
  - which
  - configurations
  - int32
  - config
  - count
  - names
  - string
  - double
---

# IDimension.IGetValue3

Gets the values of the dimensions in the specified configurations.

## Signature

```csharp
System.Double IGetValue3( 
   System.Int32
WhichConfigurations
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `WhichConfigurations` (System.Int32): Configurations in which to get this value as defined in swInConfigurationOpts_e (see Remarks )
- `Config_count` (System.Int32): Number of configurations (see Remarks )
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the configurations of size Config_count (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of values of the dimensions for the specified configurations of size Config_count (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The Config_count and Config_names arguments are only used if WhichConfigurations is set to swSpecifyConfiguration.

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetValue3`