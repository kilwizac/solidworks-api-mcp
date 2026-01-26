---
type: property
interface: IBody2
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - name
  - ibody2
  - body2
  - string
  - traverse
  - bodies
  - components
  - componets
  - vb
  - net
  - vba
  - solid
  - cut
  - list
  - folders
  - custom
  - properties
readonly: null
---

# IBody2.Name

Gets or sets the name of the selected body.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Name of selected body

## Remarks

If changing the name of the body, then the name must be unique and cannot contain the at-sign character (@). Before changing the name of the body, call
IFeaturemanager::IsNameUsed
to find out if the name is unique and valid. To see the new name of the body in the FeatureManager design tree, call
IFeatureManager::UpdateFeatureTree
to update it.

## Examples

- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Get Bodies in Components (C#) (Get_Bodies_in_Components_Example_CSharp.htm)
- Get Bodies in Componets (VB.NET) (Get_Bodies_in_Components_Example_VBNET.htm)
- Get Bodies in Components (VBA) (Get_Bodies_in_Components_Example_VB.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (C#) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_CSharp.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VB.NET) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VBNET.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VBA) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VB.htm)