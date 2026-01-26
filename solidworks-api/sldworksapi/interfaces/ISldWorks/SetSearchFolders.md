---
type: method
interface: ISldWorks
member: SetSearchFolders
returns: System.Boolean
parameters:
  -
    name: FolderType
    type: System.Int32
    description: The search folder type; the only type currently supported is swDocumentType; for an up-to-date listing, see swSearchFolderTypes_e
  -
    name: Folders
    type: System.String
    description: String containing all of the search folders; each search folder should be separated by a semicolon
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDataFolder
  - ISldWorks.GetSearchFolders
  - ISldWorks.SetMissingReferencePathName
keywords:
  - external
  - references
  - search
  - folders
  - files
  - setsearchfolders
  - isldworks
  - sld
  - works
  - folder
  - type
  - int32
  - string
  - boolean
  - vba
  - vb
  - net
---

# ISldWorks.SetSearchFolders

Sets the current folder search path as shown in Tools &gt; Options &gt; System Options &gt; File Locations &gt; Show folders for &gt; Referenced Documents.

## Signature

```csharp
System.Boolean SetSearchFolders( 
   System.Int32
FolderType
,
   System.String
Folders
)
```
## Parameters

- `FolderType` (System.Int32): The search folder type; the only type currently supported is swDocumentType; for an up-to-date listing, see swSearchFolderTypes_e
- `Folders` (System.String): String containing all of the search folders; each search folder should be separated by a semicolon

## Return Value

True if the search folders were set, false if not

## Remarks

The search folders are used by SOLIDWORKS based on their order. Folders at the top of the list get searched first and folders at the bottom of the list get searched last.
This method does not allow you to incrementally add to the search folders list. Calling this method overwrites the existing search folder settings. If you want to add a folder to the existing search folder list, you must get the current search folder list using
ISldWorks::GetSearchFolders
and then add your folder string at the appropriate location.
Search folder settings are ignored unless
Tools > Options > System Options > External References >
Search file locations for external references
is selected. To get and set
Search file locations for external references
in the SOLIDWORKS API, use
swUserPreferenceToggle_e
.swUseFolderSearchRules with
ISldWorks::GetUserPreferenceToggle
and
ISldWorks::SetUserPreferenceToggle
, respectively.

## Examples

- Get and Set Search Folders (VBA) (Get_and_Set_Search_Folders_Example_VB.htm)
- Get and Set Search Folders (VB.NET) (Get_and_Set_Search_Folders_Example_VBNET.htm)
- Get and Set Search Folders (C#) (Get_and_Set_Search_Folders_Example_CSharp.htm)

## See Also

- `ISldWorks.GetDataFolder`
- `ISldWorks.GetSearchFolders`
- `ISldWorks.SetMissingReferencePathName`