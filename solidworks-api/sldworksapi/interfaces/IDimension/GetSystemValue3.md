---
type: method
interface: IDimension
member: GetSystemValue3
returns: System.Object
parameters:
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations to get this value from as defined by swInConfigurationOpts_e (see Remarks )
  -
    name: Config_names
    type: System.Object
    description: Names of the configuration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetUserValueIn
  - IDimension.GetValue3
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
  - configuration
  - see
  - also
  - iconfiguration
  - dimensions
  - dimension
  - idimension
  - configurations
  - values
  - getsystemvalue3
  - value3
  - which
  - int32
  - config
  - names
  - object
  - change
  - gear
  - mate
  - vba
  - edit
  - distance
  - all
  - definition
  - modify
  - plane
  - changing
  - value
  - depth
  - extrusion
  - vb
  - net
---

# IDimension.GetSystemValue3

Gets the value of the current dimension in system units in the named configuration.

## Signature

```csharp
System.Object GetSystemValue3( 
   System.Int32
WhichConfigurations
,
   System.Object
Config_names
)
```
## Parameters

- `WhichConfigurations` (System.Int32): Configurations to get this value from as defined by swInConfigurationOpts_e (see Remarks )
- `Config_names` (System.Object): Names of the configuration (see Remarks )

## Return Value

Value in system units

## Remarks

The Config_names argument is only used if whichConfigurations is set to swSpecifyConfiguration.
In OLE, Config_names can be either a BSTR array or a single BSTR.

## Examples

- Change Dimensions of Gear Mate (VBA) (Change_Dimensions_of_Gear_Mate_Example_VB.htm)
- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Get Dimension of Distance Mate (VBA) (Get_Dimension_of_Distance_Mate_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Get Mate Definition (VBA) (Get_Mate_Definition_Example_VB.htm)
- Modify Plane By Changing System Value (VBA) (Modify_Plane_by_Changing_System_Value_Example_VB.htm)
- Get Depth of Extrusion (VBA) (Get_Depth_of_Extrusion_Example_VB.htm)
- Get Depth of Extrusion (VB.NET) (Get_Depth_of_Extrusion_Example_VBNET.htm)
- Get Depth of Extrusion (C#) (Get_Depth_of_Extrusion_Example_CSharp.htm)

## See Also

- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`