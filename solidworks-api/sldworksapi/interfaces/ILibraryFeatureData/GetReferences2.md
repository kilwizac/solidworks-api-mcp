---
type: method
interface: ILibraryFeatureData
member: GetReferences2
returns: System.Object
parameters:
  -
    name: Scope
    type: System.Int32
    description: Reference scope as defined in swLibFeatureData_e
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
  - ILibraryFeatureData.IGetReferences2
  - ILibraryFeatureData.ISetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - getreferences2
  - ilibraryfeaturedata
  - library
  - feature
  - data
  - references2
  - scope
  - int32
  - ref
  - type
  - object
---

# ILibraryFeatureData.GetReferences2

Obsolete. Superseded by ILibraryFeatureData::GetReferences3.

## Signature

```csharp
System.Object GetReferences2( 
   System.Int32
Scope
,
   out System.Object
RefType
)
```
## Parameters

- `Scope` (System.Int32): Reference scope as defined in swLibFeatureData_e
- `RefType` (System.Object): Array of reference types as defined by swSelectType_e

## Return Value

Array of references

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.IGetReferences2`
- `ILibraryFeatureData.ISetReferences`
- `ILibraryFeatureData.SetReferences`