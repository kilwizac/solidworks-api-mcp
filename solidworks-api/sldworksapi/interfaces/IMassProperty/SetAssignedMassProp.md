---
type: method
interface: IMassProperty
member: SetAssignedMassProp
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
    name: Config_names
    type: System.Object
    description: Array of the configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.CenterOfMass
  - IMassProperty.IGetCenterOfMass
  - IMassProperty.ISetAssignedMassProp
  - IMassProperty.Mass
  - IMassProperty.UserAssigned
keywords:
  - setassignedmassprop
  - imassproperty
  - mass
  - assigned
  - prop
  - double
  - center
  - config
  - opt
  - int32
  - names
  - object
  - boolean
---

# IMassProperty.SetAssignedMassProp

Sets the mass and center of gravity for the specified configurations for this model being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetAssignedMassProp( 
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
   System.Object
Config_names
)
```
## Parameters

- `Mass` (System.Double): Value for mass
- `Center_x` (System.Double): x coordinate for center of gravity
- `Center_y` (System.Double): y coordinate for center of gravity
- `Center_z` (System.Double): z coordinate for center of gravity
- `Config_opt` (System.Int32): Configuration options as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the configuration names

## Return Value

True if the mass and center of gravity are set, false if not

## Remarks

If...
Then...
You are editing a subcomponent
you are setting the mass for this subcomponent and not for the top-level model.
You specify a value < 0 for Mass
mass is calculated; it is not user-defined.
Config_opt is set to swSpecifyConfiguration
Config_names is used.

## See Also

- `IMassProperty.CenterOfMass`
- `IMassProperty.IGetCenterOfMass`
- `IMassProperty.ISetAssignedMassProp`
- `IMassProperty.Mass`
- `IMassProperty.UserAssigned`