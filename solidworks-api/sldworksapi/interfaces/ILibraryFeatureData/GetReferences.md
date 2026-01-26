---
type: method
interface: ILibraryFeatureData
member: GetReferences
returns: System.Object
parameters:
  -
    name: RefType
    type: System.Object
    description: Array of reference types as defined by swSelectType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferencesCount
  - ILibraryFeatureData.IGetReferences
  - ILibraryFeatureData.ISetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - getreferences
  - ilibraryfeaturedata
  - library
  - feature
  - data
  - references
  - ref
  - type
  - object
---

# ILibraryFeatureData.GetReferences

Obsolete. Superseded by ILibraryFeatureData::GetReferences2.

## Signature

```csharp
System.Object GetReferences( 
   out System.Object
RefType
)
```
## Parameters

- `RefType` (System.Object): Array of reference types as defined by swSelectType_e

## Return Value

Array of references

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetReferencesCount`
- `ILibraryFeatureData.IGetReferences`
- `ILibraryFeatureData.ISetReferences`
- `ILibraryFeatureData.SetReferences`