---
type: method
interface: IDimension
member: ISetSystemValue3
returns: System.Int32
parameters:
  -
    name: NewValue
    type: System.Double
    description: Dimension value in meters
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configuration in which to set this value as defined in swSetValueInConfiguration_e (see Remarks )
  -
    name: Config_count
    type: System.Int32
    description: Names of the configurations (see Remarks )
  -
    name: Config_names
    type: System.String
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
  - IDimension.GetValue3
  - IDimension.IGetUserValueIn2
  - IDimension.ISetUserValueIn2
  - IDimension.ISetValue3
  - IDimension.SetSystemValue3
  - IDimension.SetUserValueIn2
  - IDimension.SetValue3
keywords:
  - isetsystemvalue3
  - idimension
  - dimension
  - value3
  - new
  - value
  - double
  - which
  - configurations
  - int32
  - config
  - count
  - names
  - string
---

# IDimension.ISetSystemValue3

Sets the value of this dimension in system units (meters) in the specified configuration.

## Signature

```csharp
System.Int32 ISetSystemValue3( 
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

- `NewValue` (System.Double): Dimension value in meters
- `WhichConfigurations` (System.Int32): Configuration in which to set this value as defined in swSetValueInConfiguration_e (see Remarks )
- `Config_count` (System.Int32): Names of the configurations (see Remarks )
- `Config_names` (System.String): Names of the configurations (see Remarks )

## Return Value

Success indicator value as defined in swSetValueReturnStatus_e

## Remarks

The WhichConfigurations argument is equivalent to the
Change Parameter
dialog in the SOLIDWORKS Design user interface, which gives the user the option of having the value set in all configurations or the current configuration. If there is one configuration in the part, SOLIDWORKS ignores this argument.
The Config_count and Config_names arguments are only used if WhichConfigurations is set to swSetValue_InSpecificConfigurations.
Config_names can contain either a BSTR array or a single BSTR.
This method allows you to change the value of a read-only dimension. You can use
IDimension::ReadOnly
to determine if a dimension is read-only.

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.ISetUserValueIn2`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`