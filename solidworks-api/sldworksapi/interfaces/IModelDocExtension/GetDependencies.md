---
type: method
interface: IModelDocExtension
member: GetDependencies
returns: System.Object
parameters:
  -
    name: Traverseflag
    type: System.Boolean
    description: True to traverse all dependency levels, false to get first level (see Remarks )
  -
    name: Searchflag
    type: System.Boolean
    description: True to use the search rules to find dependencies, false to look where the documents were last saved (see Remarks )
  -
    name: AddReadOnlyInfo
    type: System.Boolean
    description: True to show read-only information in the returned strings, false to not (see Remarks )
  -
    name: ListBrokenRefs
    type: System.Boolean
    description: True to get broken references, false to not
  -
    name: AppendImportedPaths
    type: System.Boolean
    description: True to append imported path names, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.GetNumDependencies
  - ISldWorks.GetDocumentDependencies2
keywords:
  - dependent
  - files
  - document
  - dependencies
  - getdependencies
  - imodeldocextension
  - model
  - doc
  - extension
  - traverseflag
  - boolean
  - searchflag
  - add
  - read
  - only
  - info
  - list
  - broken
  - refs
  - append
  - imported
  - paths
  - object
---

# IModelDocExtension.GetDependencies

Gets all of this model's dependencies.

## Signature

```csharp
System.Object GetDependencies( 
   System.Boolean
Traverseflag
,
   System.Boolean
Searchflag
,
   System.Boolean
AddReadOnlyInfo
,
   System.Boolean
ListBrokenRefs
,
   System.Boolean
AppendImportedPaths
)
```
## Parameters

- `Traverseflag` (System.Boolean): True to traverse all dependency levels, false to get first level (see Remarks )
- `Searchflag` (System.Boolean): True to use the search rules to find dependencies, false to look where the documents were last saved (see Remarks )
- `AddReadOnlyInfo` (System.Boolean): True to show read-only information in the returned strings, false to not (see Remarks )
- `ListBrokenRefs` (System.Boolean): True to get broken references, false to not
- `AppendImportedPaths` (System.Boolean): True to append imported path names, false to not (see Remarks )

## Return Value

Array of strings (see Remarks )

## Remarks

Calling this method on a drawing document returns a list of all the parts and assemblies used in the drawing. If you set Traverseflag to true, then each of the parts within the assembly file is also returned in this array of strings.
Because a derived mirror part is generated from another part, the list of model dependencies returned by this method would include the original part used to generate the derived mirror part.
Library features are completely unassociated. They do not require the library nor do they update when changes are made to the library feature. Therefore, this method does not return library features.
If you use this method with an assembly that contains two documents, Part1 and SubAssem1, an example of what might be returned is:
[
"Part1", "C:\temp\Part1.SLDPRT", "SubAssem1", "c:\temp\SubAssem1.SLDASM"
]
If Traverseflag is set to true, then all the documents contained in SubAssem1.ASM are returned. Also, suppressed components are recognized and returned by this method as a dependent file.
If AddReadOnlyInfo is set to true, then a string of "TRUE" or "FALSE" is added to the list of strings. If Part1 and SubAssem1 are read-only, then the resulting set of strings would be:
[
"Part1", "C:\temp\Part1.SLDPRT", "TRUE", "SubAssem1", "c:\temp\SubAssem1.SLDASM", "FALSE"
]
If AppendImportedPaths is set to true, and Part1 was imported, "|
imported_file_path
" is appended to the Part1 path. The resulting set of strings would be:
[
"Part1", "C:\temp\Part1.SLDPRT|c:\temp\Creo - Copy\table_wf2.asm.1", "TRUE", "SubAssem1", "c:\temp\SubAssem1.SLDASM", "FALSE"
]
NOTE
:
For assemblies containing suppressed or lightweight components, file references (return value from this method) point to the as-saved component reference because the actual component has not been loaded into memory. Because the suppressed and lightweight components have not actually been loaded, the current search criteria has not been applied to update the file references. Setting Searchflag to true causes this method to apply the current search criteria rules to locate the particular reference and may result in a different return value. Likewise, unsuppressing or resolving these components causes the current search criteria to be applied and updates the assembly's component references in memory, if necessary.
When calling this method with Searchflag set to true, you can explicitly set the search folders first. This is important because this method uses the current SOLIDWORKS directory as its second search criteria. Because the user may have interactively opened files from some random directory, you cannot be certain the current SOLIDWORKS directory is pointing to the desired location. You may want to consider setting the search folders to that of the document being used in this method.

## See Also

- `IModelDoc2.GetNumDependencies`
- `ISldWorks.GetDocumentDependencies2`