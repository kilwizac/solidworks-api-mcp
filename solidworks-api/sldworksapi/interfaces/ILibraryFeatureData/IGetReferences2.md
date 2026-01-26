---
type: method
interface: ILibraryFeatureData
member: IGetReferences2
returns: System.Object
parameters:
  -
    name: Scope
    type: System.Int32
    description: Reference scope as defined in swLibFeatureData_e
  -
    name: Count
    type: System.Int32
    description: Number of references
  -
    name: RefType
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of type long of reference types as defined by swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferences2
  - ILibraryFeatureData.ISetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - igetreferences2
  - ilibraryfeaturedata
  - library
  - feature
  - data
  - references2
  - scope
  - int32
  - count
  - ref
  - type
  - object
---

# ILibraryFeatureData.IGetReferences2

Obsolete. Superseded by ILibraryFeatureData::IGetReferences3.

## Signature

```csharp
System.Object IGetReferences2( 
   System.Int32
Scope
,
   System.Int32
Count
,
   out System.Int32
RefType
)
```
## Parameters

- `Scope` (System.Int32): Reference scope as defined in swLibFeatureData_e
- `Count` (System.Int32): Number of references
- `RefType` (System.Int32): in-process, unmanaged C++: Pointer to an array of type long of reference types as defined by swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILibraryFeatureData::GetReferencesCount
to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetReferences2`
- `ILibraryFeatureData.ISetReferences`
- `ILibraryFeatureData.SetReferences`