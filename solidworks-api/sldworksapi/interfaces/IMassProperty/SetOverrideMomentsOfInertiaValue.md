---
type: property
interface: IMassProperty
member: SetOverrideMomentsOfInertiaValue
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
    type: System.Object
    description: Array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ]
  -
    name: Config_option
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.ISetOverrideMomentsOfInertiaValue
  - IMassProperty.OverrideMomentsOfInertia
keywords:
  - setoverridemomentsofinertiavalue
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
  - object
  - config
  - option
  - names
  - boolean
  - properties
  - vba
  - vb
  - net
readonly: null
---

# IMassProperty.SetOverrideMomentsOfInertiaValue

Overrides the moments of inertia of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetOverrideMomentsOfInertiaValue( 
   System.Int32
ReferenceFrame
,
   System.String
CoordinateSystemName
,
   System.Object
Value
,
   System.Int32
Config_option
,
   System.Object
Config_names
)
```
## Parameters

- `ReferenceFrame` (System.Int32): Frame of reference as defined in swMomentsOfInertiaReferenceFrame_e
- `CoordinateSystemName` (System.String): Name of coordinate system; valid only if ReferenceFrame = swMomentsOfInertiaReferenceFrame_e.swMomentsOfInertiaReferenceFrame_UserCoordinateSystem
- `Value` (System.Object): Array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ]
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if the moments of inertia are overridden, false if not

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)

## See Also

- `IMassProperty.ISetOverrideMomentsOfInertiaValue`
- `IMassProperty.OverrideMomentsOfInertia`