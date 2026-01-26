---
type: method
interface: ISldWorks
member: IGetDocumentDependenciesCount2
returns: System.Int32
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
    description: True if you want to have read-only information with the filenames, false if not
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
  - igetdocumentdependenciescount2
  - isldworks
  - sld
  - works
  - count2
  - string
  - traverseflag
  - boolean
  - searchflag
  - add
  - read
  - only
  - info
  - int32
---

# ISldWorks.IGetDocumentDependenciesCount2

Gets the size of the array needed for a call to ISldWorks::IGetDocumetnDependencies2.

## Signature

```csharp
System.Int32 IGetDocumentDependenciesCount2( 
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
- `AddReadOnlyInfo` (System.Boolean): True if you want to have read-only information with the filenames, false if not

## Return Value

Number of strings returned by ISldWorks::IGetDocumetnDependencies2

## Remarks

If SearchFlag is set to True, then the current directory is set to the directory of the document file. This is the same as interactively clikcing the
References
button in the File Open dialog.

## See Also

- `ISldWorks.GetDocumentDependencies2`