---
type: method
interface: IModelDoc2
member: IGetDependencies2
returns: System.String
parameters:
  -
    name: Traverseflag
    type: System.Boolean
    description: True to traverse down into all dependent files, false for only the highest level within the dependencies
  -
    name: Searchflag
    type: System.Boolean
    description: True to use the search rules to find dependencies, false to look where the documents were last saved
  -
    name: AddReadOnlyInfo
    type: System.Boolean
    description: True to show read-only information in the returned strings, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetDependencies2
  - IModelDoc2.GetNumDependencies
  - ISldWorks.GetDocumentDependencies2
  - ISldWorks.IGetDocumentDependencies2
  - ISldWorks.IGetDocumentDependenciesCount2
keywords:
  - dependent
  - files
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - dependencies
  - document
  - igetdependencies2
  - doc2
  - dependencies2
  - traverseflag
  - boolean
  - searchflag
  - add
  - read
  - only
  - info
  - string
---

# IModelDoc2.IGetDependencies2

Gets all of the model's dependencies.

## Signature

```csharp
System.String IGetDependencies2( 
   System.Boolean
Traverseflag
,
   System.Boolean
Searchflag
,
   System.Boolean
AddReadOnlyInfo
)
```
## Parameters

- `Traverseflag` (System.Boolean): True to traverse down into all dependent files, false for only the highest level within the dependencies
- `Searchflag` (System.Boolean): True to use the search rules to find dependencies, false to look where the documents were last saved
- `AddReadOnlyInfo` (System.Boolean): True to show read-only information in the returned strings, false to not

## Return Value

in-process, unmanaged C++: Pointer to an array of strings; there are two strings for each document returned in this list of dependent files: first string is the file name second string is the filename with the complete pathname NOTE: This combination repeats itself for each dependent file found for this IModelDoc2. VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Calling this method on a drawing document returns a list of all the parts and assemblies used in the drawing. If you set Traverseflag to True, then each of the parts within the assembly file is also returned in this array of strings.
Because a derived mirror part is generated from another part, the list of model dependencies returned by this method would include the original part used to generate the derived mirror part.
Library features are completely unassociated. They do not require the library nor do they update when changes are made to the library feature. Therefore, this method does not return library features.
If you use this method with an assembly that contains two documents, Part1 and SubAssem1, an example of what might be returned is:
[
"Part1", "C:\temp\Part1.SLDPRT", "SubAssem1", "c:\temp\SubAssem1.SLDASM"
]
If Traverseflag is set to True, then all the documents contained in SubAssem1.ASM are returned. Also, suppressed components are recognized and returned by this method as a dependent file.
If AddReadOnlyInfo is set to True, then a string of True or false is added to the list of strings. If Part1 is read-only, then the resulting set of strings would be:
[
"Part1", "C:\temp\Part1.SLDPRT", "True", "SubAssem1", "c:\temp\SubAssem1.SLDASM", ""
]
NOTE
:
For assemblies containing suppressed or lightweight components, file references (return value from this method) point to the as-saved component reference because the actual component has not been loaded into memory. Because the suppressed and lightweight components have not actually been loaded, the current search criteria has not been applied to update the file references. Setting Searchflag to True vs. false, causes this method to apply the current search criteria rules to locate the particular reference and may result in a different return value. Likewise, unsuppressing or resolving these components causes the current search criteria to be applied and updates the assembly's component references in memory, if necessary.
When calling this method with Seachflag set to True, you can explicitly set the search folders first. This is important because this method uses the current SOLIDWORKS directory as its second search criteria. Because the user may have interactively opened files from some random directory, you cannot be certain the current SOLIDWORKS directory is pointing to the desired location. You may want to consider setting the search folders to that of the document being used in this method. For example:
// Get the current search folder settings so that you can reset them later
VARIANT_BOOL currentSearchFolderSetting = false;
BSTR currentSearchFolders = NULL;
hres = TheApplication->m_pSldWorks->GetUserPreferenceToggle ( swUseFolderSearchRules, &currentSearchFolderSetting );
hres = TheApplication->m_pSldWorks->GetSearchFolders ( swDocumentType, &currentSearchFolders );
// Set the search folders to use the path of the document being queried with GetDependencies
BSTR bdocName;
hres = pModelDoc2->GetPathName(&bdocName);
CString docName(bdocName);
VARIANT_BOOL ok = false;
CString searchFolder = getFileLocation(docName); // Function to extract directory from full filename
hres = TheApplication->m_pSldWorks->SetSearchFolders ( swDocumentType, au2B(searchFolder), &ok );
// Reset search folders to previous values
hres = TheApplication->m_pSldWorks->SetUserPreferenceToggle ( swUseFolderSearchRules, currentSearchFolderSetting );
hres = TheApplication->m_pSldWorks->SetSearchFolders ( swDocumentType, currentSearchFolders, &ok );

## Examples

- Get Model Dependencies (C++) (Get_Model_Dependencies_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.GetDependencies2`
- `IModelDoc2.GetNumDependencies`
- `ISldWorks.GetDocumentDependencies2`
- `ISldWorks.IGetDocumentDependencies2`
- `ISldWorks.IGetDocumentDependenciesCount2`