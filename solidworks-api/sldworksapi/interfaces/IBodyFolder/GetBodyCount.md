---
type: method
interface: IBodyFolder
member: GetBodyCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetBodies
keywords:
  - getbodycount
  - ibodyfolder
  - body
  - folder
  - count
  - int32
  - bodies
  - folders
  - vba
  - custom
  - properties
  - configuration
  - features
  - multibody
  - sheet
  - metal
  - part
  - vb
  - net
  - solid
  - cut
  - list
---

# IBodyFolder.GetBodyCount

Gets the number of bodies in the folder.

## Signature

```csharp
System.Int32 GetBodyCount()
```
## Parameters

None.

## Return Value

Number of bodies in the folder

## Remarks

Use this method before using
IBodyFolder::IGetBodies
.
See
Accessing Bodies in Body Folders
for details about the BodyFolder interface.

## Examples

- Get Bodies in Body Folders (VBA) (Get_Bodies_in_Body_Folders_Example_VB.htm)
- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Features of Multibody Sheet Metal Part (C#) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_CSharp.htm)
- Get Features of Multibody Sheet Metal Part (VB.NET) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VBNET.htm)
- Get Features of Multibody Sheet Metal Part (VBA) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VB.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (C#) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_CSharp.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VB.NET) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VBNET.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VBA) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VB.htm)

## See Also

- `IBodyFolder.GetBodies`