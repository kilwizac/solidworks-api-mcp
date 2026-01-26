---
type: method
interface: IDimension
member: IGetSystemValue3
returns: System.Double
parameters:
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations to get this value from as defined by swInConfigurationOpts_e (see Remarks )
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations (see Remarks )
  -
    name: Config_names
    type: System.String
    description: Names of the configuration (see Remarks )
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
  - IDimension.IGetUserValueIn2
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.ISetValue3
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
  - values
  - igetsystemvalue3
  - value3
  - which
  - int32
  - config
  - count
  - names
  - string
  - double
---

# IDimension.IGetSystemValue3

Gets the value of the current dimension in system units in the named configuration.

## Signature

```csharp
System.Double IGetSystemValue3( 
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

- `WhichConfigurations` (System.Int32): Configurations to get this value from as defined by swInConfigurationOpts_e (see Remarks )
- `Config_count` (System.Int32): Number of configurations (see Remarks )
- `Config_names` (System.String): Names of the configuration (see Remarks )

## Return Value

Value in system units

## Remarks

The Config_count and Config_names arguments are only used if WhichConfigurations is set to swSpecifyConfiguration.

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`