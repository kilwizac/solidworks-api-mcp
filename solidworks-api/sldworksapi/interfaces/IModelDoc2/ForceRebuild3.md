---
type: method
interface: IModelDoc2
member: ForceRebuild3
returns: System.Boolean
parameters:
  -
    name: TopOnly
    type: System.Boolean
    description: True rebuilds the top-level assembly only; false rebuilds the top-level assembly and all subassemblies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfiguration.AddRebuildSaveMark
  - IConfiguration.NeedsRebuild
  - IModelDoc2.EditRebuild3
  - IModelDoc2.Rebuild
  - IModelDoc2.ShowFeatureErrorDialog
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.NeedsRebuild2
keywords:
  - rebuild
  - force
  - configuration
  - see
  - also
  - iconfiguration
  - configurations
  - forcerebuild3
  - imodeldoc2
  - model
  - doc2
  - rebuild3
  - top
  - only
  - boolean
  - vba
  - iterate
  - through
  - all
  - dimensions
  - mid
  - tolerance
  - use
  - safe
  - entity
  - sensor
  - vb
  - net
---

# IModelDoc2.ForceRebuild3

Forces a rebuild of all features in the active configuration in the model.

## Signature

```csharp
System.Boolean ForceRebuild3( 
   System.Boolean
TopOnly
)
```
## Parameters

- `TopOnly` (System.Boolean): True rebuilds the top-level assembly only; false rebuilds the top-level assembly and all subassemblies

## Return Value

True if all features in the active configuration at the specified assembly level in the model are rebuilt, false if not

## Examples

- Force Rebuild (VBA) (Force_Rebuild_Example_VB.htm)
- Iterate Through All Configurations (VBA) (Iterate_Through_All_Configurations_Example_VB.htm)
- Rebuild All Configurations (VBA) (Rebuild_All_Configurations_Example_VB.htm)
- Rebuild Model (VBA) (Rebuild_Example_VB.htm)
- Set Dimensions to Mid-Tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Use Safe Entity (VBA) (Use_Safe_Entity_Example_VB.htm)
- Get and Set Sensor (C#) (Get_and_Set_Sensor_Example_CSharp.htm)
- Get and Set Sensor (VB.NET) (Get_and_Set_Sensor_Example_VBNET.htm)
- Get and Set Sensor (VBA) (Get_and_Set_Sensor_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IModelDoc2.EditRebuild3`
- `IModelDoc2.Rebuild`
- `IModelDoc2.ShowFeatureErrorDialog`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.NeedsRebuild2`