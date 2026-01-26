---
type: method
interface: IModelDocExtension
member: IChangeSketchPlane
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configurations as defined by swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
  - ui
related:
  - IModelDocExtension.ChangeSketchPlane
keywords:
  - sketch
  - see
  - also
  - isketch
  - planes
  - irefplane
  - sketches
  - ichangesketchplane
  - imodeldocextension
  - model
  - doc
  - extension
  - change
  - plane
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
---

# IModelDocExtension.IChangeSketchPlane

Changes the plane used by a sketch by moving the selected sketch to the selected plane in the specified configurations.

## Signature

```csharp
System.Boolean IChangeSketchPlane( 
   System.Int32
Config_opt
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configurations as defined by swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): Array of configuration names

## Return Value

Unknown.

## See Also

- `IModelDocExtension.ChangeSketchPlane`