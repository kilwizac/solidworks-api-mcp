---
type: method
interface: IModelDoc2
member: IGetNumDependencies2
returns: System.Int32
parameters:
  -
    name: Traverseflag
    type: System.Boolean
    description: True to traverse down into all dependent files, false for only the highest level within the dependencies
  -
    name: Searchflag
    type: System.Boolean
    description: True to apply the current search criteria, false to return the dependent file information as it was stored
  -
    name: AddReadOnlyInfo
    type: System.Boolean
    description: True to obtain read-only information with each dependent file
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
  - igetnumdependencies2
  - doc2
  - num
  - dependencies2
  - traverseflag
  - boolean
  - searchflag
  - add
  - read
  - only
  - info
  - int32
---

# IModelDoc2.IGetNumDependencies2

Gets the number of strings returned by IModelDoc2::IGetDependencies2.

## Signature

```csharp
System.Int32 IGetNumDependencies2( 
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
- `Searchflag` (System.Boolean): True to apply the current search criteria, false to return the dependent file information as it was stored
- `AddReadOnlyInfo` (System.Boolean): True to obtain read-only information with each dependent file

## Return Value

Number of strings returned by IModelDoc2::IGetDependencies2

## See Also

- `IModelDoc2.GetDependencies2`
- `IModelDoc2.GetNumDependencies`
- `ISldWorks.GetDocumentDependencies2`
- `ISldWorks.IGetDocumentDependencies2`
- `ISldWorks.IGetDocumentDependenciesCount2`