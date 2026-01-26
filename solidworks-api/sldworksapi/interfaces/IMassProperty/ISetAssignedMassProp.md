---
type: method
interface: IMassProperty
member: ISetAssignedMassProp
returns: System.Boolean
parameters:
  -
    name: Mass
    type: System.Double
    description: Value for mass
  -
    name: Center_x
    type: System.Double
    description: x coordinate for center of gravity
  -
    name: Center_y
    type: System.Double
    description: y coordinate for center of gravity
  -
    name: Center_z
    type: System.Double
    description: z coordinate for center of gravity
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined in swInConfigurationOpts_e
  -
    name: ConfigNum
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size ConfigNum VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.CenterOfMass
  - IMassProperty.IGetCenterOfMass
  - IMassProperty.Mass
  - IMassProperty.SetAssignedMassProp
  - IMassProperty.UserAssigned
keywords:
  - isetassignedmassprop
  - imassproperty
  - mass
  - assigned
  - prop
  - double
  - center
  - config
  - opt
  - int32
  - num
  - names
  - string
  - boolean
---

# IMassProperty.ISetAssignedMassProp

Sets the mass and center of gravity for the specified configurations for this model being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetAssignedMassProp( 
   System.Double
Mass
,
   System.Double
Center_x
,
   System.Double
Center_y
,
   System.Double
Center_z
,
   System.Int32
Config_opt
,
   System.Int32
ConfigNum
,
   ref System.String
Config_names
)
```
## Parameters

- `Mass` (System.Double): Value for mass
- `Center_x` (System.Double): x coordinate for center of gravity
- `Center_y` (System.Double): y coordinate for center of gravity
- `Center_z` (System.Double): z coordinate for center of gravity
- `Config_opt` (System.Int32): Configuration options as defined in swInConfigurationOpts_e
- `ConfigNum` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size ConfigNum VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the mass and center of gravity are set, false if not

## Remarks

If...
Then...
You are editing a subcomponent
you are setting the mass for this subcomponent and not for the top-level model.
You specify a value < 0 for mass
mass is calculated; it is not user-defined.
Config_opt is set to swSpecifyConfiguration
Config_names is used.

## See Also

- `IMassProperty.CenterOfMass`
- `IMassProperty.IGetCenterOfMass`
- `IMassProperty.Mass`
- `IMassProperty.SetAssignedMassProp`
- `IMassProperty.UserAssigned`