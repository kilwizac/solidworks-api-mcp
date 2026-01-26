---
type: method
interface: IAssemblyDoc
member: FeatureByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related:
  - IAssemblyDoc.IFeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - featurebyname
  - iassemblydoc
  - assembly
  - doc
  - string
  - object
  - parent
  - child
  - relationship
  - component
  - vba
  - create
  - plane
  - move
  - components
  - new
  - folder
  - vb
  - net
  - roll
  - back
  - model
  - suppress
---

# IAssemblyDoc.FeatureByName

Returns the IFeature object for the named feature in the assembly.

## Signature

```csharp
System.Object FeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the feature

## Return Value

Object for the feature

## Examples

- Get Parent-Child Relationship for Component (VBA) (Get_Parent-Child_Relationship_for_Component_Example_VB.htm)
- Create and Name Plane (VBA) (Create_and_Name_Plane_Example_VB.htm)
- Move Assembly Components to New Folder (C#) (Move_Assembly_Components_to_New_Folder_Example_CSharp.htm)
- Move Assembly Components to New Folder (VB.NET) (Move_Assembly_Components_to_New_Folder_Example_VBNET.htm)
- Move Assembly Components to New Folder (VBA) (Move_Assembly_Components_to_New_Folder_Example_VB.htm)
- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)
- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)

## See Also

- `IAssemblyDoc.IFeatureByName`