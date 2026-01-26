---
type: method
interface: IModelDoc2
member: GetNumDependencies
returns: System.Int32
parameters:
  -
    name: Traverseflag
    type: System.Int32
    description: True to traverse down into all dependent files, false for only the highest level within the dependencies
  -
    name: Searchflag
    type: System.Int32
    description: True to apply the current search criteria, false to return the dependent file information as it was stored
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IGetDependencies2
  - IModelDoc2.IGetNumDependencies2
  - ISldWorks.GetDocumentDependencies2
  - ISldWorks.GetDocumentDependenciesCount
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
  - getnumdependencies
  - doc2
  - num
  - traverseflag
  - int32
  - searchflag
---

# IModelDoc2.GetNumDependencies

Gets the number of strings returned by IModelDoc2::GetDependencies2.

## Signature

```csharp
System.Int32 GetNumDependencies( 
   System.Int32
Traverseflag
,
   System.Int32
Searchflag
)
```
## Parameters

- `Traverseflag` (System.Int32): True to traverse down into all dependent files, false for only the highest level within the dependencies
- `Searchflag` (System.Int32): True to apply the current search criteria, false to return the dependent file information as it was stored

## Return Value

Number of strings returned by IModelDoc2::GetDependencies2

## See Also

- `IModelDoc2.IGetDependencies2`
- `IModelDoc2.IGetNumDependencies2`
- `ISldWorks.GetDocumentDependencies2`
- `ISldWorks.GetDocumentDependenciesCount`
- `ISldWorks.IGetDocumentDependencies2`
- `ISldWorks.IGetDocumentDependenciesCount2`