---
type: method
interface: IMassProperty
member: ISetOverrideMomentsOfInertiaValue
returns: System.Boolean
parameters:
  -
    name: ReferenceFrame
    type: System.Int32
    description: Frame of reference as defined in swMomentsOfInertiaReferenceFrame_e
  -
    name: CoordinateSystemName
    type: System.String
    description: Name of coordinate system; valid only if ReferenceFrame = swMomentsOfInertiaReferenceFrame_e.swMomentsOfInertiaReferenceFrame_UserCoordinateSystem
  -
    name: Value
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ] VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Config_option
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_numbers
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.OverrideMomentsOfInertia
  - IMassProperty.SetOverrideMomentsOfInertiaValue
keywords:
  - isetoverridemomentsofinertiavalue
  - imassproperty
  - mass
  - override
  - moments
  - inertia
  - value
  - reference
  - frame
  - int32
  - coordinate
  - name
  - string
  - double
  - config
  - option
  - numbers
  - names
  - boolean
---

# IMassProperty.ISetOverrideMomentsOfInertiaValue

Overrides the moments of inertia of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetOverrideMomentsOfInertiaValue( 
   System.Int32
ReferenceFrame
,
   System.String
CoordinateSystemName
,
   ref System.Double
Value
,
   System.Int32
Config_option
,
   System.Int32
Config_numbers
,
   ref System.String
Config_names
)
```
## Parameters

- `ReferenceFrame` (System.Int32): Frame of reference as defined in swMomentsOfInertiaReferenceFrame_e
- `CoordinateSystemName` (System.String): Name of coordinate system; valid only if ReferenceFrame = swMomentsOfInertiaReferenceFrame_e.swMomentsOfInertiaReferenceFrame_UserCoordinateSystem
- `Value` (System.Double): in-process, unmanaged C++: Pointer to an array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ] VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_numbers` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the moments of inertia are overridden, false if not

## See Also

- `IMassProperty.OverrideMomentsOfInertia`
- `IMassProperty.SetOverrideMomentsOfInertiaValue`