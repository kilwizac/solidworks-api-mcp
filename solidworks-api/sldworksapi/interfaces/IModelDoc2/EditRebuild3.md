---
type: method
interface: IModelDoc2
member: EditRebuild3
returns: System.Boolean
parameters: []
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
  - IConfigurationManager.AddRebuildSaveMark
  - IModelDoc2.ForceRebuild3
  - IModelDoc2.Rebuild
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.NeedsRebuild2
keywords:
  - rebuild
  - models
  - configuration
  - see
  - also
  - iconfiguration
  - configurations
  - editrebuild3
  - imodeldoc2
  - model
  - doc2
  - edit
  - rebuild3
  - boolean
  - calculate
  - closest
  - distance
  - between
  - faces
  - vba
  - change
  - dimensions
  - gear
  - mate
  - find
  - outside
  - edges
  - face
  - intersecting
  - edge
  - insert
  - dxf
  - file
  - add
  - dimension
  - traverse
  - bodies
  - modify
  - surface
  - cut
  - feature
  - vb
  - net
---

# IModelDoc2.EditRebuild3

Rebuilds only those features that need to be rebuilt in the active configuration in the model.

## Signature

```csharp
System.Boolean EditRebuild3()
```
## Parameters

None.

## Return Value

True if only those features that need to be rebuilt are rebuilt in the active configuration in the model, false if not

## Remarks

This method only works in-context of the active document.

## Examples

- Calculate Closest Distance Between Faces (VBA) (Calculate_Closest_Distance_Between_Faces_Example_VB.htm)
- Change Dimensions of Gear Mate (VBA) (Change_Dimensions_of_Gear_Mate_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Intersecting Face and Edge (VBA) (Get_Intersecting_Face_and_Edge_Example_VB.htm)
- Get Intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Rebuild Model (VBA) (Rebuild_Example_VB.htm)
- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Modify Surface-cut Feature (C#) (Modify_Surface_Cut_Feature_Example_CSharp.htm)
- Modify Surface-cut Feature (VB.NET) (Modify_Surface_Cut_Feature_Example_VBNET.htm)
- Modify Surface-cut Feature (VBA) (Modify_Surface_Cut_Feature_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.AddRebuildSaveMark`
- `IModelDoc2.ForceRebuild3`
- `IModelDoc2.Rebuild`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.NeedsRebuild2`