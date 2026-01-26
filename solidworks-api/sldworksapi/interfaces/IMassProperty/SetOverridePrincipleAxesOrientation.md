---
type: method
interface: IMassProperty
member: SetOverridePrincipleAxesOrientation
returns: System.Boolean
parameters:
  -
    name: Axis
    type: System.Int32
    description: One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
  -
    name: Value
    type: System.Object
    description: An array of three doubles of the x, y, and z coordinates of Axis
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
  - IMassProperty.ISetOverridePrincipleAxesOrientation
  - IMassProperty.PrincipleAxesOfInertia
keywords:
  - setoverrideprincipleaxesorientation
  - imassproperty
  - mass
  - override
  - principle
  - axes
  - orientation
  - axis
  - int32
  - value
  - object
  - config
  - option
  - names
  - boolean
---

# IMassProperty.SetOverridePrincipleAxesOrientation

Overrides the orientation of the specified principal axis of inertia for the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetOverridePrincipleAxesOrientation( 
   System.Int32
Axis
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

- `Axis` (System.Int32): One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
- `Value` (System.Object): An array of three doubles of the x, y, and z coordinates of Axis
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if orientation of principal axis is overridden, false if not

## See Also

- `IMassProperty.ISetOverridePrincipleAxesOrientation`
- `IMassProperty.PrincipleAxesOfInertia`