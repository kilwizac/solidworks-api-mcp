---
type: method
interface: IDimension
member: GetValue3
returns: System.Object
parameters:
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations in which to get this value as defined in swInConfigurationOpts_e (see Remarks )
  -
    name: Config_names
    type: System.Object
    description: Names of the configurations (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetSystemValue3
  - IDimension.GetUserValueIn
  - IDimension.IGetSystemValue3
  - IDimension.IGetUserValueIn2
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.ISetValue3
  - IDimension.SetSystemValue3
  - IDimension.SetUserValueIn2
  - IDimension.SetValue3
keywords:
  - dimension
  - see
  - also
  - idimension
  - configurations
  - getvalue3
  - value3
  - which
  - int32
  - config
  - names
  - object
  - values
  - all
  - vba
---

# IDimension.GetValue3

Gets the values of the dimensions in the specified configurations.

## Signature

```csharp
System.Object GetValue3( 
   System.Int32
WhichConfigurations
,
   System.Object
Config_names
)
```
## Parameters

- `WhichConfigurations` (System.Int32): Configurations in which to get this value as defined in swInConfigurationOpts_e (see Remarks )
- `Config_names` (System.Object): Names of the configurations (see Remarks )

## Return Value

Array of doubles of the dimensions for the specified configurations

## Remarks

The Config_names argument is only used if WhichConfigurations is set to swSpecifyConfiguration. Config_names can contain either a BSTR array or a single BSTR.

## Examples

- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`