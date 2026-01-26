---
type: method
interface: IModelDocExtension
member: ChangeSketchPlane
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configurations as defined by swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
  - ui
related:
  - IModelDocExtension.IChangeSketchPlane
keywords:
  - sketch
  - see
  - also
  - isketch
  - planes
  - irefplane
  - sketches
  - changesketchplane
  - imodeldocextension
  - model
  - doc
  - extension
  - change
  - plane
  - config
  - opt
  - int32
  - names
  - object
  - boolean
  - vba
  - vb
  - net
---

# IModelDocExtension.ChangeSketchPlane

Changes the plane used by a sketch by moving the selected sketch to the selected plane in the specified configurations.

## Signature

```csharp
System.Boolean ChangeSketchPlane( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configurations as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

True if the operation succeeds, false if it fails

## Remarks

Every sketch is associated with a plane (for example, a reference plane or a planar face). You must preselect the sketch and the new plane or face before using this method.

## Examples

- Change Plane of Sketch (VBA) (Change_Sketch_Plane_Example_VB.htm)
- Change Plane of Sketch (VB.NET) (Change_Sketch_of_Plane_Example_VBNET.htm)
- Change Plane of Sketch (C#) (Change_Sketch_of_Plane_Example_CSharp.htm)

## See Also

- `IModelDocExtension.IChangeSketchPlane`