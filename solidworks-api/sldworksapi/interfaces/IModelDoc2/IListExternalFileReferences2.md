---
type: method
interface: IModelDoc2
member: IListExternalFileReferences2
returns: void
parameters:
  -
    name: NumRefs
    type: System.Int32
    description: 
  -
    name: ModelPathName
    type: System.String
    description: 
  -
    name: CompPathName
    type: System.String
    description: 
  -
    name: Feature
    type: System.String
    description: 
  -
    name: DataType
    type: System.String
    description: 
  -
    name: Status
    type: System.Int32
    description: 
  -
    name: RefEntity
    type: System.String
    description: 
  -
    name: FeatComp
    type: System.String
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - ilistexternalfilereferences2
  - imodeldoc2
  - model
  - doc2
  - list
  - external
  - file
  - references2
  - num
  - refs
  - int32
  - path
  - name
  - string
  - comp
  - feature
  - data
  - type
  - status
  - ref
  - entity
  - feat
  - void
---

# IModelDoc2.IListExternalFileReferences2

Obsolete. Superseded by IModelDocExtension::ListExternalReferences.

## Signature

```csharp
void IListExternalFileReferences2( 
   System.Int32
NumRefs
,
   out System.String
ModelPathName
,
   out System.String
CompPathName
,
   out System.String
Feature
,
   out System.String
DataType
,
   out System.Int32
Status
,
   out System.String
RefEntity
,
   out System.String
FeatComp
)
```
## Parameters

- `NumRefs` (System.Int32): 
- `ModelPathName` (System.String): 
- `CompPathName` (System.String): 
- `Feature` (System.String): 
- `DataType` (System.String): 
- `Status` (System.Int32): 
- `RefEntity` (System.String): 
- `FeatComp` (System.String): 

## Return Value

Unknown.