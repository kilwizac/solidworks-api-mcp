---
type: method
interface: IFeatureManager
member: InsertFeatureTreeFolder2
returns: Feature
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of folder to insert as defined by swFeatureTreeFolderType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureFolder
keywords:
  - folders
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - insertfeaturetreefolder2
  - feature
  - manager
  - insert
  - folder2
  - type
  - int32
  - move
  - assembly
  - components
  - new
  - folder
  - vb
  - net
  - vba
  - specify
  - iges
  - levels
  - values
  - import
  - file
---

# IFeatureManager.InsertFeatureTreeFolder2

Inserts a folder in the FeatureManager design tree for pre-selected features or components.

## Signature

```csharp
Feature InsertFeatureTreeFolder2( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of folder to insert as defined by swFeatureTreeFolderType_e

## Return Value

Newly created folder feature

## Remarks

This method operates on the features that are selected before this method executes.
If creating...
Then...
A folder to contain preselected features
Certain types of features cannot be moved into that folder, such as the predefined planes that exist when a new part is created. These types of features are ignored by this method.
If multiple features are selected when this method runs, all of the features are moved into the new folder; however, these features must be consecutive. If they are not, only the first group of consecutive features are moved into the new folder.
An empty folder
The folder is created just before the first valid feature in the selections. The new folder cannot be placed before certain features, such as the predefined planes that exist when a new part is created.
Mold folders
When a surface feature is pre-selected, three sub-folders are created in the Surface Bodies folder: Cavity Surface Bodies, Core Surface Bodies, and Parting Surface Bodies
Because a folder cannot be created inside another folder, any selected features already inside a folder are ignored.
This method works with components and features.

## Examples

- Move Assembly Components to New Folder (C#) (Move_Assembly_Components_to_New_Folder_Example_CSharp.htm)
- Move Assembly Components to New Folder (VB.NET) (Move_Assembly_Components_to_New_Folder_Example_VBNET.htm)
- Move Assembly Components to New Folder (VBA) (Move_Assembly_Components_to_New_Folder_Example_VB.htm)
- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)

## See Also

- `IFeatureFolder`