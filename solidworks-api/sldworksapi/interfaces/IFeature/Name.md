---
type: property
interface: IFeature
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetNameForSelection
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - string
  - access
  - assembly
  - parent
  - features
  - selected
  - sketches
  - find
  - total
  - length
  - sketch
  - segments
  - vba
  - section
  - properties
  - faces
  - planes
  - traverse
  - component
  - levels
  - using
  - recursion
  - vb
  - net
readonly: null
---

# IFeature.Name

Gets or sets the name of the current feature.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Name of the feature

## Remarks

Feature names can be seen in the FeatureManager design tree of any part or assembly.
Any change to a feature name is not visible to the user until a rebuild has been done. See
IModelDoc2::EditRebuild3
.
If you are setting the name of a feature, then the new name must be unique in the FeatureManager design tree. If the name is not unique, then the name is not changed. Also, the name cannot contain characters that are reserved by SOLIDWORKS.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Get Parent Features (C++) (Get_Parent_Features_Example_CPlusPlus_COM.htm)
- Get Selected Feature (C++) (Get_Selected_Feature_Example_CPlusPlus_COM.htm)
- Get Sketches (C++) (Get_Sketches_Example_CPlusPlus_COM.htm)
- Find Total Length of Sketch Segments in Sketch (VBA) (Find_Total_Length_of_Sketch_Segments_in_Sketch_Example_VB.htm)
- Get Section Properties for Faces from Section Planes (VBA) (Get_Section_Properties_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)

## See Also

- `IFeature.GetNameForSelection`