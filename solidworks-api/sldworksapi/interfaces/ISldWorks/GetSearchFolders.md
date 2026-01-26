---
type: method
interface: ISldWorks
member: GetSearchFolders
returns: System.String
parameters:
  -
    name: FolderType
    type: System.Int32
    description: Search folder type; the only type supported is swDocumentType; for an up-to-date listing, see swSearchFolderTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDataFolder
  - ISldWorks.SetMissingReferencePathName
  - ISldWorks.SetSearchFolders
keywords:
  - external
  - references
  - search
  - folders
  - files
  - getsearchfolders
  - isldworks
  - sld
  - works
  - folder
  - type
  - int32
  - string
  - vba
  - vb
  - net
---

# ISldWorks.GetSearchFolders

Gets the current folder search path as shown in Tools &gt; Options &gt; System Options &gt; File Locations &gt; Show folders for &gt; Referenced Documents.

## Signature

```csharp
System.String GetSearchFolders( 
   System.Int32
FolderType
)
```
## Parameters

- `FolderType` (System.Int32): Search folder type; the only type supported is swDocumentType; for an up-to-date listing, see swSearchFolderTypes_e

## Return Value

String containing all of the search folders; each search folder is separated by a semicolon

## Remarks

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
- `ISldWorks.SetMissingReferencePathName`
- `ISldWorks.SetSearchFolders`