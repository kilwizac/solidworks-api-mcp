---
type: method
interface: IDimension
member: ISetValue3
returns: System.Int32
parameters:
  -
    name: NewValue
    type: System.Double
    description: Value for this dimension in the units of the owning document
  -
    name: WhichConfigurations
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of configurations in which to set this value as defined in swSetValueInConfiguration_e (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations for which to set dimension values (see Remarks )
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of the names of the configurations for which to set dimension values (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.SetSystemValue3
  - IDimension.SetUserValueIn2
  - IDimension.SetValue3
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - dimensions
  - dimension
  - idimension
  - configurations
  - isetvalue3
  - value3
  - new
  - value
  - double
  - which
  - int32
  - config
  - count
  - names
  - string
---

# IDimension.ISetValue3

Sets the values of the dimensions in the specified configurations.

## Signature

```csharp
System.Int32 ISetValue3( 
   System.Double
NewValue
,
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

- `NewValue` (System.Double): Value for this dimension in the units of the owning document
- `WhichConfigurations` (System.Int32): in-process, unmanaged C++: Pointer to an array of configurations in which to set this value as defined in swSetValueInConfiguration_e (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Config_count` (System.Int32): Number of configurations for which to set dimension values (see Remarks )
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of strings of the names of the configurations for which to set dimension values (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Error code as defined in swSetValueReturnStatus_e

## Remarks

The Config_count and Config_names arguments are only used if whichConfigurations is set to swSetValue_InSpecificConfigurations. Config_names can contain either a BSTR array or a single BSTR.

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`