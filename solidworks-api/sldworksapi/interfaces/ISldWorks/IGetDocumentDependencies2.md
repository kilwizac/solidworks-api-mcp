---
type: method
interface: ISldWorks
member: IGetDocumentDependencies2
returns: System.String
parameters:
  -
    name: Document
    type: System.String
    description: Name of the document
  -
    name: Traverseflag
    type: System.Boolean
    description: True if you want to traverse down into all dependent files, false if you want only the highest level within the dependencies
  -
    name: Searchflag
    type: System.Boolean
    description: Set this argument to True if you want to use the search rules to find dependencies, false looks where the documents were last saved
  -
    name: AddReadOnlyInfo
    type: System.Boolean
    description: True if you wish to have read-only information with the filenames; false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDocumentDependencies2
keywords:
  - document
  - dependencies
  - dependent
  - documents
  - igetdocumentdependencies2
  - isldworks
  - sld
  - works
  - dependencies2
  - string
  - traverseflag
  - boolean
  - searchflag
  - add
  - read
  - only
  - info
---

# ISldWorks.IGetDocumentDependencies2

Gets all of the model dependencies for a document.

## Signature

```csharp
System.String IGetDocumentDependencies2( 
   System.String
Document
,
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

- `Document` (System.String): Name of the document
- `Traverseflag` (System.Boolean): True if you want to traverse down into all dependent files, false if you want only the highest level within the dependencies
- `Searchflag` (System.Boolean): Set this argument to True if you want to use the search rules to find dependencies, false looks where the documents were last saved
- `AddReadOnlyInfo` (System.Boolean): True if you wish to have read-only information with the filenames; false if not

## Return Value

in-process, unmanaged C++: Pointer to an array of strings with two strings for each document returned in this list of dependent files: File name Filename with the complete pathname; this combination repeats itself for each dependent file found for this document VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISldWorks::IGetDoucmentDependenciesCount2
to determine the size of the returned arrayl
As an example, calling this method on a drawing document returns a list of all the part and assemblies used in the drawing. If you set the Traverseflag to True, then each of the parts within the assembly file are also returned in this array of strings.
Another example would be calling this method with a derived mirror part. Because a derived mirror part is generated from another part, the list of model dependencies returned by this method would include the original part used to generate the derived mirror part.
Be aware that Library features are completely unassociated. They do not require the library nor do they update when changes are made to the Library feature. Therefore, this method would not return Library features.
If you use this method with an assembly that contains two documents, Part1 and SubAssem1, an example of what might be returned is:
[
"Part1", "C:\temp\Part1.SLDPRT", "SubAssem1", "c:\temp\SubAssem1.SLDASM"
]
If Traverseflag is set to True, then all of the documents contained in SubAssem1.ASM are also returned. Suppressed components are recognized and returned by this method as a dependent file.
If the AddReadOnlyInfo flag is set to True, then a string of "Read-Only" is added to the list of strings. If Part1 from were read-only, then the resulting set of strings would be:
[
"Part1", "C:\temp\Part1.SLDPRT", "Read-Only", "SubAssem1", "c:\temp\SubAssem1.SLDASM", ""
]
NOTE:
If the SearchFlag is set to True, then the current directory is set to the directory of the document file. This replicates the interactive behavior of the
References
button in the File Open dialog window.

## See Also

- `ISldWorks.GetDocumentDependencies2`