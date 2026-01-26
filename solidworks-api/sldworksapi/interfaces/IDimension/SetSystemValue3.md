---
type: method
interface: IDimension
member: SetSystemValue3
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
  - IDimension.GetValue3
  - IDimension.IGetSystemValue3
  - IDimension.IGetUserValueIn2
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.ISetValue3
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
  - setsystemvalue3
  - value3
  - new
  - value
  - double
  - which
  - int32
  - config
  - names
  - object
  - change
  - gear
  - mate
  - vba
  - modify
  - plane
  - changing
  - mid
  - tolerance
  - recalculate
  - bounding
  - box
  - vb
  - net
---

# IDimension.SetSystemValue3

Sets the value of this dimension in system units (meters) in the specified configuration.

## Signature

```csharp
System.Int32 SetSystemValue3( 
   System.Double
NewValue
,
   System.Int32
WhichConfigurations
,
   System.Object
Config_names
)
```
## Parameters

- `NewValue` (System.Double): Dimension value in meters
- `WhichConfigurations` (System.Int32): Configuration in which to set this value as defined in swSetValueInConfiguration_e (see Remarks )
- `Config_names` (System.Object): Names of the configurations (see Remarks )

## Return Value

Success indicator value as defined in swSetValueReturnStatus_e

## Remarks

The WhichConfigurations argument is equivalent to the
Change Parameter
dialog in the SOLIDWORKS Design user interface, which gives the user the option of having the value set in all configurations or the current configuration. If there is one configuration in the part, SOLIDWORKS ignores this argument.
Config_names argument is only used if WhichConfigurations is set to swSetValue_InSpecificConfigurations and can contain either a BSTR array or a single BSTR.
This method allows you to change the value of a read-only dimension. You can use
IDimension::ReadOnly
to determine if a dimension is read-only.

## Examples

- Change Dimensions of Gear Mate (VBA) (Change_Dimensions_of_Gear_Mate_Example_VB.htm)
- Modify Plane By Changing System Value (VBA) (Modify_Plane_by_Changing_System_Value_Example_VB.htm)
- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Recalculate Bounding Box (C#) (Recalculate_Bounding_Box_Example_CSharp.htm)
- Recalculate Bounding Box (VB.NET) (Recalculate_Bounding_Box_Example_VBNET.htm)
- Recalculate Bounding Box (VBA) (Recalculate_Bounding_Box_Example_VB.htm)

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`